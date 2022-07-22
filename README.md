# Let's build a web app using Deno + Deno Deploy + Deno Fresh Web Framework

#### Watch The Youtube Video

[![Fetching data using Deno Fresh Web Framework - It's Hyper Fast!!!](https://i.ytimg.com/vi/Qt-YQ0VmgCU/maxresdefault.jpg)](https://www.youtube.com/watch?v=Qt-YQ0VmgCU)

### What is Deno?
Deno is a simple, modern and secure runtime for JavaScript, TypeScript, and WebAssembly that uses V8 and is built in Rust.

- Provides web platform functionality and adopts web platform standards.
- Secure by default. No file, network, or environment access, unless explicitly enabled.
- Supports TypeScript out of the box.
- Ships only a single executable file.
- Has built-in development tooling like a dependency inspector (deno info) and a code formatter (deno fmt).
- Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno: deno.land/std.
- Has a number of companies interested in using and exploring Deno.

### Deno Installation (Mac, Linux)
`curl -fsSL https://deno.land/install.sh | sh`

### Missing deno command fix
In order to get deno working with your terminal, you may have to add the following to your `~/.zshrc` or `~/.bashrc` file like so:

```
# Deno
export DENO_INSTALL="/Users/<your computer name>/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

### What is Deno Fresh?
Fresh is a next generation web framework, built for speed, reliability, and simplicity. Some stand out features:

- Just-in-time rendering on the edge.
- Island based client hydration for maximum interactivity. (partial hydration)
- Zero runtime overhead: no JS is shipped to the client by default.
- No build step.
- No configuration necessary.
- TypeScript support out of the box.



#### Visit Fresh
https://fresh.deno.dev/

### Deno Fresh Install
`deno run -A -r https://fresh.deno.dev my-project`

### Deno Fresh Start (Start the project)
`deno task start`

### Navigate to 
- http://localhost:8000/posts
- http://localhost:8000/post/1

### Deno Fresh Network Tab
Let's take a look at what is being rendered in the Chrome Dev Tools Network Tab.

### Why Deno Deploy?
- Instant deployments
- Located in 34 regions worldwide
- Zero config, zero maintenance
- TypeScript, Wasm, ES Modules

### What is Deno Deploy?
Deno Deploy is a distributed system that runs JavaScript, TypeScript, and WebAssembly at the edge, worldwide. The service deeply integrates the V8 JavaScript runtime with a high performance asynchronous web server to provide optimal performance without unnecessary intermediate abstractions.

### Deno Deploy Pricing
- https://deno.com/deploy/pricing

### Our Project on Deno Deploy
- https://deno-app-1.deno.dev/

### Deno Docs
When you get stuck, the docs are really great:
https://deno.land/manual/introduction

### VS Code extensions
One of the best plugins to install for Deno with VS Code is:
https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno
