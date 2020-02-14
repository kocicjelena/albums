import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
//import { NewCmpComponent } from './new-cmp.component';
import { FormGroup, FormControl } from '@angular/forms';
@Component ({
   selector: 'my-app',
   templateUrl: './app.users.html'
})
export class AppUsers  {
newcomponent = ""; 
 constructor(private myservice: MyserviceService) {}
  ngOnInit() { 
     // this.todaydate = this.myservice.showTodayDate(); 
    //  this.formdata = new FormGroup({
     //    emailid: new FormControl("angular@gmail.com"),
     //    passwd: new FormControl("abcd1234")
     // });
   }
      onClickSubmit(data) {
     // this.emailid = data.emailid;
      localStorage.setItem("email", data.emailid);
      alert("Entered Email id : " + data.emailid);
   }
}
