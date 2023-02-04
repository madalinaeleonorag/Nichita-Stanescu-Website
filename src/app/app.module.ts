import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// Firebase
import { initializeApp } from 'firebase/app';
// Pipes
import { TranslatePipe } from './pipes/translate.pipe';
// Components
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EmployeesComponent } from './pages/utils/employees/employees.component';
import { StudentsComponent } from './pages/utils/students/students.component';
import { BoardComponent } from './pages/board/board.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { HighSchoolComponent } from './pages/matriculation/high-school/high-school.component';
import { PrimarySchoolComponent } from './pages/matriculation/primary-school/primary-school.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ManagementDocumentsComponent } from './pages/utils/management-documents/management-documents.component';
import { ActivitiesComponent } from './pages/utils/activities/activities.component';
import { ExamsComponent } from './pages/utils/exams/exams.component';
import { ScientificSessionsComponent } from './pages/utils/scientific-sessions/scientific-sessions.component';
import { PartnershipsComponent } from './pages/utils/partnerships/partnerships.component';
import { AboutPoetComponent } from './pages/utils/about-poet/about-poet.component';
import { DataProtectionComponent } from './pages/utils/data-protection/data-protection.component';
import { MiscellaneousComponent } from './pages/utils/miscellaneous/miscellaneous.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ArticleComponent } from './components/article/article.component';
import { ListArticleComponent } from './components/list-article/list-article.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { AddPostComponent } from './components/add-post/add-post.component';
import { BannerComponent } from './components/banner/banner.component';

// Initialize Firebase
initializeApp({
  apiKey: 'AIzaSyBgv6vgdenzASsiZbsB6vwr-mIEnQ9_2qQ',
  authDomain: 'ltnb-website.firebaseapp.com',
  projectId: 'ltnb-website',
  storageBucket: 'ltnb-website.appspot.com',
  messagingSenderId: '600916659075',
  appId: '1:600916659075:web:3bf2570933a508052c84b6',
  measurementId: 'G-C0Z7ZQ22RN',
});

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    EmployeesComponent,
    StudentsComponent,
    BoardComponent,
    GalleryComponent,
    ContactComponent,
    TranslatePipe,
    MenuComponent,
    HighSchoolComponent,
    PrimarySchoolComponent,
    ManagementDocumentsComponent,
    ActivitiesComponent,
    ExamsComponent,
    ScientificSessionsComponent,
    PartnershipsComponent,
    AboutPoetComponent,
    DataProtectionComponent,
    MiscellaneousComponent,
    CopyrightComponent,
    ArticleComponent,
    ListArticleComponent,
    FormatDatePipe,
    AddPostComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
