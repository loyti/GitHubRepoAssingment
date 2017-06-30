var ToDoMaker = (function (){
        var id = 0;
        return function (name, description){
            id += 1;
            this.name = name;
            this.description = description;
            this.status = false;
            this.id = id;
            this.createdAt = new Date();
        }
}());

var todoList = new Vue({
    el: '#viewAll',
    data: {
        itemsList: [],
        name:"",
        description:"",
        totalCount: 0
    },
    computed:{
        complete: function(){
            var count = 0;
            for (var i = 0; i < this.itemsList.length; i++){
                if (this.itemsList[i].status == true){
                    count++;
                }
            }
            return count;
        },
        incomplete: function(){
            return this.itemsList.length - this.complete;
        },
        total: function(){
            return this.totalCount;
        }
    },
    methods: {
        addItem: function () {
            var newItem = new ToDoMaker(this.name, this.description);
            this.itemsList.push(newItem);
            this.name = "";
            this.description = "";
            this.totalCount++;
        },
        removeItem: function(loseItem) {
            for (var i = 0; i < this.itemsList.length; i++){
                if (this.itemsList[i].id == loseItem){
                    this.itemsList.splice(i,1);
                }
            }
        },
        changeStatus: function(checkStatus) {
            for (var i = 0; i < this.itemsList.length; i++){
                if (todoList.itemsList[i].id == checkStatus){
                    this.itemsList[i].status = !this.itemsList[i].status
                } 
            }
        
        }
    }
})    
