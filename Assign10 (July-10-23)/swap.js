let student = { 
    name : "Jose", 
    dept : "Computer Science", 
    year : 3
}

  
  const obj = {};
  for (const key in student) {
    obj[student[key]] = key;
  }
  
  console.log(obj);
  



// {"name":"Jose","dept":"Computer Science","year":3}

// { “Jose” : “name”, “Computer Sceince” : “dept”, 3 : “year” }

// console.log(Object.entries(student).map(a => a.reverse()))

//string justify use to str convert