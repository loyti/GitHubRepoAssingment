export class Quote {
  qTitle: String = "";
  created_at: Date = new Date();
  qDescription: String = "";

  constructor(aName:String, aDesc:String){
  	this.qTitle = aName;
  	this.qDescription = aDesc;
  	this.created_at = new Date();
  }
}
