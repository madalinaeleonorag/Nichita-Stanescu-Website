import { Injectable } from '@angular/core';
import { get, getDatabase, ref } from 'firebase/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private database: any;

  constructor() {
    this.database = getDatabase();
  }

  /**
   * Reading the registered data from a specific path in database
   * @param category is a string with the name of the category
   * @returns a promise with the values from the specified path
   */
  public readDataCategory(category: string): Promise<any> {
    return get(ref(this.database, `/categories/${category}`));
  }
}
