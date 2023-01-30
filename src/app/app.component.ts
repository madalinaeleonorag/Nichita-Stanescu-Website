import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslationServiceService } from './services/translation-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private isLanguageSetSubscription: Subscription;
  private routerSubscription: Subscription;

  public actualPage: string;
  public language: string;

  constructor(
    private translationService: TranslationServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLanguageSetSubscription =
      this.translationService.isLanguageSetObservable.subscribe((result) => {
        this.language = result;
      });
    this.routerSubscription = this.router.events.subscribe((value) => {
      this.actualPage = this.router.url.toString();
      console.log(this.actualPage);
    });
  }

  ngOnDestroy() {
    this.isLanguageSetSubscription.unsubscribe();
  }
}
