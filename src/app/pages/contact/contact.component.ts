import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TranslationServiceService } from 'src/app/services/translation-service.service';
import * as data from '../../../assets/data.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private isLanguageSetSubscription: Subscription;
  public language: string;
  DATA_VARIABLES = JSON.parse(JSON.stringify(data));

  constructor(private translationService: TranslationServiceService) {}

  ngOnInit() {
    this.isLanguageSetSubscription =
      this.translationService.isLanguageSetObservable.subscribe((result) => {
        this.language = result;
      });
  }

  ngOnDestroy() {
    this.isLanguageSetSubscription.unsubscribe();
  }
}
