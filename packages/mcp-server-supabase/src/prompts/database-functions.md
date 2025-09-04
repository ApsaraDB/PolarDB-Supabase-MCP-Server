# Database: Create functions

## 🎯 目标
创建高效、可维护的数据库函数，提升应用性能和数据一致性。

## 🏗️ 函数类型

### 1. 标量函数
```sql
-- 计算用户年龄
CREATE OR REPLACE FUNCTION calculate_age(birth_date DATE)
RETURNS INTEGER AS $$
BEGIN
  RETURN EXTRACT(YEAR FROM AGE(birth_date));
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 格式化金额
CREATE OR REPLACE FUNCTION format_currency(amount DECIMAL, currency_code VARCHAR(3))
RETURNS VARCHAR AS $$
BEGIN
  RETURN currency_code || ' ' || TO_CHAR(amount, 'FM999,999,999.00');
END;
$$ LANGUAGE plpgsql IMMUTABLE;
```

### 2. 表函数
```sql
-- 获取用户订单统计
CREATE OR REPLACE FUNCTION get_user_order_stats(user_uuid UUID)
RETURNS TABLE (
  total_orders BIGINT,
  total_spent DECIMAL(10,2),
  avg_order_value DECIMAL(10,2),
  last_order_date TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COUNT(o.id)::BIGINT,
    COALESCE(SUM(o.total_amount), 0),
    COALESCE(AVG(o.total_amount), 0),
    MAX(o.created_at)
  FROM orders o
  WHERE o.user_id = user_uuid;
END;
$$ LANGUAGE plpgsql STABLE;
```

### 3. 触发器函数
```sql
-- 自动更新时间戳
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 创建触发器
CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## 🔒 安全函数

### 1. 数据验证函数
```sql
-- 验证邮箱格式
CREATE OR REPLACE FUNCTION is_valid_email(email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$';
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 验证密码强度
CREATE OR REPLACE FUNCTION is_strong_password(password TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN 
    LENGTH(password) >= 8 AND
    password ~ '[A-Z]' AND
    password ~ '[a-z]' AND
    password ~ '[0-9]' AND
    password ~ '[^A-Za-z0-9]';
END;
$$ LANGUAGE plpgsql IMMUTABLE;
```

### 2. 权限检查函数
```sql
-- 检查用户权限
CREATE OR REPLACE FUNCTION check_user_permission(
  user_uuid UUID,
  required_permission TEXT
)
RETURNS BOOLEAN AS $$
DECLARE
  has_permission BOOLEAN;
BEGIN
  SELECT EXISTS(
    SELECT 1 FROM user_permissions up
    JOIN permissions p ON up.permission_id = p.id
    WHERE up.user_id = user_uuid
    AND p.name = required_permission
    AND up.is_active = true
  ) INTO has_permission;
  
  RETURN has_permission;
END;
$$ LANGUAGE plpgsql STABLE;
```

## 🔄 事务函数

### 1. 复杂业务逻辑
```sql
-- 处理订单支付
CREATE OR REPLACE FUNCTION process_order_payment(
  order_uuid UUID,
  payment_amount DECIMAL(10,2),
  payment_method TEXT
)
RETURNS BOOLEAN AS $$
DECLARE
  order_record RECORD;
  user_record RECORD;
BEGIN
  -- 开始事务
  BEGIN
    -- 获取订单信息
    SELECT * INTO order_record FROM orders WHERE id = order_uuid;
    IF NOT FOUND THEN
      RAISE EXCEPTION 'Order not found';
    END IF;
    
    -- 获取用户信息
    SELECT * INTO user_record FROM users WHERE id = order_record.user_id;
    
    -- 验证支付金额
    IF payment_amount != order_record.total_amount THEN
      RAISE EXCEPTION 'Payment amount mismatch';
    END IF;
    
    -- 更新订单状态
    UPDATE orders 
    SET 
      status = 'paid',
      payment_method = payment_method,
      paid_at = NOW(),
      updated_at = NOW()
    WHERE id = order_uuid;
    
    -- 记录支付历史
    INSERT INTO payment_history (
      order_id, amount, method, processed_at
    ) VALUES (
      order_uuid, payment_amount, payment_method, NOW()
    );
    
    -- 提交事务
    RETURN true;
    
  EXCEPTION
    WHEN OTHERS THEN
      -- 回滚事务
      RAISE;
  END;
END;
$$ LANGUAGE plpgsql;
```

## ⚡ 性能优化

### 1. 函数属性
```sql
-- 不可变函数（相同输入总是返回相同输出）
CREATE OR REPLACE FUNCTION get_user_by_id(user_id UUID)
RETURNS users AS $$
  SELECT * FROM users WHERE id = user_id;
$$ LANGUAGE sql IMMUTABLE;

-- 稳定函数（相同输入在事务内返回相同输出）
CREATE OR REPLACE FUNCTION get_user_profile(user_id UUID)
RETURNS user_profiles AS $$
  SELECT * FROM user_profiles WHERE user_id = $1;
$$ LANGUAGE sql STABLE;

-- 易变函数（可能返回不同结果）
CREATE OR REPLACE FUNCTION get_current_timestamp()
RETURNS TIMESTAMP WITH TIME ZONE AS $$
  SELECT NOW();
$$ LANGUAGE sql VOLATILE;
```

### 2. 并行执行
```sql
-- 支持并行执行的函数
CREATE OR REPLACE FUNCTION parallel_process_data(data_array INTEGER[])
RETURNS INTEGER AS $$
BEGIN
  RETURN array_length(data_array, 1);
END;
$$ LANGUAGE plpgsql PARALLEL SAFE;
```

## 🧪 测试函数

### 1. 单元测试
```sql
-- 测试函数
CREATE OR REPLACE FUNCTION test_calculate_age()
RETURNS BOOLEAN AS $$
DECLARE
  test_result INTEGER;
BEGIN
  -- 测试用例 1
  test_result := calculate_age('1990-01-01'::DATE);
  IF test_result != 34 THEN
    RAISE EXCEPTION 'Test failed: expected 34, got %', test_result;
  END IF;
  
  -- 测试用例 2
  test_result := calculate_age('2000-01-01'::DATE);
  IF test_result != 24 THEN
    RAISE EXCEPTION 'Test failed: expected 24, got %', test_result;
  END IF;
  
  RETURN true;
END;
$$ LANGUAGE plpgsql;
```

## 📚 相关资源
- [PostgreSQL Functions Documentation](https://www.postgresql.org/docs/current/xfunc.html)
- [Supabase Database Functions](https://supabase.com/docs/guides/database/functions)


