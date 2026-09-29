const express = require('express'); 
const app = express()
app.get("/", (req, res)=>{
    res.json(
        [
            {
                id: 1,
                employeeName: "Ali",
                employeeSalary: 120000,
            },
            {
                id: 2,
                employeeName: "Ayesha",
                employeeSalary: 100000,
            },
            {
                id: 3,
                employeeName: "Amna",
                employeeSalary: 200000,
            },
            {
                id: 4,
                employeeName: "Ahmed",
                employeeSalary: 210000,
            },

        ]
    )
})
app.listen(4000, ()=>{
    console.log("App is running on port No:4000")
})