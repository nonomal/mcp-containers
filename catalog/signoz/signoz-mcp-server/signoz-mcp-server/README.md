
# SigNoz MCP Server

A containerized version of "SigNoz MCP Server"

> Repository: [signoz/signoz-mcp-server](https://github.com/signoz/signoz-mcp-server)

## Description

Connect to SigNoz trough MCP. This server enables natural language queries for metrics, alerts, dashboards, and service performance data.


## Usage

The containers are built automatically and are available on the GitHub Container Registry.

1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--signoz--signoz-mcp-server--signoz-mcp-server
```

2. Run the container:

```bash
docker run -i --rm \ 
-e SIGNOZ_URL=signoz-url -e SIGNOZ_API_KEY=signoz-api-key \
ghcr.io/metorial/mcp-container--signoz--signoz-mcp-server--signoz-mcp-server  "./out"
```

- `--rm` removes the container after it exits, so you don't have to clean up manually.
- `-i` allows you to interact with the container in your terminal.



### Configuration

The container supports the following configuration options:




#### Environment Variables

- `SIGNOZ_URL`
- `SIGNOZ_API_KEY`




## Usage with Claude

```json
{
  "mcpServers": {
    "signoz-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-i",
        "--rm",
        "ghcr.io/metorial/mcp-container--signoz--signoz-mcp-server--signoz-mcp-server",
        "./out"
      ],
      "env": {
        "SIGNOZ_URL": "signoz-url",
        "SIGNOZ_API_KEY": "signoz-api-key"
      }
    }
  }
}
```

# License

Please refer to the license provided in [the project repository](https://github.com/signoz/signoz-mcp-server) for more information.

## Contributing

Contributions are welcome! If you notice any issues or have suggestions for improvements, please open an issue or submit a pull request.

<div align="center">
  <sub>Containerized with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  