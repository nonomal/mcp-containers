
# Redis MCP Server (@gongrzhe/server-redis-mcp@1.0.0)

A containerized version of "Redis MCP Server (@gongrzhe/server-redis-mcp@1.0.0)"

> Repository: [GongRzhe/REDIS-MCP-Server](https://github.com/GongRzhe/REDIS-MCP-Server)

## Description

A Redis Model Context Protocol (MCP) server implementation for interacting with Redis databases. This server enables LLMs to interact with Redis key-value stores through a set of standardized tools.


## Usage

The containers are built automatically and are available on the GitHub Container Registry.

1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--gongrzhe--redis-mcp-server--redis-mcp-server
```

2. Run the container:

```bash
docker run -it --rm ghcr.io/metorial/mcp-container--gongrzhe--redis-mcp-server--redis-mcp-server {{REDIS-URL}}
```

- `--rm` removes the container after it exits, so you don't have to clean up manually.
- `-it` allows you to interact with the container in your terminal.


### Configuration

The container supports the following configuration options:


#### Arguments

- `REDIS_URL`






## Usage with Claude

```json
{
  "mcpServers": {
    "redis-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-it",
        "--rm",
        "ghcr.io/metorial/mcp-container--gongrzhe--redis-mcp-server--redis-mcp-server",
        "{{REDIS-URL}}"
      ],
      "env": {}
    }
  }
}
```

# License

Please refer to the license provided in [the project repository](https://github.com/GongRzhe/REDIS-MCP-Server) for more information.

## Contributing

Contributions are welcome! If you notice any issues or have suggestions for improvements, please open an issue or submit a pull request.

<div align="center">
  <sub>Containerized with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  