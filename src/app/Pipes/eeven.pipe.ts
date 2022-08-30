import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eeven'
})
export class EevenPipe implements PipeTransform {

  transform(array: Array<number>){
    // return array.filter();
  }

}
