/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Imports */
import { GroupsComponent } from './groups.component';

/** Groups Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'groups',
      component: GroupsComponent,
      data: { title: extract('Groups'), breadcrumb: 'Groups' }
    }
  ])
];

/**
 * Groups Routing Module
 *
 * Configures the groups routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GroupsRoutingModule { }
