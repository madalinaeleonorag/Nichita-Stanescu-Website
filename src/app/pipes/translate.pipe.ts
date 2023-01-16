import { Pipe, PipeTransform } from '@angular/core';
import * as romanian from './../../assets/dictionary-RO.json';
import * as english from './../../assets/dictionary-EN.json';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(value: string, language: string): string {
    const RO = JSON.parse(JSON.stringify(romanian));
    const EN = JSON.parse(JSON.stringify(english));

    switch (language) {
      case 'RO':
        return this.solveHierarchyJSON(value, RO);
      case 'EN':
        return this.solveHierarchyJSON(value, EN);
      default:
        return '';
    }
  }

  private solveHierarchyJSON(propString: string, obj: any) {
    if (!propString) return obj;

    var prop,
      props = propString.split('.');

    for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
      prop = props[i];

      var candidate = obj[prop];
      if (candidate !== undefined) {
        obj = candidate;
      } else {
        break;
      }
    }
    return obj[props[i]];
  }
}
