import {Pipe, PipeTransform} from '@angular/core';
import {Teapot} from './models/teapot.model';

@Pipe({
  name: "filter",
  pure: false
})


export class FilterPipe implements PipeTransform {

  transform(input: Teapot[], filterParam){
    var output: Teapot[] = [];
    if (filterParam === 'with infuser') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].infuser === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
