/**
 * Created by hehui on 2015/12/17.
 */


var testForm = new Vue({
    el: '#testForm',
    data: {
        message: 'Hello Vue.js!',
        checked: 'checked',
        checkedNames: ['Jack'],
        picked: ['Two'],
        selected: 'B',
        selected2: 'B',

        selected3: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ],


        test: false
    }
})

var vm = new Vue({
    el: '#testForm2',
    data: {
        age: 33
    }
});

//// 选中
//vm.toggle === vm.a;
//console.log(vm.a);
//
//// 取消选中
//vm.toggle === vm.b;
//console.log(vm.b);
//
//
//// 选中
//vm.pick === vm.a;
//
//// 选中
//console.log(typeof vm.selected4); // -> 'object'
//console.log(vm.selected4.number); // -> 123