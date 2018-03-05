import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './Persons/person.component';
import { PageNotFoundComponent } from './Shared/page-not-found.component';
import { SideNavigationComponent } from './Shared/side-navigation.component';
import { AppComponent } from './app.component';
import { OverviewComponent } from './Overview/overview.component';

const routes: Routes = [
  { path: 'person/:id', component: PersonComponent },
  { path: 'leaderboard', component: OverviewComponent },
  { path: '',
    component: AppComponent,
    children: [
      { path: '',
        redirectTo: '/leaderboard',
        pathMatch: 'full'
      },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
