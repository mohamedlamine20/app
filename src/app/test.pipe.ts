import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './Tasks';
@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: Task): string {
    return value.text;
  }

}

