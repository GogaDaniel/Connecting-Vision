import { Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ServicesComponent } from './content/services/services.component';
import { ContactComponent } from './content/contact/contact.component';
// import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
// import { SitemapComponent } from './sitemap/sitemap.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }, // redirect to `home`
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
