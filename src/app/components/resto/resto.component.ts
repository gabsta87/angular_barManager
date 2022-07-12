import { Component } from '@angular/core';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent{

  constructor(private readonly _service : RecettesService) { }

  content!:any;

  async ngOnInit() {
    this.content = await this._service.getData();
  }
}
