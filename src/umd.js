import {Laue} from './index'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Laue)
}

export * from './index'
