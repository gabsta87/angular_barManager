import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DbaccessService } from '../../services/dbaccess.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  constructor(private readonly _db: DbaccessService){}

  @Output() emptyOrder = new EventEmitter();

  billValue : number = 0;
  now : Date = new Date();

  updateBill(param:number){
    this.billValue = param;
  }

  sendOrder(){
    this._db.addOrder(this.billValue);
    this.emptyOrder.emit();
  }
}
