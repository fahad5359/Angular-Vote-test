import {Component, OnInit} from '@angular/core';
import {UsersService} from "../Services/users.service";

@Component({
  selector: 'app-ideaaa',
  templateUrl: './ideaaa.component.html',
  styleUrls: ['./ideaaa.component.css']
})
export class IdeaaaComponent implements OnInit {
  // Adding Comint
  addComintBtn=false
  addComintInput=true

  // Array of objects ↓
  objArrau = [{subject: ""}, {userNem: ""}, {idea: ""}]
  comnt=[{commint:""}]

  // Event ↓
  postIdea(Sbjct: string, usrnem: string, Ida: string) {
    if (Sbjct && usrnem && Ida) {
      this.objArrau.push({subject: Sbjct}, {userNem: "@" + usrnem}, {idea: Ida});
      this.addComintBtn=true
    }
  }
  //make whne pressed enter the input submit


  CrateCommint(Cmnt:string){
    if (Cmnt){
      this.comnt.push({commint:Cmnt})
    }
    this.addComintInput=true
    console.log("commint Created")
  }
  ngOnInit(): void {
  }







}
