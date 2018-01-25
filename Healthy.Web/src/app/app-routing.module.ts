import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './Persons/person.component';
import { ScaleResultsComponent } from './ScaleResults/scale-results.component';
import { PageNotFoundComponent } from './Misc/page-not-found.component';

const routes: Routes = [
  { path: 'person/:id', component: PersonComponent },
  { path: 'scale-results', component: ScaleResultsComponent },
  // {
  //   path: 'persons',
  //   component: PersonListComponent,
  //   data: { title: 'List of Athletes' }
  // },
  { path: '',
    redirectTo: '/scale-results',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
