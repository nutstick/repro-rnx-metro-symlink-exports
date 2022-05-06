# repro-rnx-metro-symlink-exports

Created as a reproducable error metro symlink resolver issue with package.json exports issue

## Run Tests

```sh
pnpm install
cd app
pnpm start

wget http://localhost:8082/index.bundle?platform=ios&dev=true # or open url in browser
```

Metro will throw an error `Unable to resolve module telejson`

```log
error: Error: Unable to resolve module telejson from /repro-rnx-metro-symlink-exports/packages/utils/src/index.js: telejson could not be found within the project or in these directories:
  ../packages/utils/node_modules
  ../node_modules
  ../../../node_modules
> 1 | import { stringify } from "telejson";
    |                            ^
  2 |
  3 | const root = {};
  4 |
    at ModuleResolver.resolveDependency (/repro-rnx-metro-symlink-exports/node_modules/.pnpm/metro@0.67.0/node_modules/metro/src/node-haste/DependencyGraph/ModuleResolution.js:158:15)
    at DependencyGraph.resolveDependency (/repro-rnx-metro-symlink-exports/node_modules/.pnpm/metro@0.67.0/node_modules/metro/src/node-haste/DependencyGraph.js:231:43)
    at Object.resolve (/repro-rnx-metro-symlink-exports/node_modules/.pnpm/metro@0.67.0/node_modules/metro/src/lib/transformHelpers.js:129:24)
    at resolve (/repro-rnx-metro-symlink-exports/node_modules/.pnpm/metro@0.67.0/node_modules/metro/src/DeltaBundler/traverseDependencies.js:396:33)
    at /repro-rnx-metro-symlink-exports/node_modules/.pnpm/metro@0.67.0/node_modules/metro/src/DeltaBundler/traverseDependencies.js:412:26
    at Array.reduce (<anonymous>)
    at resolveDependencies (/repro-rnx-metro-symlink-exports/node_modules/.pnpm/metro@0.67.0/node_modules/metro/src/DeltaBundler/traverseDependencies.js:411:33)
    at processModule (/repro-rnx-metro-symlink-exports/node_modules/.pnpm/metro@0.67.0/node_modules/metro/src/DeltaBundler/traverseDependencies.js:140:31)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async addDependency (/repro-rnx-metro-symlink-exports/node_modules/.pnpm/metro@0.67.0/node_modules/metro/src/DeltaBundler/traverseDependencies.js:230:18)
✨  Done in 215.47s.
```