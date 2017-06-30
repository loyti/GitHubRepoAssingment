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
new Vue({
    el: '#todoList',
    data: {
        itemsList: [],
        name:"",
        description:""
        
    },
    methods: {
        addItem: function () {
        var newItem = new ToDoMaker(this.name, this.description);
        this.itemsList.push(newItem);
        console.log(newItem);
        },
        removeItem: function(loseItem) {
            console.log("test");
            for (var i = 0; i < this.itemsList.length; i++){
                if (this.itemsList[i].id = loseItem){
                    this.itemsList.splice(i,1);
                }
            }
        },
        changeStatus: function() {
            for (var i = 0; i < this.itemsList.length; i++){
                if ( this.item[i].status = false){
                    this.itemList.status = true;
                }
            console.log(status);
            }
        }
    }    
})
