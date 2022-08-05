import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalServiceService {

  items: {quantity:number; price:number}[] = [];
  items$:BehaviorSubject<{quantity:number;price:number}[]> = new BehaviorSubject([] as any);

  constructor() { }
}
