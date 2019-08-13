class trainer1{
     trainers :any = [];
     insert(empobj) {
        this.trainers.push(empobj);
    }
     display() {
        console.log(this.trainers);
    }
    
    delete(index:Number)
    {
        this.trainers.splice(index, 1);
    }
}
var obj = new trainer1();
var emp1 = { name: "poojitha", experience: 11, salary: 2000 };
var emp2 = { name: "snehitha", experience: 12, salary: 2000 };
var emp3 = { name: "riya", experience: 13, salary: 2000 };
obj.insert(emp1);
obj.insert(emp2);
obj.insert(emp3);
console.log("display after insertion");
obj.display();
console.log("display after deletion");
obj["delete"](1);
obj.display();
