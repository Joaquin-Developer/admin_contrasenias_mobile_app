import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {


  transform(arr: any[], textSearch: string = "", column: string): any[] {
    
    if (textSearch === "") return arr;
    if (!arr) return arr;
    textSearch = textSearch.toLocaleLowerCase();

    return arr.filter(item => item[column].toLowerCase().includes(textSearch));

  }

}
