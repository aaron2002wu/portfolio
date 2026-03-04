const fs = require('fs')
const path = require('path')

const nextDir = path.join(__dirname, '..', '.next')
const serverDir = path.join(nextDir, 'server')
const middlewareManifestPath = path.join(serverDir, 'middleware-manifest.json')

fs.rmSync(nextDir, { recursive: true, force: true })
fs.mkdirSync(serverDir, { recursive: true })

// Next's dev server requires this file to exist when checking edge functions.
const emptyMiddlewareManifest = {
  version: 3,
  sortedMiddleware: [],
  middleware: {},
  functions: {}
}

fs.writeFileSync(middlewareManifestPath, JSON.stringify(emptyMiddlewareManifest, null, 2))
