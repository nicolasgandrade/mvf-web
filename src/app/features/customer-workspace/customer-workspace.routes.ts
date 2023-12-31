import { Route } from '@angular/router';
import { CustomerWorkspaceRootComponent } from './containers/customer-workspace-root/customer-workspace-root.component';
import { ProfessionalSearchComponent } from './containers/professional-search/professional-search.component';
import { SearchResultsListComponent } from './containers/search-results-list/search-results-list.component';
import { ProfessionalDetailsComponent } from './containers/professional-details/professional-details.component';
import { UserRequestsComponent } from './containers/user-requests/user-requests.component';

/**
 * Rotas da funcionalidade de CustomerWorkspace.
 */
export const customerWorkspaceRoutes: Route[] = [
  {
    path: '',
    component: CustomerWorkspaceRootComponent,
    children: [
      {
        path: '',
        component: ProfessionalSearchComponent,
      },
      {
        path: 'results',
        component: SearchResultsListComponent,
      },
      {
        path: 'results/:professional_id',
        component: ProfessionalDetailsComponent,
      },
      {
        path: 'my-requests',
        component: UserRequestsComponent,
      },
    ],
  },
];
