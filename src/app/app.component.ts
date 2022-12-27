import { Component } from '@angular/core';
import { Service1Service } from './myServices/service1.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-data';
  data:any
  constructor(data:Service1Service){
     this.data=data.userData()  
     // here we get the data from userData() function of service1
  }
}
