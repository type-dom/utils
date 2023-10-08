# Installation

    ~❯npx create-nx-workspace
    
    
    >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]
    
    ✔ Where would you like to create your workspace? · myorg
    ? Which stack do you want to use? …
    None:          Configures a minimal structure without specific frameworks or technologies.
    TS/JS:         Configures a TypeScript/JavaScript package without specific frameworks or platforms.
    React:         Configures a React app with your framework of choice.
    Angular:       Configures a Angular app with modern tooling.
    Node:          Configures a Node API with your framework of choice.

    Once you've created your workspace, you can
    
    run single tasks with npx nx <target> <project>
    run multiple tasks with npx nx run-many -t <target1> <target2>

# Create Packages

    package-based/
    ├── packages/
    │   └── is-even/
    │       ├── index.ts
    │       └── package.json
    ├── nx.json
    └── package.json

    npm i typescript -D -W
    npx nx build is-even

# Local Linking of Packages

# Task Dependencies

    {
        ...
        "targetDefaults": {
            "build": {
                "dependsOn": ["^build"]
            }
        }
    }
    This tells Nx to run the build target of all the dependent projects first, before the build target of the package itself is being run.

    Remove any existing dist folder and run:
    npx nx build is-odd

    It will automatically first run build for the is-even package, and then the build for is-odd. Note that if is-even has been built before, it would just be restored out of the cache.

# Cache Build Results

    ~/workspace❯
    
    npx nx build is-even
    
    > nx run is-even:build  [existing outputs match the cache, left as is]
    
    
    > is-even@0.0.0 build
    > tsc index.ts --outDir dist
    
    
    ——————————————————————————————————————————————————————————————————————————————————————————
    
    >  NX   Successfully ran target build for project is-even (33ms)
    
    Nx read the output from the cache instead of running the command for 1 out of 1 tasks.

    Note that the cache for the build script was already populated when we ran it previously in this tutorial.

# Running Multiple Tasks

    To run the build target for all the packages in the workspace, use:

    ~/workspace❯
    
    npx nx run-many -t build
    
        ✔  nx run is-even:build  [existing outputs match the cache, left as is]
        ✔  nx run is-odd:build  [existing outputs match the cache, left as is]
    
    ————————————————————————————————————————————————————————————————————————————————————————
    
    >  NX   Successfully ran target build for 2 projects (35ms)
    
    Nx read the output from the cache instead of running the command for 2 out of 2 tasks.

    Notice that both builds are replayed from cache. We can skip the cache by adding the --skip-nx-cache option:
    
    ~/workspace❯
    
    npx nx run-many -t build --skip-nx-cache
    
        ✔  nx run is-even:build (1s)
        ✔  nx run is-odd:build (1s)
    
    ———————————————————————————————————————————————————————————————————————
    
    >  NX   Successfully ran target build for 2 projects (2s)
    
    Notice that using this method, the is-even build ran before the is-odd build, and that the is-even build only happened once. This demonstrates how run-many is informed by the targetDefaults we set earlier.

    You can also only run tasks on packages that got changed by using the command:
    ~/workspace❯
    npx nx affected -t build
    >  NX   Affected criteria defaulted to --base=main --head=HEAD
        ✔  nx run is-even:build  [existing outputs match the cache, left as is]
        ✔  nx run is-odd:build  [existing outputs match the cache, left as is]
    
    ——————————————————————————————————————————————————————————————————————————————————————————————
    
    >  NX   Successfully ran target build for 2 projects (34ms)
        
    Nx read the output from the cache instead of running the command for 2 out of 2 tasks.
    Notice that the base and head options were populated with their default values. You could provide your own options here as needed. Notice too that the cache is also used with the affected command.

