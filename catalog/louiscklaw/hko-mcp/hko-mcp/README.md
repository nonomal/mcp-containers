
# hko_mcp

A containerized version of "hko_mcp"

> Repository: [louiscklaw/hko-mcp](https://github.com/louiscklaw/hko-mcp)

## Description

Fetch data from Hong Kong Observatory with MCP.


## Usage

The containers are built automatically and are available on the GitHub Container Registry.

1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--louiscklaw--hko-mcp--hko-mcp
```

2. Run the container:

```bash
docker run -it --rm ghcr.io/metorial/mcp-container--louiscklaw--hko-mcp--hko-mcp 
```

- `--rm` removes the container after it exits, so you don't have to clean up manually.
- `-it` allows you to interact with the container in your terminal.



## Usage with Claude

```json
{
  "mcpServers": {
    "hko-mcp": {
      "command": "docker",
      "args": [
        "run",
        "-it",
        "--rm",
        "ghcr.io/metorial/mcp-container--louiscklaw--hko-mcp--hko-mcp"
      ],
      "env": {}
    }
  }
}
```

# License

Please refer to the license provided in [the project repository](https://github.com/louiscklaw/hko-mcp) for more information.

## Contributing

Contributions are welcome! If you notice any issues or have suggestions for improvements, please open an issue or submit a pull request.

<div align="center">
  <sub>Containerized with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  