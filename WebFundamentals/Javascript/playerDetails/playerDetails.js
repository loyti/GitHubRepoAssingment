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
    document.write("<h1>Meet the Students</h1>");
    for (var i = 0; i < users.Students.length; i++){
        document.write("<p>This student's name is: " + users.Students[i].first_name + " " + users.Students[i].last_name + " and the student's name is " + (users.Students[i].first_name.length + users.Students[i].last_name.length) + " characters long.</p>");
    };
    document.write("<h1>Meet the Instructors</h1>");
    for (var j = 0; j < users.Instructors.length; j++){
        document.write("<p>This Instructor's name is: " + users.Instructors[j].first_name + " " + users.Instructors[j].last_name + " and the instructor's name is " + (users.Instructors[j].first_name.length + users.Instructors[j].last_name.length) + " characters long.</p>");
    };
};
printAll();