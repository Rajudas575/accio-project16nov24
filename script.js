/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.filter(emp => emp.profession === "developer").map(developer => console.log(developer));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(emp => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  //Write your code here, just console.log
   const newEmp = { id: 4, name: "susan", age: "20", profession: "intern" };
   arr.push(newEmp);
   console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(emp => emp.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log

  let newArray = [
	  { id: 4, name: "Raju", age: "35", profession: "Developer" },
	  { id: 5, name: "Pinak", age: "30", profession: "manager" },
	  { id: 6, name: "Asraf", age: "28", profession: "Desiner" }
	];
  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
  
}
