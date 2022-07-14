import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityColor'
})
export class QuantityColorPipe implements PipeTransform {

  transform(value:number): string {
    if(value)
      return value>0?"green":"red";
    return "grey";
  }

}
