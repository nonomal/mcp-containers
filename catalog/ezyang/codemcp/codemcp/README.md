
# codemcp

A containerized version of "codemcp"

> Repository: [ezyang/codemcp](https://github.com/ezyang/codemcp)

## Description

Make Claude Desktop a pair programming assistant by installing codemcp.  With


## Usage

The containers are built automatically and are available on the GitHub Container Registry.

1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--ezyang--codemcp--codemcp
```

2. Run the container:

```bash
docker run -it --rm ghcr.io/metorial/mcp-container--ezyang--codemcp--codemcp 
```

- `--rm` removes the container after it exits, so you don't have to clean up manually.
- `-it` allows you to interact with the container in your terminal.



## Usage with Claude

```json
{
  "mcpServers": {
    "codemcp": {
      "command": "docker",
      "args": [
        "run",
        "-it",
        "--rm",
        "ghcr.io/metorial/mcp-container--ezyang--codemcp--codemcp"
      ],
      "env": {}
    }
  }
}
```

# License

Please refer to the license provided in [the project repository](https://github.com/ezyang/codemcp) for more information.

## Contributing

Contributions are welcome! If you notice any issues or have suggestions for improvements, please open an issue or submit a pull request.

<div align="center">
  <sub>Containerized with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  