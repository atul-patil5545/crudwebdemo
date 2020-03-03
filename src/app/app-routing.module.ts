import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GetinComponent } from './getin/getin.component';
import { WelcomeTextComponent } from './welcome-text/welcome-text.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'getin', component: GetinComponent },
  { path: 'blog', component:WelcomeTextComponent },
  {path: 'about', component:AboutComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponants=[ContactFormComponent]
