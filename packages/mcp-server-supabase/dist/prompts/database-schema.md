# Database: Declarative Database Schema

## 🎯 目标
使用声明式方法设计清晰、可维护的数据库模式。

## 🏗️ 模式设计原则

### 1. 命名约定
- 表名使用复数形式：`users`, `orders`, `products`
- 字段名使用小写和下划线：`user_id`, `created_at`, `is_active`
- 约束名使用描述性名称：`fk_user_orders`, `idx_users_email`

### 2. 数据类型选择
```sql
-- 用户表示例
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(100),
  avatar_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 订单表示例
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  order_number VARCHAR(20) UNIQUE NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL CHECK (total_amount > 0),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. 索引策略
```sql
-- 为常用查询字段创建索引
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);

-- 复合索引
CREATE INDEX idx_orders_user_status ON orders(user_id, status);
```

### 4. 约束和验证
```sql
-- 检查约束
ALTER TABLE users ADD CONSTRAINT chk_email_format 
  CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- 外键约束
ALTER TABLE orders ADD CONSTRAINT fk_orders_user 
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- 唯一约束
ALTER TABLE users ADD CONSTRAINT uk_users_email UNIQUE (email);
```

## 🔄 模式演进

### 1. 使用迁移文件
```sql
-- migrations/001_create_users_table.sql
CREATE TABLE users (
  -- 表结构
);

-- migrations/002_add_user_profile.sql
ALTER TABLE users ADD COLUMN profile_data JSONB;
```

### 2. 向后兼容性
```sql
-- 添加新字段时提供默认值
ALTER TABLE users ADD COLUMN phone VARCHAR(20) DEFAULT NULL;

-- 删除字段前先标记为废弃
ALTER TABLE users ADD COLUMN is_deprecated BOOLEAN DEFAULT false;
```

## ⚡ 性能优化

### 1. 分区策略
```sql
-- 按时间分区
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  -- 其他字段
) PARTITION BY RANGE (created_at);

-- 创建分区
CREATE TABLE orders_2024 PARTITION OF orders
  FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');
```

### 2. 物化视图
```sql
-- 创建物化视图
CREATE MATERIALIZED VIEW user_order_summary AS
SELECT 
  u.id,
  u.email,
  COUNT(o.id) as order_count,
  SUM(o.total_amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.email;

-- 定期刷新
REFRESH MATERIALIZED VIEW user_order_summary;
```

## 🔒 安全考虑
- 使用 RLS (Row Level Security) 控制数据访问
- 实现适当的权限管理
- 定期审计数据库访问
- 加密敏感数据

## 📚 相关资源
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Supabase Database Guide](https://supabase.com/docs/guides/database)


