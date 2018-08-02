import {Pipe, PipeTransform} from '@angular/core';
import {Teapot} from './models/teapot.model';

@Pipe({
  name: "sort",
  pure: false
})


export class SortPipe implements PipeTransform {

  transform(input: Teapot[], filterParam){
    let output: Teapot[] = [];
    if (filterParam === 'priceLowToHigh') {
      output = input.sort((a, b) => parseInt(a.price) - parseInt(b.price));
      return output;
    } else {
      return input;
    }
  }
  
}
