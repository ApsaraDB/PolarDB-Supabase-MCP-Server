# PolarDB Supabase MCP Server

> Connect your PolarDB Supabase instances to Cursor, Claude, Windsurf, and other AI assistants.

The [Model Context Protocol](https://modelcontextprotocol.io/introduction) (MCP) standardizes how Large Language Models (LLMs) talk to external services like Supabase. This server connects AI assistants directly with your PolarDB Supabase project and allows them to perform tasks like managing tables, fetching config, and querying data.

## Prerequisites

You will need Node.js installed on your machine. You can check this by running:

```shell
node -v
```

If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

## Setup

### 1. Get your PolarDB credentials

You'll need the following from your PolarDB instance:

- **API URL**: Your PolarDB instance endpoint (e.g., `http://your-host:port`)
- **Service Role Key**: For database operations
- **Dashboard Username/Password**: For Edge Functions, secrets management, and type generation

### 2. Configure your MCP client

Configure your MCP client (such as Cursor) to use this server. Most MCP clients store the configuration as JSON.

#### Option 1: Using npx (Recommended - No local build required)

```json
{
  "mcpServers": {
    "polardb-supabase": {
      "command": "npx",
      "args": [
        "-y",
        "polardb-supabase-mcp",
        "--api-url",
        "http://your-polardb-supabase-host:port",
        "--service-role-key",
        "your-service-role-key",
        "--anon-key",
        "your-anon-key",
        "--dashboard-username",
        "your-dashboard-username",
        "--dashboard-password",
        "your-dashboard-password",
        "--project-ref",
        "default"
      ]
    }
  }
}
```

#### Option 2: Using local build

```json
{
  "mcpServers": {
    "polardb-supabase": {
      "command": "node",
      "args": [
        "/path/to/supabase-mcp/packages/mcp-server-supabase/dist/transports/stdio.js",
        "--api-url",
        "http://your-polardb-supabase-host:port",
        "--service-role-key",
        "your-service-role-key",
        "--anon-key",
        "your-anon-key",
        "--dashboard-username",
        "your-dashboard-username",
        "--dashboard-password",
        "your-dashboard-password",
        "--project-ref",
        "default"
      ]
    }
  }
}
```

Replace the placeholder values with your actual PolarDB credentials.


## Security

Before running the MCP server, we recommend you read our [security best practices](#security-risks) to understand the risks of connecting an LLM to your PolarDB projects and how to mitigate them.

### Read-only mode

To restrict the server to read-only queries, set the `--read-only` flag:

```shell
node /path/to/supabase-mcp/packages/mcp-server-supabase/dist/transports/stdio.js --read-only
```

We recommend you enable this by default. This prevents write operations on your databases, including creating or deleting Edge Function secrets.

## Tools

The following tools are available to the LLM:

### Database
- `list_tables`: Lists all tables within the specified schemas
- `execute_sql`: Executes raw SQL in the database

### Development
- `get_project_url`: Gets the API URL for a project
- `get_anon_key`: Gets the anonymous API key for a project

### Edge Functions
- `list_edge_functions`: Lists all Edge Functions in a project
- `get_edge_function`: Gets details for a specific Edge Function
- `deploy_edge_function`: Deploys a new Edge Function to a project

### Edge Functions Secrets
- `list_edge_function_secrets`: Lists all Edge Function secrets (encrypted values)
- `create_edge_function_secrets`: Creates or updates Edge Function secrets (supports batch operations, values are encrypted)
- `delete_edge_function_secrets`: Deletes Edge Function secrets (supports batch deletion)

**Note**: Secrets management requires Dashboard authentication (username/password). Secrets are automatically encrypted when stored.

### AI Prompts
- `get_best_practices`: List all available Supabase AI prompts and development guidance


## Resources

- [Model Context Protocol](https://modelcontextprotocol.io/introduction): Learn more about MCP
- [PolarDB Supabase Documentation](https://help.aliyun.com/zh/polardb/polardb-for-postgresql/ai-supabase-application): Learn more about PolarDB features

## License

This project is licensed under Apache 2.0. See the [LICENSE](./LICENSE) file for details.
