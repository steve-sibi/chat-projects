var request = require("request");

let employeeData = [];
let a = 1;
let b = 2;

function getSumAndStoreInDb(p1, p2, callback) {
    let thesum = p1 + p2;
    callback(thesum);
}

function displaySum(sum) {
    return console.log(sum);
}

let displaySum = sum => console.log(sum);

getSumAndStoreInDb(a, b, displaySum)

request.get(
    "http://dummy.restapiexample.com/api/v1/employees",

    function (err, results) {
        if (errorThatSteveDoesntLike) {
            console.log("There was an error", err);
        } else {
            employeeData = results.
        }
    }
)
console.log(employeeData);