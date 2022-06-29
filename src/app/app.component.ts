import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private fb:FormBuilder){}

  registrationForm=this.fb.group({
    username:['Harsha'],
    password:[" "],
    confirmpassword:[""],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalcode:['']
    })
  })

  //verbose way to create new registration form(FormGroup), and fields to fill within it(FormControl)
  //we can even create nested FormGroups within FormGroups. Eg. address can be a formGroup within the larger entire Formgroup with
  //city,state,postal code as form control

  /**
   * only initial entire form needs to be instantiated with Form Group using the syntax below
   */
  // registrationForm=new FormGroup({

  //   /**
  //    * define the form control elements inside the registrationForm as type FormControl
  //    * pass any default values that you like 
  //    */
  //   username:new FormControl('Harsha'),
  //   password:new FormControl(''),
  //   confirmpassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalcode:new FormControl('')
  //   })


  // });

  //difference between patch value and setValue is that all arguments of the form must be passed in to the set value function.
  //in patch value function only some of the values can be passed or all of the values can be passed. 

  loadApiData(){
    this.registrationForm.patchValue({
      username:"Bruce Wayne",
      // password: "batcave123",
      // confirmpassword: "batcave123",
      address:{
        city:"Gotham",
        state: "New Jersey",
        postalcode:'12345'

      }

    })
  }

}
