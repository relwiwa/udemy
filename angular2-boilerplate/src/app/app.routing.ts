import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', loadChildren: './users/user.module#UserModule' }
]

export const routing = RouterModule.forRoot(ROUTES);
