import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { RecettesService } from './recettes.service';

@Injectable({
  providedIn: 'root'
})
export class RecettesResolver implements Resolve<Object> {

  constructor(
    private readonly _service : RecettesService
  ){}

  resolve(): Promise<Object> {
    return this._service.getData();
  }
}
