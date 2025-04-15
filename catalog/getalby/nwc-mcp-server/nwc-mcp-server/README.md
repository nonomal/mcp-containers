
# NWC MCP Server

A containerized version of "NWC MCP Server"

> Repository: [getalby/nwc-mcp-server](https://github.com/getalby/nwc-mcp-server)

## Description

Connect a bitcoin lightning wallet to your LLM using Nostr Wallet Connect ([NWC](https://nwc.dev/) or [NIP-47](https://github.com/nostr-protocol/nips/blob/master/47.md)).


## Usage

The containers are built automatically and are available on the GitHub Container Registry.

1. Pull the Docker image:

```bash
docker pull ghcr.io/metorial/mcp-container--getalby--nwc-mcp-server--nwc-mcp-server
```

2. Run the container:

```bash
docker run -it --rm ghcr.io/metorial/mcp-container--getalby--nwc-mcp-server--nwc-mcp-server 
```

- `--rm` removes the container after it exits, so you don't have to clean up manually.
- `-it` allows you to interact with the container in your terminal.


### Configuration

The container supports the following configuration options:




#### Environment Variables

- `NWC_CONNECTION_STRING`




## Usage with Claude

```json
{
  "mcpServers": {
    "nwc-mcp-server": {
      "command": "docker",
      "args": [
        "run",
        "-it",
        "--rm",
        "ghcr.io/metorial/mcp-container--getalby--nwc-mcp-server--nwc-mcp-server"
      ],
      "env": {
        "NWC_CONNECTION_STRING": "nwc-connection-string"
      }
    }
  }
}
```

# License

Please refer to the license provided in [the project repository](https://github.com/getalby/nwc-mcp-server) for more information.

## Contributing

Contributions are welcome! If you notice any issues or have suggestions for improvements, please open an issue or submit a pull request.

<div align="center">
  <sub>Containerized with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  