import components from './components'

const plugin = {
  install(Vue) {
    let index = 0
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        console.log('component: ', component)
        console.log('component name: ', component.props.componentName.default)
        Vue.component(component.props.componentName.default, component)
      }
    }

    // console.log('=============', components)

    // for (const prop in components) {
    //   index++
    //   Vue.component(prop, components[index])
    // }

    // components.forEach(component, index => {
    //   console.log('>>>>>>>>>>>>>', component)
    //   Vue.component(component, component[index])
    // });
  }
}

export default plugin
