import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  constructor(){}

  @Output() componentAction = new EventEmitter<string>();

  billValue : number = 0;
  now : Date = new Date();

  updateBill(param:number){
    this.billValue = param;
  }

  saveOrder(){
    this.componentAction.emit("save");
  }

  clearOrder(){
    this.componentAction.emit("empty");
  }
}
