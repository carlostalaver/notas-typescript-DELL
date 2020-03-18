import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testTypescript';

  constructor() {
    const obj = {
      foo: "bar"
    };
  
    console.log(obj);
  }




}
