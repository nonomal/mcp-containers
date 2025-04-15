
# mcp-hfspace MCP Server 🤗

A containerized version of "mcp-hfspace MCP Server 🤗"

> Repository: [evalstate/mcp-hfspace](https://github.com/evalstate/mcp-hfspace)

## Description

Read the introduction here [llmindset.co.uk/resources/mcp-hfspace/](https://llmindset.co.uk/resources/mcp-hfspace/)


## Usage

The containers are built automatically and are available on the GitHub Container Registry.

1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--evalstate--mcp-hfspace--mcp-hfspace
```

2. Run the container:

```bash
docker run -it --rm ghcr.io/metorial/mcp-container--evalstate--mcp-hfspace--mcp-hfspace 
```

- `--rm` removes the container after it exits, so you don't have to clean up manually.
- `-it` allows you to interact with the container in your terminal.



## Usage with Claude

```json
{
  "mcpServers": {
    "mcp-hfspace": {
      "command": "docker",
      "args": [
        "run",
        "-it",
        "--rm",
        "ghcr.io/metorial/mcp-container--evalstate--mcp-hfspace--mcp-hfspace"
      ],
      "env": {}
    }
  }
}
```

# License

Please refer to the license provided in [the project repository](https://github.com/evalstate/mcp-hfspace) for more information.

## Contributing

Contributions are welcome! If you notice any issues or have suggestions for improvements, please open an issue or submit a pull request.

<div align="center">
  <sub>Containerized with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  