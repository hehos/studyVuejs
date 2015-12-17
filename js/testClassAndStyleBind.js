/**
 * Created by hehui on 2015/12/15.
 */

// =======================
// 绑定 class

// 对象语法
new Vue({
    el: '.testClassAndStyleBind0',
    data: {
        isA: true,
        isB: false
    }
});

//
new Vue({
    el: '.testClassAndStyleBind1',
    data: {
        classObject: {
            'class-a': true,
            'class-b': false
        }
    }
});

// 计算模式
new Vue({
    el: '.testClassAndStyleBind2',
    data: {
        'class': true
    },
    computed: {
        getClassName: function() {
            return this.class? 'class-a': 'class-b';
        }
    }
});

// 数组语法
new Vue({
    el: '.testClassAndStyleBind3',
    data: {
        classA: 'class-a',
        classB: 'class-b',
        isB: false
    }
});


// =======================
// 绑定内联样式

// 对象语法
new Vue({
    el: '.testClassAndStyleBind4',
    data: {
        activeColor: 'red',
        fontSize: 30
    }
});
new Vue({
    el: '.testClassAndStyleBind5',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
});

// 数组语法
new Vue({
    el: '.testClassAndStyleBind6',
    data: {
        styleObjectA: {
            color: 'red',
            fontSize: '20px'
        },
        styleObjectB: {
            border: '1px solid #ddd',
            transform: 'rotateX(150deg)'
        }
    }
});



new Vue({
    el: '.testClassAndStyleBind7',
    data: {
        isDisabled: true,
        a: 1,
        disStyle: {

        }
    }
});



