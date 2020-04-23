import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userName: string;
  response: any;

  constructor(private http: HttpClient) { 

  }

  search() {
    console.log(this.userName);
    this.http.get("https://api.github.com/users/" + this.userName)
    .subscribe((response)=> this.response=response);
  }

  ngOnInit(): void {
  }

}
