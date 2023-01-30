import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TranslationServiceService } from 'src/app/services/translation-service.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  @Input() page: string;
  @Input() editMode: boolean;
  @Input() defaultValues: any;

  @Output() disableEdit: EventEmitter<any> = new EventEmitter<any>;

  public isUserAccess: boolean = true;
  public showEditor: boolean = false;
  public titleFormControl = new FormControl('', [Validators.required]);
  public contentFormControl = new FormControl('', [Validators.required]);
  public todayDateString: string = new Date().toString();

  private isLanguageSetSubscription: Subscription;
  public language: string;

  constructor(
    private translationService: TranslationServiceService,
    private firebaseService: FirebaseService
  ) {
  }

  ngOnInit() {
    this.isLanguageSetSubscription =
      this.translationService.isLanguageSetObservable.subscribe((result) => {
        this.language = result;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['editMode']) {
      this.showEditor = true;
      this.titleFormControl.setValue(this.defaultValues.title);
      this.contentFormControl.setValue(this.defaultValues.content);
    }
  }

  public openNewPost() {
    this.showEditor = true;
  }

  private clearForm() {
    this.titleFormControl.setValue('');
    this.titleFormControl.markAsUntouched();
    this.contentFormControl.setValue('');
    this.contentFormControl.markAsUntouched();
  }

  public cancelPost() {
    this.clearForm();
    this.showEditor = false;
    this.editMode && this.disableEdit.emit(false);
  }

  public addPost() {
    this.firebaseService.postArticle(this.page, {
      title: this.titleFormControl.value,
      content: this.contentFormControl.value,
    });
    this.clearForm();
    this.showEditor = false;
  }

  public editPost() {
    this.firebaseService.updateArticle(this.defaultValues.categoryKey, {
      title: this.titleFormControl.value,
      content: this.contentFormControl.value,
      key: this.defaultValues.key
    });
    this.clearForm();
    this.showEditor = false;
    this.editMode && this.disableEdit.emit(false);
  }
}
