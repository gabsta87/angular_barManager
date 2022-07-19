import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ionicButtonColor'
})
export class IonicButtonColorPipe implements PipeTransform {

  transform(value: number): string {
    return value>0?"success":"medium";
  }

}
