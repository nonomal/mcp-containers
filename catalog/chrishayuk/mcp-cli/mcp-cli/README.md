
# MCP CLI - Model Context Provider Command Line Interface

A containerized version of "MCP CLI - Model Context Provider Command Line Interface"

> Repository: [chrishayuk/mcp-cli](https://github.com/chrishayuk/mcp-cli)

## Description

A powerful, feature-rich command-line interface for interacting with Model Context Provider servers. This client enables seamless communication with LLMs through integration with the [CHUK-MCP protocol library](https://github.com/chrishayuk/chuk-mcp) which is a pyodide compatible pure python protocol implementation of MCP, supporting tool usage, conversation management, and multiple operational modes.


## Usage

The containers are built automatically and are available on the GitHub Container Registry.

1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--chrishayuk--mcp-cli--mcp-cli
```

2. Run the container:

```bash
docker run -it --rm ghcr.io/metorial/mcp-container--chrishayuk--mcp-cli--mcp-cli 
```

- `--rm` removes the container after it exits, so you don't have to clean up manually.
- `-it` allows you to interact with the container in your terminal.


### Configuration

The container supports the following configuration options:




#### Environment Variables

- `DATABASE_PATH`




## Usage with Claude

```json
{
  "mcpServers": {
    "mcp-cli": {
      "command": "docker",
      "args": [
        "run",
        "-it",
        "--rm",
        "ghcr.io/metorial/mcp-container--chrishayuk--mcp-cli--mcp-cli"
      ],
      "env": {
        "DATABASE_PATH": "database-path"
      }
    }
  }
}
```

# License

Please refer to the license provided in [the project repository](https://github.com/chrishayuk/mcp-cli) for more information.

## Contributing

Contributions are welcome! If you notice any issues or have suggestions for improvements, please open an issue or submit a pull request.

<div align="center">
  <sub>Containerized with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  