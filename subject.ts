function Subject(){
   
    this.Names=['Linux','MariaDB','Git','Angular','Spring'];
    this.SubNames=[];
    var i=0;
    var len = this.Names.length;
    //declaring function AddSubject and adding the subjects from Names array
    this.AddSubject =function()
    {
      console.log(i+" "+len);
        while(len>0)
        {
          
        this.SubNames.push(this.Names[i]);
        len=len-1;
        i=i+1;
        }
        return this.SubNames;
    }
    

}
 


var obj = new Subject();
obj.AddSubject();
console.log(obj.AddSubject());
console.log("Adding a subject initially");
console.log(obj.SubNames[0]);