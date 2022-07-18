import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string | number | Date | dayjs.Dayjs | null | undefined): string {
    return dayjs(value).fromNow();
  }

}
