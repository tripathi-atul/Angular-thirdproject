import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-project';

  constructor(svc: TestServiceService) {
    //let svc = new TestServiceService();
    console.log("abc");
    svc.printToConsole('got this service');
  }
}
