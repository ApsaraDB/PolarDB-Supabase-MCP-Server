# Database: Create migration

## 🎯 目标
创建安全、可回滚的数据库迁移，管理数据库模式的演进。

## 🏗️ 迁移基础

### 1. 迁移文件命名
```bash
# 格式：YYYYMMDDHHMMSS_description.sql
20241220120000_create_users_table.sql
20241220120001_add_user_profile.sql
20241220120002_create_orders_table.sql
```

### 2. 迁移文件结构
```sql
-- 迁移文件：20241220120000_create_users_table.sql

-- 向上迁移
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- 向下迁移（回滚）
-- DROP TABLE users CASCADE;
```

## 🔄 迁移类型

### 1. 表结构迁移
```sql
-- 创建表
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL CHECK (price > 0),
  category_id UUID REFERENCES categories(id),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 添加字段
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
ALTER TABLE users ADD COLUMN avatar_url TEXT;

-- 修改字段
ALTER TABLE users ALTER COLUMN email TYPE VARCHAR(320);
ALTER TABLE users ALTER COLUMN username SET NOT NULL;

-- 删除字段
ALTER TABLE users DROP COLUMN phone;
```

### 2. 数据迁移
```sql
-- 插入初始数据
INSERT INTO categories (name, description) VALUES
  ('Electronics', 'Electronic devices and accessories'),
  ('Clothing', 'Apparel and fashion items'),
  ('Books', 'Books and publications');

-- 更新现有数据
UPDATE users 
SET full_name = CONCAT(first_name, ' ', last_name)
WHERE full_name IS NULL;

-- 数据清理
DELETE FROM users WHERE created_at < '2020-01-01';
```

### 3. 索引迁移
```sql
-- 创建索引
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_price ON products(price);
CREATE INDEX idx_products_active ON products(is_active) WHERE is_active = true;

-- 删除索引
DROP INDEX IF EXISTS idx_products_old;
```

## 🔒 安全迁移

### 1. 事务包装
```sql
-- 使用事务确保原子性
BEGIN;

-- 执行迁移操作
CREATE TABLE new_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL
);

-- 复制数据
INSERT INTO new_users (id, email, username)
SELECT id, email, username FROM users;

-- 重命名表
ALTER TABLE users RENAME TO users_old;
ALTER TABLE new_users RENAME TO users;

COMMIT;
```

### 2. 回滚准备
```sql
-- 在迁移前创建备份
CREATE TABLE users_backup AS SELECT * FROM users;

-- 或者使用临时表
CREATE TEMP TABLE users_temp AS SELECT * FROM users;
```

### 3. 数据验证
```sql
-- 迁移后验证数据完整性
SELECT COUNT(*) FROM users;
SELECT COUNT(*) FROM users_backup;

-- 验证关键数据
SELECT COUNT(*) FROM users WHERE email IS NULL;
SELECT COUNT(*) FROM users WHERE username IS NULL;
```

## ⚡ 性能优化

### 1. 批量操作
```sql
-- 批量插入
INSERT INTO products (name, price, category_id)
SELECT 
  'Product ' || generate_series(1, 1000),
  random() * 1000,
  (random() * 5 + 1)::int
FROM generate_series(1, 1000);

-- 批量更新
UPDATE products 
SET price = price * 1.1
WHERE category_id = 1;
```

### 2. 并发控制
```sql
-- 使用 LOCK 避免并发问题
LOCK TABLE users IN ACCESS EXCLUSIVE MODE;

-- 或者使用行级锁
SELECT * FROM users WHERE id = 'user-uuid' FOR UPDATE;
```

## 🧪 测试迁移

### 1. 本地测试
```bash
# 在本地环境测试迁移
supabase db reset
supabase db push

# 验证迁移结果
supabase db diff
```

### 2. 迁移验证
```sql
-- 检查表结构
\d users

-- 检查索引
SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'users';

-- 检查约束
SELECT conname, contype, pg_get_constraintdef(oid) 
FROM pg_constraint 
WHERE conrelid = 'users'::regclass;
```

## 📋 迁移清单

### 1. 迁移前检查
- [ ] 备份生产数据
- [ ] 在测试环境验证迁移
- [ ] 检查依赖关系
- [ ] 评估停机时间
- [ ] 准备回滚方案

### 2. 迁移执行
- [ ] 执行迁移脚本
- [ ] 验证数据完整性
- [ ] 更新应用配置
- [ ] 监控系统性能
- [ ] 记录迁移日志

### 3. 迁移后检查
- [ ] 验证所有功能正常
- [ ] 检查性能指标
- [ ] 更新文档
- [ ] 清理临时文件
- [ ] 通知相关团队

## ⚠️ 注意事项

### 1. 常见陷阱
- 忘记处理外键约束
- 没有考虑数据量大小
- 忽略索引重建时间
- 忘记更新应用代码

### 2. 最佳实践
- 总是测试迁移脚本
- 使用版本控制管理迁移
- 记录详细的迁移日志
- 准备回滚计划
- 在低峰期执行迁移

## 📚 相关资源
- [PostgreSQL ALTER TABLE](https://www.postgresql.org/docs/current/sql-altertable.html)
- [Supabase Migrations](https://supabase.com/docs/guides/database/migrations)


