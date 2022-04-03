import components from './components'

const plugin = {
  install(Vue) {
    // console.log('[vuepress-plugin-dekp] install', components)
    for (const prop in components) {
      console.log('prop', prop, typeof prop)
      if (prop !== undefined) {
        // const component = components[prop]
        Vue.component(prop, prop)
      }
    }
  }
}

export default plugin
