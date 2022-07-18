import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  billValue : number = 0;

  now : Date = new Date();

  updateBill(param:number){
    this.billValue = param;
  }
}
