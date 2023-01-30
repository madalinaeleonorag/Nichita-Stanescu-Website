import { Injectable } from '@angular/core';
import {
  get,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  update,
} from 'firebase/database';
import { BehaviorSubject } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private database: any;
  private articlesListSubject = new BehaviorSubject<any>([]);
  articlesListObservable = this.articlesListSubject.asObservable();

  constructor(private commonService: CommonService) {
    this.database = getDatabase();
  }

  /**
   * Reading the registered data from a specific path in database
   * @param category is a string with the name of the category
   */
  public readDataCategory(category: string) {
    onValue(ref(this.database, `/categories/${category}`), (snapshot) => {
      const data = snapshot.val();
      const objectKeys = Object.keys(data);
      const transformArray: Array<any> = [];
      objectKeys.forEach((key: any) =>
        transformArray.push({
          key,
          ...data[key],
          categoryKey: category,
        })
      );
      this.articlesListSubject.next(
        this.commonService.sortByDate(transformArray)
      );
    });
  }

  public postArticle(
    category: string,
    data: { title: string | null; content: string | null }
  ) {
    push(ref(this.database, `/categories/${category}`), {
      ...data,
      postDate: new Date().toString(),
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
      postDate: new Date().toString(),
    };
    update(ref(this.database), updates);
  }

  public deleteArticle(category: string, key: string) {
    remove(ref(this.database, `/categories/${category}/${key}`));
  }
}
