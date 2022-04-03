import components from './components'

const plugin = {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        console.log('>>>>>>>>>>>>>', component.name, component)
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin
