/**
 * Created by hehui on 2015/12/24.
 */
// 定义
var MyComponent = Vue.extend({
    template: '<div>A custom component!</div>'
})

// 注册
Vue.component('my-component', MyComponent)

// 创建根实例
new Vue({
    el: '#example'
})