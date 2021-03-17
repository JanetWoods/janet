import { Routes } from '@angular/router'
import { ExperiencesComponent } from './experiences/experiences.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [
  { path: 'experiences', component: ExperiencesComponent },
  {path: 'welcome', component: WelcomeComponent },
  {path: '', component:WelcomeComponent, pathMatch: 'full'}
]
