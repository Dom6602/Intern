const port = 3000;

const express = require("express");
const app = express();

app.use(express.json());

students = [
  {
    name: "john",
    id: 1001,
    ph: 9856468576,
    add: "Add 1",
  },
  {
    name: "wick",
    id: 1002,
    ph: 7823459848,
    add: "Add 2",
  }
];

app.get("/students", (req, res) => {
  const table = updateTable();
  res.send(table);
});

app.post("/add-student", (req, res) => {
  const { name, id, ph, add } = req.body;
  const newStudent = {
    name: name,
    id: id,
    ph: ph,
    add: add,
  };

  students.push(newStudent);
  console.log(newStudent);
  const table = updateTable();
});

app.put("/students/:id", (req, res) => {
  const { name, id, ph, add } = req.body;

  const student = students.find(c => c.id === parseInt(req.params.id))

  student.name = name
  student.id = id
  student.ph = ph
  student.add = add

  const table = updateTable();
});

app.delete("/students/:id", (req, res) => {
  const idToDelete = parseInt(req.params.id);
  const indexToDelete = students.findIndex((student) => student.id === idToDelete);

  students.splice(indexToDelete, 1);
  const table = updateTable();
});


function updateTable() {
  const tableRows = students
    .map(
      (student) => `
    <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.ph}</td>
        <td>${student.add}</td>
        <td>
            <button onclick="editData(${student.id})">Edit</button>
            <button onclick="deleteData(${student.id})">Delete</button>
            <button onclick="downloadData(${student.id}, '${student.name}', ${student.ph}, '${student.add}')">Download</button>
        </td>
    </tr>`
    )
    .join("");

  const table = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Student Management System</title>
        <style>
        body {
            margin: 4rem;
        }
  
        #formContainer {
            margin-bottom: 20px;
        }
  
        label {
            display: block;
            margin-top: 10px;
        }
  
        input,
        textarea {
            width: 300px;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
  
        button {
            margin: 10px;
            padding: 8px 16px;
            background-color: #4CAF50;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
  
        button:hover {
            background-color: #45a049;
        }
  
        table {
            border-collapse: collapse;
            margin-bottom: 20px;
            width: 100%;
        }
  
        th,
        td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
  
        th {
            background-color: #4CAF50;
            color: #fff;
        }
        </style>
    </head>
    <body>
        <h2>Student Management System</h2>
        <div id="formContainer">
            <label for="stId">
                I'd:
            </label>
            <input type="number" 
                id="stId" 
                placeholder="Enter student Id">
            <label for="nameInput">
                Name:
            </label>
            <input type="text" 
                id="nameInput" 
                placeholder="Enter student name">
            <label for="numberInput">
                Mobile:
            </label>
            <input type="text" 
                id="numberInput" 
                placeholder="Enter student mobile no">
            <label for="addressInput">
                Address:
            </label>
            <textarea id="addressInput">
            </textarea>
            <button onclick="addData()">
                Add
            </button>
        </div>
        <table id="outputTable">
            <tr>
                <th>I'd</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            ${tableRows}
        </table>

        <script>
            function addData() {
                const name = document.getElementById("nameInput").value;
                const id = parseInt(document.getElementById("stId").value);
                const ph = parseInt(document.getElementById("numberInput").value);
                const add = document.getElementById("addressInput").value;

                fetch("/add-student", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, id, ph, add }),
                })
                .then(response => response.text())
                .then(updatedTable => {
                    document.getElementById("outputTable").innerHTML = updatedTable;
                });
                alert('Student Details Added Successfully')
                window.location.href = "http://localhost:3000/students"
            }
            function editData(id1) {
              const name = document.getElementById("nameInput").value;
              const id = parseInt(document.getElementById("stId").value);
              const ph = parseInt(document.getElementById("numberInput").value);
              const add = document.getElementById("addressInput").value;

              fetch("/students/1", {
                  method: "PUT",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ name, id, ph, add }),
              })
              .then(response => response.text())
              .then(updatedTable => {
                  document.getElementById("outputTable").innerHTML = updatedTable;
              });
              alert('Student Details Edited Successfully')
              window.location.href = "http://localhost:3000/students"
            }
            function deleteData(id1) {
              fetch("/students/1", {
                method: "DELETE"
              })
              .then(response => response.text())
              .then(updatedTable => {
                document.getElementById("outputTable").innerHTML = updatedTable;
              });
              alert('Student Details Deleted Successfully')
              window.location.href = "http://localhost:3000/students"
            }
            function downloadData(userId, userName, userMobile, userAddress) {
              userDetails = {
                id: userId,
                name: userName,
                ph: userMobile,
                add: userAddress
              }
              // console.log(userDetails)
              const dataString = JSON.stringify(userDetails);
              const blob = new Blob([dataString], { type: "application/json" });
              const url = URL.createObjectURL(blob);
            
              const a = document.createElement("a");
              a.href = url;
              a.download = "user_details.json";
              a.click();
              URL.revokeObjectURL(url);
            }

        </script>
    </body>
    </html>
  `;

  return table;
}

app.listen(port, () => {
  console.log("listening");
});
