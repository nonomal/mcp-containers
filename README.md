
<img src="./assets/repo-header.png" alt="MCP Containers" width="100%" />

<h1 align="center">MCP Containers</h1>

<p align="center">Containerized versions of hundreds of <a href="https://modelcontextprotocol.io/introduction">MCP servers</a> 📡 🧠</p>

## Features

- **🚀 Simple Setup** - Just pull the Docker image to use any MCP server
- **🛠️ Always Up-to-Date** - We automatically update the images daily
- **🔒 Secure** - Run MCP servers in isolated containers

## Motivation

While experimenting with Model Context Protocol (MCP) servers, we found that setting them up could be a bit tedious and time-consuming. 
To simplify the process, we created containerized versions of these servers—making it quick, easy, and secure for anyone to get started.

This repository contains the scripts we use to build and manage these containers using [Nixpacks](https://nixpacks.com). 
New images are automatically built whenever changes are made to the corresponding server repositories, 
ensuring that our containers are always up-to-date.

We're committed to supporting as many MCP servers as possible. 
If there's a specific server you'd like to see included, feel free to open an issue or submit a pull request!

## Usage

To use the containers, simply pull the Docker image for the server you want to use. 
We have provided a list of available servers below, along with their respective readme files.

## Available Servers

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Brave Search MCP Server
](catalog/modelcontextprotocol/servers/brave-search/README.md) - An MCP server implementation that integrates the Brave Search API, providing both web and local search capabilities.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Everything MCP Server
](catalog/modelcontextprotocol/servers/everything/README.md) - This MCP server attempts to exercise all the features of the MCP protocol. It is not intended to be a useful server, but rather a test server for builders of MCP clients. It implements prompts, tools, resources, sampling, and more to showcase MCP capabilities.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Fetch MCP Server
](catalog/modelcontextprotocol/servers/fetch/README.md) - A Model Context Protocol server that provides web content fetching capabilities. This server enables LLMs to retrieve and process content from web pages, converting HTML to markdown for easier consumption.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Filesystem MCP Server
](catalog/modelcontextprotocol/servers/filesystem/README.md) - Node.js server implementing Model Context Protocol (MCP) for filesystem operations.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Google Drive server
](catalog/modelcontextprotocol/servers/gdrive/README.md) - This MCP server integrates with Google Drive to allow listing, reading, and searching over files.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [A git MCP server
](catalog/modelcontextprotocol/servers/git/README.md) - A Model Context Protocol (MCP) server for git repositories.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [GitHub MCP Server
](catalog/modelcontextprotocol/servers/github/README.md) - An MCP server for GitHub. It allows you to interact with GitHub repositories using the Model Context Protocol (MCP).

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [GitLab MCP Server
](catalog/modelcontextprotocol/servers/gitlab/README.md) - MCP Server for the GitLab API, enabling project management, file operations, and more.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Google Maps MCP Server
](catalog/modelcontextprotocol/servers/google-maps/README.md) - MCP Server for the Google Maps API.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Knowledge Graph Memory Server
](catalog/modelcontextprotocol/servers/memory/README.md) - A basic implementation of persistent memory using a local knowledge graph. This lets Claude remember information about the user across chats.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [PostgreSQL
](catalog/modelcontextprotocol/servers/postgres/README.md) - A Model Context Protocol server that provides read-only access to PostgreSQL databases. This server enables LLMs to inspect database schemas and execute read-only queries.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Puppeteer
](catalog/modelcontextprotocol/servers/puppeteer/README.md) - A Model Context Protocol server that provides browser automation capabilities using Puppeteer. This server enables LLMs to interact with web pages, take screenshots, and execute JavaScript in a real browser environment.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Sentry MCP server
](catalog/modelcontextprotocol/servers/sentry/README.md) - Interact with Sentry using the Model Context Protocol (MCP).

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [Slack MCP Server
](catalog/modelcontextprotocol/servers/slack/README.md) - MCP Server for the Slack API, enabling Claude to interact with Slack workspaces.

- <img src="https://github.com/modelcontextprotocol.png?size=120" width="16px" height="16px" /> [SQLite MCP Server
](catalog/modelcontextprotocol/servers/sqlite/README.md) - A Model Context Protocol (MCP) server for SQLite databases.


# License

The code of this project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
The source code of the containers is licensed under the respective licenses of the projects. 
See the linked project repositories for more information.

## Contributing

Contributions are welcome! If you want to contribute a containerized MCP server, please use the [Contributing Guide](CONTRIBUTING.md) to get started.
If you have any questions or suggestions, feel free to open an issue or a pull request.

<div align="center">
  <sub>Built with ❤️ by <a href="https://metorial.com">Metorial</a></sub>
</div>
  