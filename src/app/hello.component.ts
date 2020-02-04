import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyserviceService} from '../myservice.service';
@Component({
  selector: 'hello',
  template: `Enter usere name to get github info
  
  <div>
<input type="text" [(ngModel)]="searchText"/>
<button (click)="getUserData()"> search User </button>
  </div>
  <table style="font-size:16px; border:1px solid;width:100%;">
  <tr>
   <th >User Name</th>
   <th> type</th>
   <th>bio</th>
   <th>company</th>
   <th>image url</th>
   <th>followers </th>
   <th>Following</th>

  </tr>
  <thead>
  </thead>
  <tbody *ngFor="let items of listofInformation">
  <tr>
  <td>{{items.login}}</td>
  <td>{{items.type}}</td>
  <td>{{items.bio}}</td>
  <td>{{items.company}}</td>

  <td>
  <img src={{items.avatar_url}} alt="Smiley face" height="42" width="42">
  </td>
  <td> {{items.followers}}</td>
  <td> {{items.following}}</td>

  </tr>
  </tbody>
  </table>

  `,
  styles: [`table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
}`]//` { font-family: Lato; }`
})
export class HelloComponent  {

url="https://api.github.com/users"
@Input() name: string;

  searchText:any;
  result:any=[];
 listofInformation:Array<any>=[];
 
constructor(private http:HttpClient,private service: MyserviceService)
{
}
getUserInfo()//same class
{
  this.http.get(this.url+"/"+this.searchText).subscribe(data=>
  {
    this.listofInformation=  JSON.parse( "["+ JSON.stringify(data)+"]");
    console.log(data);
  })
}

getUserData()// using service
{
 this.service.getUserInfo(this.searchText).subscribe(data=>
 {
    this.listofInformation=  JSON.parse( "["+ JSON.stringify(data)+"]");
   console.log(this.listofInformation)
 })   
}

getArrayFunctionUseCase()
{
  //Includes
const pets = [1,2,3];
console.log("element exist or not in an array ",pets.includes(4)," from an array ",pets);
console.log("element exist or not in an array ",pets.includes(3), " from an array ",pets);
var testarray=[1,2,3,5];
var spreadarray=[...testarray]//Spread array
var maxofNumber=Math.max(...testarray)//Max number
console.log("Max number in an array ",maxofNumber," from an array ",spreadarray);
var arrSum = testarray => testarray.reduce((a,b) => a + b, 0)//sum of array
console.log("Sum of array ",arrSum(spreadarray));
//fined index and remove value based on the index
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");//Index of array
console.log("remove element with basd on the index ",fruits.splice(a,1),fruits)//remove element from an array based on index
//The join() method returns the array as a string.
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("joins ",fruits.join("!"))
//The shift() method removes the first item of an array.
 var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("removed value ",fruits.shift()," updated original array ",fruits);//this method will change the original array.
//The unshift() method adds new items to the beginning of an array, and returns the new length.
 var unshiftArray = ["Banana", "Orange", "Apple", "Mango"];
console.log("Size chnage ", unshiftArray.unshift("Raj") ," original array " ,unshiftArray);
//Array.from() method returns an Array object from any object with a length property or an iterable object.
var str="rajan";
var formArray = Array.from(str);
console.log("form array ",formArray)//convert string to an array of character format
//Fill all the array elements with a static value: with start index to end index  otherwise filled fullarray
var fillArray = ["Banana", "Orange", "Apple", "Mango"];
console.log("fillarray ", fillArray.fill("Raj",2,4))
}

  



}
