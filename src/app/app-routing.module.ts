import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';  // Corrected here
import { ScheduleComponent } from './schedule/schedule.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'about', component: AboutComponent },
    { path: 'faq', component: FaqComponent },  // Corrected here
  { path: 'schedule', component: ScheduleComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
