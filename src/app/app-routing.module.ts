import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StudentsComponent } from './pages/students/students.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'notice-board', component: BoardComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
