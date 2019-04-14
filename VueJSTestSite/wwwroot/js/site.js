
Vue.component('todo-item', {
    props:['todo'],
    template: '<li> {{ todo.text }} </li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})


//var app = new Vue({
//    el: '#app',
//    data: {
//        message: 'Hello Vue World!'
//    }
//});

//var app2 = new vue({
//    el: "#app-2",
//    data: {
//        message: 'You loaded this page on ' + new Date().toLocaleString()
//    }
//});

//var app3 = new Vue({
//    el: '#app-3',
//    data: {
//        seen: true
//    }
//})

//var app4 = new Vue({
//    el: '#app-4',
//    data: {
//        todos: [
//            { text: 'Get Job' },
//            { text: 'Pay off debt' },
//            { text: 'Buy a house' }
//        ]
//    },
//    methods: {
//        addToDoItem: function () {
//            var item = document.getElementById(newItem).text;
//            app4.todos.push({ text: item })
//        }
//    }
//})

//var app5 = new Vue({
//    el: '#app-5',
//    data: {
//        message: 'Hello Vue.js!'
//    },
//    methods: {
//        reverseMessage: function () {
//            this.message = this.message.split('').reverse().join('')
//        }
//    }
//})

//var app6 = new Vue({
//    el: '#app-6',
//    data: {
//        message: 'Hello Vue!'
//    }
//})