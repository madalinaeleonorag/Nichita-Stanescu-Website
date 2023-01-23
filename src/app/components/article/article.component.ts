import { Component, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: any;
  public isEditEnabled: boolean = false;
  public isUserAccess: boolean = true;

  constructor(private firebaseService: FirebaseService) {}

  public editPost() {
    this.isEditEnabled = true;
  }

  public disableEditPost() {
    this.isEditEnabled = false;
  }

  public deletePost() {
    this.firebaseService.deleteArticle(
      this.article.categoryKey,
      this.article.key
    );
  }
}
