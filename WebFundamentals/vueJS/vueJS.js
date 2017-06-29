$(document).ready(function(){
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })
    var app7 = new Vue({
        el: '#app-7',
        data: {
            groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Whatever else humans are supposed to eat' },
                { id: 3, text: 'Milk' },
                { id: 4, text: 'Cookies' },
                { id: 5, text: '... & Many More Vegetables' },
            ]
        }
    })
})