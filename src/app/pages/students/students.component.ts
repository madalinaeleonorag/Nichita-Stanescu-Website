import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TranslationServiceService } from 'src/app/services/translation-service.service';
import * as data from '../../../assets/data.json';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  isLanguageSetSubscription: Subscription;
  language: string;
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
