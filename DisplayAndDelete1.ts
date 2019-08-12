class trainings
{
 traineeid:number[]=[1,2,3,4,5];  
traineename:string[]=["poojitha","snehitha","riya","chandhana","kaushani"];
trainerid:number[]=[11,12,13];  
 trainername:string[]=["faculty1","snehitha","riya","chandhana","kaushani"];
 subjectid:number[]=[111,112,113];  
subjectname:string[]=["linux","maria db","js"];


  trainee(id:number)
{
    var i:number;
    for(i=0;i<5;i++)
    {
        if(id==obj.traineeid[i])
        {
            console.log(obj.traineename[i])
        } 
    }

}
 traineeremove(id:number)
{
    var i:number;
    for(i=0;i<5;i++)
    {
        if(id==obj.traineeid[i])
        {
            obj.traineename.splice(i,1);
        } 
    }
    console.log(obj.traineename);
}
 trainer(id:number)
{
    var i:number;
    for(i=0;i<5;i++)
    {
        if(id==obj.trainerid[i])
        {
            console.log(obj.trainername[i])
        } 
    }

}
 trainerremove(id:number)
{
    var i:number;
    for(i=0;i<5;i++)
    {
        if(id==obj.trainerid[i])
        {
            obj.trainername.splice(i,1);
        } 
    }
    console.log(obj.trainername);
}

 subject(id:number)
{
    var i:number;
    for(i=0;i<3;i++)
    {
        if(id==obj.subjectid[i])
        {
            console.log(obj.subjectname[i])
        } 
    }

}
 subjectremove(id:number)
{
    var i:number;
    for(i=0;i<3;i++)
    {
        if(id==obj.subjectid[i])
        {
            obj.subjectname.splice(i,1);
        } 
    }
    console.log(obj.subjectname);
}
}
var obj:trainings=new trainings();
//var input= prompt("enter id number");
obj.trainee(1); //replace 1 with user input
obj.trainer(11);
obj.subject(111);
//obj.traineeremove(2);
//obj.trainerremove(12);
//obj.subjectremove(112);
