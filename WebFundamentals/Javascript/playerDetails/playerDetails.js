var users = {
    'Students': [
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
    ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
    ]
};
function printAll(){
     document.write("<p>This student's name is: " + users.Students.first_name[0] + users.Students.last_name[0] + "</p>");
}
printAll();