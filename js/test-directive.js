/**
 * Created by hehui on 2015/12/18.
 */


Vue.directive('demo', function (value) {
    console.log(value);
})

new Vue({
    el: '#demo',
    data: {
        message: 'hello'
    }
})