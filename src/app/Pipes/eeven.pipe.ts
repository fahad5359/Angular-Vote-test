import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eeven'
})
export class EevenPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
