import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  /**
   * Function to sort ascending an array of objects by date/postDate
   * @param array with any format
   * @returns the array but sorted
   */
  public sortByDate(array: any) {
    return array.sort((x: any, y: any) => {
      return new Date(y.postDate).getTime() - new Date(x.postDate).getTime();
    });
  }
}
