import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TranslationServiceService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private isLanguageSetSubscription: Subscription;
  public language: string;

  constructor(
    private router: Router,
    private translationService: TranslationServiceService
  ) {}

  ngOnInit() {
    this.isLanguageSetSubscription =
      this.translationService.isLanguageSetObservable.subscribe((result) => {
        this.language = result;
      });
  }

  public goTo(page: string) {
    page === 'external-transparency'
      ? window.open('https://nichitastanescu.invatamantsector3.ro/', '_blank')
      : this.router.navigateByUrl('/' + page);
  }

  public selectLanguage(language: string) {
    this.translationService.setLanguage(language);
  }

  ngOnDestroy() {
    this.isLanguageSetSubscription.unsubscribe();
  }
}
