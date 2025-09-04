# Writing Supabase Edge Functions

## 🎯 目标
开发高效、安全的 Supabase Edge Functions。

## 📝 函数模板

### 基础函数结构
```typescript
// supabase/functions/my-function/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  try {
    // 获取请求数据
    const { name } = await req.json()
    
    // 业务逻辑
    const message = `Hello ${name}!`
    
    // 返回响应
    return new Response(
      JSON.stringify({ message }),
      { 
        headers: { "Content-Type": "application/json" },
        status: 200 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { "Content-Type": "application/json" },
        status: 400 
      }
    )
  }
})
```

### 数据库操作函数
```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

serve(async (req) => {
  // 创建 Supabase 客户端
  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  )
  
  try {
    const { data, error } = await supabaseClient
      .from('users')
      .select('*')
      .limit(10)
    
    if (error) throw error
    
    return new Response(
      JSON.stringify({ data }),
      { headers: { "Content-Type": "application/json" } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { "Content-Type": "application/json" },
        status: 400 
      }
    )
  }
})
```

## 🔒 安全最佳实践
- 验证 JWT 令牌
- 实现适当的错误处理
- 目前不支持使用环境变量存储敏感信息

## 🚀 部署和测试
重要：不支持基于 supabase cli 的 Edge Functions 部署方式，可以通过 PolarDB Supabase MCP 进行 Edge Functions 管理。

## 📚 相关资源
- [Edge Functions Documentation](https://supabase.com/docs/guides/functions)
- [Deno Runtime](https://deno.land/)


