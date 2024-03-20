import { Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ServicesComponent } from './content/services/services.component';
import { ContactComponent } from './content/contact/contact.component';
// import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
// import { SitemapComponent } from './sitemap/sitemap.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, redirectTo:"" },
  { path: 'about', component: AboutComponent , redirectTo:""},
  { path: 'services', component: ServicesComponent , redirectTo:""},
  { path: 'contact', component: ContactComponent, redirectTo:"" },
  { path: '', component: HomeComponent }, // redirect to `home`
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
