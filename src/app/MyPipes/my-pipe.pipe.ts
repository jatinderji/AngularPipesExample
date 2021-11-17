import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [multiplyer] = args;
    if(multiplyer>0)
      return value*multiplyer;
    else
      return value;
  }

}
