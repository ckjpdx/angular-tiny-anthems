import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FaqComponent } from './faq/faq.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AdminComponent } from './admin/admin.component';
// import { LogonComponent } from './logon/logon.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'questionnaire',
    component: QuestionnaireComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  // {
  //   path: 'logon',
  //   component: LogonComponent
  // },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
