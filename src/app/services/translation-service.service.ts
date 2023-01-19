import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class TranslationServiceService {
  private isLanguageSetSubject = new BehaviorSubject<any>('RO');
  isLanguageSetObservable = this.isLanguageSetSubject.asObservable();

  constructor() {}

  public setLanguage(language: string) {
    this.isLanguageSetSubject.next(language);
  }
}
