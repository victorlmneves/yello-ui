import components from './components/index'

const plugin = {
  install (Vue) {
    console.log('::::::::::',  components)
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin

