import components from './components'

const plugin = {
  install(Vue) {
    console.log('[vuepress-plugin-dekp] install', components)
    for (const prop in components) {
      console.log('prop', prop)
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin
