import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'filter_name'
})
export class FilterNamePipe implements PipeTransform {
  transform(values: any, searchText:string,property:string) {
    searchText = searchText.trim();
    if(!values){
      return [];

    }

    if(!searchText){
      return values;
    }
    return values.filter((item:any)=>  item[property].name.toLowerCase().includes(searchText.toLowerCase()));

  }
}
