import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "specialCharPipe"
})
export class SpecialCharPipePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let newVal = value.replace(/[^\w\s]/gi, "");
    return newVal;
  }
}
