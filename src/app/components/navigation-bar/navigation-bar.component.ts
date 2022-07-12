import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  @Input() navigationItems!:any;
  @Output() itemChosen : EventEmitter<string> = new EventEmitter();

  selectMenu(menuToDisplay:string){
    this.itemChosen.emit(menuToDisplay);
  }

}
