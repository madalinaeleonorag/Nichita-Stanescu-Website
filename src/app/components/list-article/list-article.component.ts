import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss'],
})
export class ListArticleComponent {
  @Input() page: string;
  public listOfArticles: Array<any>;

  constructor(
    private firebaseService: FirebaseService,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.firebaseService.readDataCategory(this.page).then((result: any) => {
      if (result && result.val()) {
        const objectKeys = Object.keys(result.val());
        const transformArray: Array<any> = [];
        objectKeys.forEach((key: any) =>
          transformArray.push({
            key,
            ...result.val()[key],
            categoryKey: this.page,
          })
        );
        this.listOfArticles = this.commonService.sortByDate(transformArray);
      }
    });
  }
}
