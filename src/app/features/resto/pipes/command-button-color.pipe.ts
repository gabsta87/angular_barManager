import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commandButtonColor'
})
export class CommandButtonColorPipe implements PipeTransform {

  transform(value: Number): string {
    return value > 0 ? "#008000" : "#808080";
  }

}
