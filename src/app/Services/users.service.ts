import {Injectable} from '@angular/core';


// @Injectable({
//   providedIn: 'root'
// })
export class UsersService {
  // public userInfo = [
  //   {UserSubject: String},
  //   {UserNem: String},
  //   {UserIdea: String}
  // ]
  public userSubject:string
  public UserNem:string
  public UserIdea:string


  constructor(userSubject: string, UserNem: string, UserIdea: string) {
    this.userSubject = userSubject;
    this.UserNem = UserNem;
    this.UserIdea = UserIdea;
  }
}
