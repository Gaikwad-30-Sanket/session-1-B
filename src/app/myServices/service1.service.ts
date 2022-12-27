import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  userData(){
    return [
      {name:"sanket", branch:"IT"},
      {name:"abhishek", branch:"CSE"},
      {name:"Darshan", branch:"CIVIL"}
    ]
  }
}
