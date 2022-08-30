import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  ccustmr: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit()
  {
    let response = this.http.get("http://localhost:9191/GetUserINfo");
    response.subscribe((data) => this.ccustmr = data);
  }
//  /GetById/{id}
}
