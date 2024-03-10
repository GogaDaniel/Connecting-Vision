import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from '../app.routes';

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-content',
    standalone: true,
    providers: [provideRouter(routes)],
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [RouterOutlet, HomeComponent, AboutComponent, ServicesComponent, ContactComponent]
})
export class ContentComponent {

}
