
# 🐋 Docker MCP server

A containerized version of "🐋 Docker MCP server"

> Repository: [ckreiling/mcp-server-docker](https://github.com/ckreiling/mcp-server-docker)

## Description

An MCP server for managing Docker with natural language!


## Usage

The containers are built automatically and are available on the GitHub Container Registry.

1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ckreiling--mcp-server-docker--mcp-server-docker
```

2. Run the container:

```bash
docker run -it --rm ghcr.io/metorial/mcp-container--ckreiling--mcp-server-docker--mcp-server-docker 
```

- `--rm` removes the container after it exits, so you don't have to clean up manually.
- `-it` allows you to interact with the container in your terminal.



## Usage with Claude

```json
{
  "mcpServers": {
    "mcp-server-docker": {
      "command": "docker",
      "args": [
        "run",
        "-it",
        "--rm",
        "ghcr.io/metorial/mcp-container--ckreiling--mcp-server-docker--mcp-server-docker"
      ],
      "env": {}
    }
  }
}
```

# License

Please refer to the license provided in [the project repository](https://github.com/ckreiling/mcp-server-docker) for more information.

## Contributing

Contributions are welcome! If you notice any issues or have suggestions for improvements, please open an issue or submit a pull request.

<div align="center">
  <sub>Containerized with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  