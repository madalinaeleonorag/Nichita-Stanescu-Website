import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EmployeesComponent } from './pages/utils/employees/employees.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HighSchoolComponent } from './pages/matriculation/high-school/high-school.component';
import { PrimarySchoolComponent } from './pages/matriculation/primary-school/primary-school.component';
import { StudentsComponent } from './pages/utils/students/students.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ManagementDocumentsComponent } from './pages/utils/management-documents/management-documents.component';
import { ActivitiesComponent } from './pages/utils/activities/activities.component';
import { ExamsComponent } from './pages/utils/exams/exams.component';
import { ScientificSessionsComponent } from './pages/utils/scientific-sessions/scientific-sessions.component';
import { PartnershipsComponent } from './pages/utils/partnerships/partnerships.component';
import { AboutPoetComponent } from './pages/utils/about-poet/about-poet.component';
import { DataProtectionComponent } from './pages/utils/data-protection/data-protection.component';
import { MiscellaneousComponent } from './pages/utils/miscellaneous/miscellaneous.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'primary-school', component: PrimarySchoolComponent },
  { path: 'high-school', component: HighSchoolComponent },
  { path: 'notice-board', component: BoardComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'management-documents', component: ManagementDocumentsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'scientific-sessions', component: ScientificSessionsComponent },
  { path: 'partnerships', component: PartnershipsComponent },
  { path: 'about-poet', component: AboutPoetComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'miscellaneous', component: MiscellaneousComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
