import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationExtras, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor (private readonly _router : Router){ }

  @Input() navigationItems!:any;
  @Output() itemChosen : EventEmitter<number> = new EventEmitter();

  // selectMenu(menuToDisplay:string){
  //   this.itemChosen.emit(menuToDisplay);
  // }

  getName(i:number){
    return "recipes_group_"+i
  }

  navigateToId(postid:number) {
    console.log("navigate to recipes_group_",postid);

    const navigationExtras: NavigationExtras = {
      fragment: "recipes_group_"+postid
    };
    this._router.navigate(['resto'], navigationExtras);
  }
}
