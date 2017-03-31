import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == '') { return value; }
    let query = args.toLowerCase();
    return value.filter(item =>
      item.status.toLowerCase().indexOf(query) > -1
    );

  }

}
