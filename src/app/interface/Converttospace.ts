
import {Pipe, PipeTransform} from '@angular/core';
import {transform} from 'typescript';

@Pipe({
  name: 'convertToSpace'
})

export class ConvertToSpace implements PipeTransform {

  transform(value: string, character: string): string {
      return value.replace(character, ' ');
  }

  }
