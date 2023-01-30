import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss'],
})
export class ListArticleComponent {
  @Input() page: string;
  private articlesListSubscription: Subscription;
  public articlesList: Array<any> = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.firebaseService.readDataCategory(this.page);
    this.articlesListSubscription =
      this.firebaseService.articlesListObservable.subscribe((result) => {
        this.articlesList = result;
      });
  }

  ngOnDestroy() {
    this.articlesListSubscription.unsubscribe();
  }
}
