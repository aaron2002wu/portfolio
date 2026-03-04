const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

const rootDir = path.join(__dirname, '..')
const serverDir = path.join(rootDir, '.next', 'server')
const middlewareManifestPath = path.join(serverDir, 'middleware-manifest.json')

const emptyMiddlewareManifest = {
  version: 3,
  sortedMiddleware: [],
  middleware: {},
  functions: {}
}

function ensureMiddlewareManifest() {
  fs.mkdirSync(serverDir, { recursive: true })
  if (!fs.existsSync(middlewareManifestPath)) {
    fs.writeFileSync(
      middlewareManifestPath,
      JSON.stringify(emptyMiddlewareManifest, null, 2)
    )
  }
}

ensureMiddlewareManifest()
const keepAlive = setInterval(ensureMiddlewareManifest, 750)

const nextBin = require.resolve('next/dist/bin/next')
const child = spawn(process.execPath, [nextBin, 'dev'], {
  stdio: 'inherit',
  cwd: rootDir,
  env: process.env
})

child.on('exit', (code, signal) => {
  clearInterval(keepAlive)
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  process.exit(code ?? 0)
})

child.on('error', (error) => {
  clearInterval(keepAlive)
  console.error(error)
  process.exit(1)
})
