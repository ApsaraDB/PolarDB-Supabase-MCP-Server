# Database: Create RLS policies

## 🎯 目标
实现行级安全策略，确保数据访问的安全性和隔离性。

## 🔒 RLS 基础概念

### 1. 启用 RLS
```sql
-- 为表启用 RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
```

### 2. 创建策略
```sql
-- 用户只能访问自己的数据
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

-- 用户只能创建自己的订单
CREATE POLICY "Users can create own orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 用户只能查看自己的订单
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);
```

## 🏗️ 策略模式

### 1. 基于用户 ID 的策略
```sql
-- 用户表策略
CREATE POLICY "Users can manage own data" ON users
  FOR ALL USING (auth.uid() = id);

-- 订单表策略
CREATE POLICY "Users can manage own orders" ON orders
  FOR ALL USING (auth.uid() = user_id);

-- 产品表策略（只读）
CREATE POLICY "Users can view products" ON products
  FOR SELECT USING (true);
```

### 2. 基于角色的策略
```sql
-- 管理员策略
CREATE POLICY "Admins can manage all data" ON users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles 
      WHERE user_id = auth.uid() 
      AND role = 'admin'
    )
  );

-- 普通用户策略
CREATE POLICY "Users can view public data" ON products
  FOR SELECT USING (is_public = true);
```

### 3. 基于状态的策略
```sql
-- 活跃用户策略
CREATE POLICY "Active users can access premium features" ON premium_content
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND is_active = true 
      AND subscription_status = 'active'
    )
  );
```

## 🔐 高级策略

### 1. 时间限制策略
```sql
-- 限制访问时间
CREATE POLICY "Business hours access" ON sensitive_data
  FOR SELECT USING (
    EXTRACT(HOUR FROM NOW()) BETWEEN 9 AND 17
  );
```

### 2. 地理位置策略
```sql
-- 基于 IP 地址的策略
CREATE POLICY "Local access only" ON internal_data
  FOR SELECT USING (
    inet_client_addr() <<= '192.168.0.0/16'
  );
```

### 3. 数据敏感度策略
```sql
-- 基于数据敏感度的策略
CREATE POLICY "Sensitive data access" ON user_profiles
  FOR SELECT USING (
    CASE 
      WHEN auth.uid() = user_id THEN true
      WHEN is_public = true THEN true
      WHEN EXISTS (
        SELECT 1 FROM user_roles 
        WHERE user_id = auth.uid() 
        AND role IN ('admin', 'moderator')
      ) THEN true
      ELSE false
    END
  );
```

## 🧪 测试策略

### 1. 策略测试
```sql
-- 测试用户策略
-- 以用户身份连接
SET LOCAL ROLE authenticated;
SET LOCAL "request.jwt.claim.sub" TO 'user-uuid';

-- 测试查询
SELECT * FROM users WHERE id = 'user-uuid';
SELECT * FROM users WHERE id != 'user-uuid'; -- 应该返回空
```

### 2. 策略验证
```sql
-- 查看表的策略
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE tablename = 'users';

-- 查看 RLS 状态
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'users';
```

## ⚠️ 注意事项

### 1. 性能考虑
- 策略函数应该高效执行
- 避免复杂的子查询
- 使用适当的索引

### 2. 调试技巧
- 使用 `EXPLAIN` 分析策略执行
- 检查策略是否按预期工作
- 验证用户权限设置

### 3. 常见陷阱
- 忘记启用 RLS
- 策略过于复杂
- 没有测试所有场景

## 📚 相关资源
- [PostgreSQL RLS Documentation](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [Supabase RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)


