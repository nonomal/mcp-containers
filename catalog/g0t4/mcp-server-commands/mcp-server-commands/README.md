
# # Tools

A containerized version of "# Tools"

> Repository: [g0t4/mcp-server-commands](https://github.com/g0t4/mcp-server-commands)

## Description

Tools are for LLMs to request, i.e. Claude Desktop app. Claude Sonnet 3.5 intelligently uses both tools, I was pleasantly surprised.


## Usage

The containers are built automatically and are available on the GitHub Container Registry.

1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--g0t4--mcp-server-commands--mcp-server-commands
```

2. Run the container:

```bash
docker run -it --rm ghcr.io/metorial/mcp-container--g0t4--mcp-server-commands--mcp-server-commands 
```

- `--rm` removes the container after it exits, so you don't have to clean up manually.
- `-it` allows you to interact with the container in your terminal.



## Usage with Claude

```json
{
  "mcpServers": {
    "mcp-server-commands": {
      "command": "docker",
      "args": [
        "run",
        "-it",
        "--rm",
        "ghcr.io/metorial/mcp-container--g0t4--mcp-server-commands--mcp-server-commands"
      ],
      "env": {}
    }
  }
}
```

# License

Please refer to the license provided in [the project repository](https://github.com/g0t4/mcp-server-commands) for more information.

## Contributing

Contributions are welcome! If you notice any issues or have suggestions for improvements, please open an issue or submit a pull request.

<div align="center">
  <sub>Containerized with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  