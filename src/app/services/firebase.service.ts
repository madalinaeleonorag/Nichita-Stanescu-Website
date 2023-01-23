import { Injectable } from '@angular/core';
import { get, getDatabase, push, ref, remove, update } from 'firebase/database';

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

  public postArticle(
    category: string,
    data: { title: string | null; content: string | null }
  ) {
    push(ref(this.database, `/categories/${category}`), {
      ...data,
      postDate: new Date().toLocaleDateString(),
    });
  }

  public updateArticle(
    category: string,
    data: { title: string | null; content: string | null; key: string | null }
  ) {
    const updates: any = {};
    updates[`/categories/${category}/${data.key}`] = {
      title: data.title,
      content: data.content,
      postDate: new Date().toLocaleDateString(),
    };
    update(ref(this.database), updates);
  }

  public deleteArticle(category: string, key: string) {
    remove(ref(this.database, `/categories/${category}/${key}`));
  }
}
