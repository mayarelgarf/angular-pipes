import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date="" ;
  amount=0;


  recieverName= "";

  onEventChange(event:Event){
    let target = event.target as HTMLInputElement;
    this.recieverName = target.value;
  }

  onDateChange(event:Event){
    let target = event.target as HTMLInputElement;
    this.date = target.value;

  }
  onAmountChange(event:Event){
    let target = event.target as HTMLInputElement;
    this.amount = parseFloat(target.value) ;
  }
}
