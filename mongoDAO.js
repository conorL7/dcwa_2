const MongoClient = require('mongodb').MongoClient;

var db;
var coll;

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        db = client.db('employeesDB')
        coll = db.collection('employees')
    })
    .catch((error) => {
        console.log(error.message)
    })

function findAllEmployees(){
    return new Promise((resolve, reject) =>{
        var cursor = coll.find()
        console.log(cursor)
        cursor.toArray()
            .then((data) => {
                resolve(data)
            })
            .catch(() => {
                reject(error)
            });
    })
}

module.exports = {findAllEmployees}
