var Trainee = /** @class */ (function () {
    function Trainee() {
        var _this = this;
        this.trainee = [];
        this.count = function () {
            var y = _this.trainee.length;
            var final_count = y;
            console.log(final_count);
        };
        //    var final_count= h=>i
        //        var count: number;
        //        var i: number;
        //        count=0;
        //        for(i=0;i<this.trainee.length;i++)
        //        {
        //            count++;
        //        }
        //        console.log("Number of trainees:", count);
        //    }
    }
    Trainee.prototype.insert = function (empobj) {
        this.trainee.push(empobj);
    };
    Trainee.prototype.display = function () {
        console.log(this.trainee);
    };
    Trainee.prototype["delete"] = function (index) {
        this.trainee.splice(index, 1);
    };
    return Trainee;
}());
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
