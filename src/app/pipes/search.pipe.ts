import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any[], query: string): any[] {
     if (query == null || query == "") 
     return values;
    
     return values.filter(
      (value) => JSON.stringify(value).toLowerCase().indexOf(query.toLowerCase()) > 0 ? true : false); 
  }

}
