import { getAllServers, getLatestServerVersion } from '@metorial-mcp-containers/manifest';
import { nixpacksBuild } from '@metorial-mcp-containers/nixpacks';
import { $ } from 'bun';
import fs from 'fs-extra';
import path from 'path';
import sade from 'sade';
import { getChunkedArray } from './chunks';

let prog = sade('build');

prog
  .command('build <serverId> [version]', undefined, { default: true })
  .option('--platform, -p', 'Platform to build for')
  .option('--publish, -P', 'Publish the image to the registry')
  .action(
    async (
      serverId: string,
      version: string,
      opts: { platform: string; publish: boolean }
    ) => {
      if (!version) {
        let versionData = await getLatestServerVersion(serverId);
        version = versionData.version;
      }

      await nixpacksBuild(serverId, version, {
        platform: opts.platform,
        publish: opts.publish
      });

      process.exit(0);
    }
  );

prog
  .command('prepare <serverId> [version]', undefined)
  .option('--out, -o', 'Output directory')
  .action(async (serverId: string, version: string, opts: { out: string }) => {
    if (!version) {
      let versionData = await getLatestServerVersion(serverId);
      version = versionData.version;
    }

    let out = opts.out ? path.resolve(opts.out) : path.join(process.cwd(), 'out');

    await nixpacksBuild(serverId, version, {
      out
    });

    process.exit(0);
  });

prog
  .command('ci <serverId> [version]', undefined)
  .action(async (serverId: string, version: string) => {
    if (!version) {
      let versionData = await getLatestServerVersion(serverId);
      version = versionData.version;
    }

    await nixpacksBuild(serverId, version, {
      ci: true,
      publish: true
      // platform: 'linux/amd64,linux/arm64'
    });

    process.exit(0);
  });

prog
  .command('all')
  .option('--platform, -p', 'Platform to build for')
  .option('--publish, -P', 'Publish the image to the registry')
  .option('--only', 'Path to file with server IDs to build')
  .action(async (opts: { platform?: string; publish?: boolean; only?: string }) => {
    let servers = await getAllServers();

    let buildOutputFile = path.join(process.cwd(), 'build.md');
    await fs.writeFile(buildOutputFile, '');

    if (opts.only) {
      let only = new Set(
        (await fs.readFile(path.resolve(opts.only), 'utf-8'))
          .split('\n')
          .map(t => t.trim())
          .filter(Boolean)
      );

      servers = servers.filter(server => only.has(server.fullId));
    }

    console.log(`Building ${servers.length} servers...`);

    let idx = 0;
    for (let serverChunk of getChunkedArray(servers, 25)) {
      for (let server of serverChunk) {
        let version = await getLatestServerVersion(server.fullId);

        if (!version) {
          console.log(`No version found for ${server.fullId}`);
          continue;
        } else {
          try {
            await nixpacksBuild(server.fullId, version.version, {
              platform: opts.platform,
              publish: opts.publish
            });

            await fs.appendFile(
              buildOutputFile,
              [
                `# ${server.fullId} (${version.version})`
                // `## Stdout:`,
                // `\`\`\`bash\n${testRun.stdout}\n\`\`\``,
                // `## Stderr:`,
                // `\`\`\`bash\n${testRun.stderr}\n\`\`\``
              ].join('\n') + '\n\n'
            );
          } catch (e) {
            console.error(`Failed to build ${server.fullId} (${version.version})`);
            console.error(e);
          }
        }

        console.log(`Progress: ${idx++}/${servers.length}`);
      }

      await $`docker system prune -f`;
    }

    process.exit(0);
  });

prog.parse(process.argv);
