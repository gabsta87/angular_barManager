import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity',
  // pure: false // To check deeper for changes if pipe doesn't answer with inputs/outputs
})
export class QuantityPipe implements PipeTransform {

  // transform(value: [{name:string,quantity:number}], itemToFind : string): string {
  //   const index:number = value.findIndex(e => e.name === itemToFind);

  //   if(value[index] && value[index].quantity >= 1){
  //     return "X"+value[index].quantity;
  //   }
  //   return "";
  // }

  transform(value:[{name:string,quantity:number}], itemToFind : string): number {
    const val:any = value.find(e=> e.name === itemToFind);

    if(val)
      return val.quantity;
    return 0;
  }

}
