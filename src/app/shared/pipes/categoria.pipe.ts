import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string{
    switch(value){
     case 'Tecnologia da Informação' : return 'computer';
     case 'front-end' : return 'code';
    }
    return 'code';
  }

}
