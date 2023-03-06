import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myCalculator';
  toShow = "0";
  currValue= '';
  
  
  
  writeToInput(value: string) {
    this.currValue = this.currValue + value;
    this.toShow = this.currValue;
  }

  eqauls() {
    
  }
}
