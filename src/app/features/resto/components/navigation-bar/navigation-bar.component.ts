import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { NavigationExtras, Router, RouterModule } from '@angular/router';
import { IonItem } from '@ionic/angular';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor (private readonly _router : Router){}

  @Input() navigationItems!:any;
  @Output() itemChosen : EventEmitter<number> = new EventEmitter();
  @ViewChildren(IonItem) ionItems!:QueryList<IonItem>;

  selectMenu(menuToDisplay:number){
    this.itemChosen.emit(menuToDisplay);
    this.setButtonActive(menuToDisplay);
  }

  setButtonActive(index:number){
    this.ionItems.map((e:any)=> e.el.className = e.el.className.replace("active",""));
    // let selectedItem:IonItem|undefined = this.ionItems.find((e:any)=> e.el.id === "menu_button_"+index);
    let selectedItem:any = this.ionItems.find((e:any)=> e.el.id === "menu_button_"+index);
    if(selectedItem)
      selectedItem.el.className += " active";
  }
}
