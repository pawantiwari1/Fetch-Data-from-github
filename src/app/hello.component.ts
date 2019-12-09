import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'hello',
  template: `Enter usere name to get github info
  
  <div>
<input type="text" [(ngModel)]="searchText"/>
<button (click)="getUserInfo()"> search User </button>
  </div>
<p>{{listofInformation.login}}</p>

  <table style="font-size:16px; border:1px solid">
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
  <td>{{items.avatar_url}}</td>
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
constructor(private http:HttpClient)
{
}
getUserInfo()
{
  this.http.get(this.url+"/"+this.searchText).subscribe(data=>
  {
    this.listofInformation=  JSON.parse( "["+ JSON.stringify(data)+"]");
    console.log(data);
  })
}

  



}
