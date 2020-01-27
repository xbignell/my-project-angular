import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component';
import {IntroductionComponent} from './introduction/introduction.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'introduction', component: IntroductionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
