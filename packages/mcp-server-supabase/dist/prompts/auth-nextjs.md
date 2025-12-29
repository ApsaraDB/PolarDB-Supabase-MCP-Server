# Bootstrap Next.js app with Supabase Auth

## 🎯 目标
在 Next.js 应用中快速设置 Supabase 认证系统。

## 🛠️ 所需工具
- Next.js 项目
- Supabase 项目
- Supabase JavaScript 客户端

## 🚀 实现步骤

### 1. 安装依赖
```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

### 2. 环境变量配置
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. 创建 Supabase 客户端
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
```

### 4. 认证组件示例
```typescript
// components/Auth.tsx
import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (error) console.log('Error:', error.message)
    else alert('Check your email for the confirmation link!')
    setLoading(false)
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) console.log('Error:', error.message)
    setLoading(false)
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      
      <form onSubmit={handleSignIn}>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
```

## 🔒 安全最佳实践
- 使用环境变量存储敏感信息
- 实现适当的错误处理
- 添加加载状态和用户反馈
- 考虑实现密码强度验证

## 📚 相关资源
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Next.js Documentation](https://nextjs.org/docs)


