import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatBill'
})
export class FormatBillPipe implements PipeTransform {

  transform(value: number): string {
    return "CHF "+Math.floor(value/100)+"."+((value%100==0)?"-":value%100);
  }

}
