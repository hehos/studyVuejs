/**
 * Created by hehui on 2015/12/17.
 */


var vm = new Vue({
    el: '#example',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            // 方法内 `this` 指向 vm
            console.log('Hello ' + this.name + '!');
            // `event` 是原生 DOM 事件
            console.log(event.target.tagName);
        }
    }
})

// 也可以在 JavaScript 代码中调用方法
//vm.greet() // -> 'Hello Vue.js!'

new Vue({
    el: '#example-2',
    methods: {
        say: function (msg) {
            alert(msg)
        },
        preventDef: function(msg, event) {
            alert(msg);
            event.preventDefault()
        },
        onKeyup: function() {
            alert('延迟执行');
        }
    }
})