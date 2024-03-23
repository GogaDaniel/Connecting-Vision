import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
// import { SitemapComponent } from './sitemap/sitemap.component';

export const routes: Routes = [

  { path: '', component: AppComponent }, // redirect to `home`
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
