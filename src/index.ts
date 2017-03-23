import { Module } from 'magnet-core/module'
import * as algoliasearch from 'algoliasearch'

export default class MagnetAlgoliasearch extends Module {
  get moduleName () { return 'algoliasearch' }
  get defaultConfig () { return __dirname }

  async setup () {
    this.insert(algoliasearch(this.config.applicationId, this.config.apiKey))
  }

  async teardown () {
    this.app.algoliasearch.destroy()
  }
}
