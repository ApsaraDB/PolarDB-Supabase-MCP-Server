# Postgres SQL Style Guide

## 🎯 目标
遵循一致的 PostgreSQL SQL 编码风格，提高代码可读性和维护性。

## 📝 命名约定

### 1. 表名
```sql
-- ✅ 好的命名
users, user_profiles, order_items, product_categories

-- ❌ 避免的命名
User, userProfile, orderItem, productCategory
```

### 2. 字段名
```sql
-- ✅ 好的命名
user_id, created_at, is_active, email_address

-- ❌ 避免的命名
userId, createdAt, isActive, emailAddress
```

### 3. 约束名
```sql
-- ✅ 好的命名
fk_users_orders, idx_users_email, uk_users_email, chk_users_age

-- ❌ 避免的命名
FK_Users_Orders, idxUsersEmail, UK_Users_Email
```

### 4. 函数名
```sql
-- ✅ 好的命名
get_user_by_id, calculate_total_amount, validate_email_format

-- ❌ 避免的命名
getUserById, calculateTotalAmount, validateEmailFormat
```

## 🏗️ 表结构

### 1. 字段顺序
```sql
CREATE TABLE users (
  -- 主键
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- 业务字段
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(100),
  
  -- 状态字段
  is_active BOOLEAN DEFAULT true,
  status VARCHAR(20) DEFAULT 'pending',
  
  -- 时间字段
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- 外键
  role_id UUID REFERENCES roles(id)
);
```

### 2. 数据类型选择
```sql
-- ✅ 推荐的数据类型
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),           -- 主键
email VARCHAR(255),                                      -- 邮箱
description TEXT,                                         -- 长文本
price DECIMAL(10,2),                                     -- 金额
is_active BOOLEAN DEFAULT true,                          -- 布尔值
created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),       -- 时间戳
metadata JSONB,                                          -- 结构化数据

-- ❌ 避免的数据类型
id INTEGER,                                              -- 可能溢出
email CHAR(255),                                         -- 固定长度浪费空间
description VARCHAR(1000),                               -- 限制长度
price FLOAT,                                             -- 精度问题
```

### 3. 约束定义
```sql
-- ✅ 好的约束定义
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_number VARCHAR(20) UNIQUE NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount > 0),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 添加约束
ALTER TABLE orders ADD CONSTRAINT fk_orders_user 
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE orders ADD CONSTRAINT chk_orders_amount 
  CHECK (total_amount > 0);
```

## 🔍 查询语句

### 1. SELECT 语句
```sql
-- ✅ 好的 SELECT 语句
SELECT 
  u.id,
  u.email,
  u.full_name,
  COUNT(o.id) as order_count,
  SUM(o.total_amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.is_active = true
  AND u.created_at >= '2024-01-01'
GROUP BY u.id, u.email, u.full_name
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 100;

-- ❌ 避免的写法
SELECT * FROM users u, orders o WHERE u.id = o.user_id;
```

### 2. JOIN 语句
```sql
-- ✅ 好的 JOIN 写法
SELECT 
  u.email,
  o.order_number,
  p.name as product_name
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN order_items oi ON o.id = oi.order_id
INNER JOIN products p ON oi.product_id = p.id
WHERE u.is_active = true;

-- ❌ 避免的写法
SELECT u.email, o.order_number, p.name
FROM users u, orders o, order_items oi, products p
WHERE u.id = o.user_id AND o.id = oi.order_id AND oi.product_id = p.id;
```

### 3. 子查询
```sql
-- ✅ 好的子查询
SELECT 
  u.email,
  (SELECT COUNT(*) FROM orders WHERE user_id = u.id) as order_count
FROM users u
WHERE u.is_active = true;

-- 或者使用 EXISTS
SELECT u.email
FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o 
  WHERE o.user_id = u.id 
  AND o.status = 'completed'
);

-- ❌ 避免的写法
SELECT u.email, COUNT(o.id) as order_count
FROM users u, orders o
WHERE u.id = o.user_id(+);  -- Oracle 语法
```

## 🔒 安全最佳实践

### 1. 参数化查询
```sql
-- ✅ 使用参数化查询
SELECT * FROM users WHERE email = $1 AND status = $2;

-- ❌ 字符串拼接（易受 SQL 注入攻击）
SELECT * FROM users WHERE email = 'user@example.com' AND status = 'active';
```

### 2. 权限控制
```sql
-- ✅ 使用 RLS 控制访问
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid() = id);

-- ❌ 在应用层控制权限
-- 这可能导致权限绕过
```

## ⚡ 性能优化

### 1. 索引策略
```sql
-- ✅ 好的索引策略
-- 为常用查询字段创建索引
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_status ON users(status);
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- 部分索引
CREATE INDEX idx_users_active ON users(email) WHERE is_active = true;

-- ❌ 避免的索引
CREATE INDEX idx_users_all ON users(id, email, username, full_name);  -- 过度索引
```

### 2. 查询优化
```sql
-- ✅ 好的查询习惯
-- 只选择需要的字段
SELECT id, email, full_name FROM users WHERE is_active = true;

-- 使用 LIMIT 限制结果集
SELECT * FROM orders ORDER BY created_at DESC LIMIT 100;

-- 避免 SELECT *
SELECT * FROM users;  -- ❌ 选择所有字段
```

## 📋 代码格式化

### 1. 缩进和换行
```sql
-- ✅ 好的格式化
SELECT 
  u.id,
  u.email,
  u.full_name,
  COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.is_active = true
  AND u.created_at >= '2024-01-01'
GROUP BY 
  u.id, 
  u.email, 
  u.full_name
HAVING COUNT(o.id) > 0
ORDER BY order_count DESC
LIMIT 100;

-- ❌ 不好的格式化
SELECT u.id,u.email,u.full_name,COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id=o.user_id WHERE u.is_active=true AND u.created_at>='2024-01-01' GROUP BY u.id,u.email,u.full_name HAVING COUNT(o.id)>0 ORDER BY order_count DESC LIMIT 100;
```

### 2. 注释规范
```sql
-- ✅ 好的注释
-- 获取活跃用户的订单统计
SELECT 
  u.id,
  u.email,
  COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.is_active = true  -- 只查询活跃用户
GROUP BY u.id, u.email;

-- ❌ 不好的注释
-- 查询用户
SELECT * FROM users;  -- 注释过于简单
```

## 🧪 测试和验证

### 1. 查询测试
```sql
-- ✅ 测试查询
-- 先测试小数据集
SELECT COUNT(*) FROM users WHERE is_active = true;

-- 使用 EXPLAIN 分析查询计划
EXPLAIN (ANALYZE, BUFFERS) 
SELECT * FROM users WHERE email = 'test@example.com';

-- ❌ 直接在生产环境执行复杂查询
```

### 2. 数据验证
```sql
-- ✅ 数据验证
-- 检查数据完整性
SELECT COUNT(*) FROM users WHERE email IS NULL;
SELECT COUNT(*) FROM users WHERE username IS NULL;

-- 验证约束
SELECT COUNT(*) FROM orders WHERE total_amount <= 0;
```

## 📚 相关资源
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Supabase SQL Guide](https://supabase.com/docs/guides/database)
- [PostgreSQL Style Guide](https://www.postgresql.org/docs/current/style-guide.html)


