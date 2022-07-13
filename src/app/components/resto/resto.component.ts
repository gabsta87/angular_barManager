import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecettesService } from 'src/app/services/recettes.service';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent implements OnInit{

  content!:any;

  async ngOnInit() {
    this.content = this._resolver.snapshot.data["recettes"];
  }

  constructor(
              private readonly _resolver : ActivatedRoute
    ) {}
}
