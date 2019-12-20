import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class MyserviceService {

  constructor(private http:HttpClient) { }

private url="https://api.github.com/users"

getUserInfo(userinfo){
  console.log("service called");
   return this.http.get(this.url +"/"+userinfo ).pipe(map(res =>  {
     return res;
   }));
}

}