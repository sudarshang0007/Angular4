import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, searchBox: string): any {
    if (searchBox === undefined) {return products; }

    return products.filter(function(product){
        return product.name.toLowerCase().includes(searchBox.toLowerCase());
    });
  }

}
