/**
 * Created by hui on 2015/8/31.
 */

var demoRepeat = new Vue({
    el: '#demoRepeat',
    data: {
        a: 1,
        parentMsg: 'Hello',
        items: [
            { _uid: '88f869d', childMsg: 'Foo' },
            { _uid: '7496c10', childMsg: 'Bar' }
        ]
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    }
})

var demoTemplate = new Vue({
    el: '#demoTemplate',
    data: {
        items: [
            {
                title: "水果",
                subItems: ["苹果", "香蕉", "梨子"]
            },
            {
                title: "蔬菜",
                subItems: ["茄子", "白菜", "萝卜"]
            },
            {
                title: "肉类",
                subItems: ["猪肉", "牛肉", "羊肉"]
            }
        ]
    }

})


var users = new Vue({
    el: '#users',
    data: {
        users: [
            { name: 'Foo Bar', email: 'foo@bar.com' },
            { name: 'John Doh', email: 'john@doh.com' }
        ]
    }
})


new Vue({
    el: '#repeat-object',
    data: {
        object: {
            FirstName: 'John',
            LastName: 'Doe',
            Age: 30
        }
    }
})

new Vue({
    el: '#for-num'
});