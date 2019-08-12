class Trainee{
    trainee :any = [];
    insert(empobj) {
       this.trainee.push(empobj);
   }
    display() {
       console.log(this.trainee);
   }
   
   delete(index:Number)
   {
       this.trainee.splice(index, 1);
   }
   
   count=()=>{
     var  y=this.trainee.length;
       var final_count=y;
       console.log(final_count);
   }

}
var obj = new Trainee();
var trainee1 = { name: "poojitha", experience: 11, salary: 2000 };
var trainee2 = { name: "snehitha", experience: 12, salary: 2000 };
var trainee3 = { name: "riya", experience: 13, salary: 2000 };
obj.insert(trainee1);
obj.insert(trainee2);
obj.insert(trainee3);
console.log("display after insertion");
obj.display();
console.log("display after deletion");
obj["delete"](1);
obj.display();
obj.count();