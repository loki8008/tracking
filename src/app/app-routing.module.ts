import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('jwt');
}
const routes: Routes =
[{ path: '', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    JwtModule.forRoot({
    config: {
      tokenGetter: tokenGetter,
      disallowedRoutes: [],
    },
  }),
],
  exports: [RouterModule],
})
export class AppRoutingModule {}
