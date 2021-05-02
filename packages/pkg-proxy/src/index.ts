import escalade from 'escalade'
import fse from 'fs-extra'
import path from 'path'
import { PackageJson } from 'types-package-json'

export type PackageJSONFileName = 'package.json'
export type { PackageJson }

export const fileName: PackageJSONFileName = 'package.json'

type Options = {
  cwd?: string
  filename?: string
  searchParents?: boolean
}

async function findPackageJson(opts?: Options) {
  const cwd = opts?.cwd ?? process.cwd()
  const filename = opts?.filename ?? path.join(cwd, fileName)
  if (await fse.pathExists(filename)) {
    return filename
  }
  if (opts?.searchParents) {
    const result = await escalade(
      cwd,
      (_dir, names) => names.includes(fileName) && fileName,
    )
    if (result) return result
  }
}

export class Pkg {
  static async createProxy(opts?: Options) {
    const pkg = await this.find(opts)
    if (!pkg) return undefined

    return new Proxy(pkg.json, {
      get(target, prop, receiver) {
        if (prop in pkg) {
          return Reflect.get(pkg, prop, receiver)
        }
        return Reflect.get(target, prop, receiver)
      },
    }) as PackageJson & Pkg
  }

  static async find(opts?: Options) {
    const filename = await findPackageJson(opts)
    if (filename) return this.read(filename)
  }

  static async read(filename: string) {
    const pkg: PackageJson = await fse.readJson(filename)
    return new Pkg(filename, pkg)
  }

  readonly filename: string
  readonly json: PackageJson

  constructor(filename: string, pkg: PackageJson) {
    this.filename = filename
    this.json = pkg
  }

  get dependencies() {
    return this.json.dependencies ?? {}
  }

  get devDependencies() {
    return this.json.devDependencies ?? {}
  }

  depends(name: string) {
    return Boolean(this.dependencies[name] || this.devDependencies[name])
  }

  dependsAny(...names: string[]) {
    return names.some((x) => this.depends(x))
  }

  rootDir(...paths: string[]) {
    return path.join(path.dirname(this.filename), ...paths)
  }
}

export default Pkg.createProxy.bind(Pkg)