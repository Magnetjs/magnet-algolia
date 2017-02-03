import algoliasearch from 'algoliasearch'
import convert from 'magnet-core/convert'
import defaultConfig from './config/algolia'

export default convert(algoliasearch, {
  namespace: 'algolia',
  params: ['config.applicationId', 'config.apiKey'],

  teardown: 'destroy'
}, defaultConfig)
