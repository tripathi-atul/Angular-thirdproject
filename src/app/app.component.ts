import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-project';

  constructor(svc: TestServiceService, private http: HttpClient) {
    //let svc = new TestServiceService();
    console.log("abc");
    svc.printToConsole('got this service');
  }
  ngOnInit() {
    let obs = this.http.get('https://api.github.com/users/tripathi-atul');
    obs.subscribe((response) => console.log(response));
  }
}
