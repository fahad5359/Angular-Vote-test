import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm = new FormGroup({
    userGroup: new FormGroup({
      userNem: new FormControl(null, Validators.required),  // it can take 3 paramiters the first parimeter is the defult type
      Email: new FormControl(null, Validators.required),
      UserInfo: new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required)
      ])
    })
  })
  errorHandle = false
  red = "red"
  Coolor = ""

  onSubmitForm() {

    console.log(this.myForm.get('userGroup'))
    if (this.myForm.status === "INVALID") {
      this.errorHandle = true
    } else {  //to make the Error message dynamic.. if error show, else despair with out reafreashing page
      this.errorHandle = false
    }

  }


  constructor(private http: HttpClient) {
  }

  ngOnInit()
    {

  }

}
