import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";


@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    // return moment.unix(Number(value)).fromNow();
    return moment.unix(Number(value)).format("MM/DD/YYYY");

  }
}
