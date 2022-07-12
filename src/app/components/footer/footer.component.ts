import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  billValue! : number;

  ngOnInit(): void {}

  updateBill(param:number){
    this.billValue = param;
  }
}
