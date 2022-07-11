import { Component, OnInit } from '@angular/core';
import { RecettesService } from '../../services/recettes.service';
import { RestoComponent } from '../resto/resto.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private readonly _service : RecettesService, private readonly _resto : RestoComponent) { }

  navigationItemsObj!:any;

  async ngOnInit() {
    this.navigationItemsObj = await this._service.getData();
  }

  selectMenu(menuToDisplay:string){
    this._resto.chooseMenu(menuToDisplay);
  }

}
