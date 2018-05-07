import {Pipe, PipeTransform} from '@angular/core';
import {Teapot} from './models/teapot.model';

@Pipe({
  name: "sort",
  pure: false
})


export class SortPipe implements PipeTransform {

  transform(input: Teapot[]){
    var output: Teapot[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].infuser === true) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
