import { Component } from '@angular/core';
import { AboveTheFoldComponent } from "./above-the-fold/above-the-fold.component";
import { CalendarComponent } from './calendar/calendar.component';
import { MapComponent } from './map/map.component';
import { DescriptionComponent } from './description/description.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    DescriptionComponent,
    CalendarComponent,
    MapComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
