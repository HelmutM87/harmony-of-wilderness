import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}


// import { Component } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { CalendarComponent } from '../../landing-page/calendar/calendar.component';
// // import { PriceComponent } from '../../landing-page/price/price.component';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [
//     MatIconModule, 
//     MatMenuModule, 
//     MatButtonModule,
//     MatDialogModule,
//     // CalendarComponent,
//     TranslateModule
//   ],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {
//   currentLang: string;

//   constructor(private dialog: MatDialog, private translate: TranslateService) {
//     this.currentLang = this.translate.currentLang || 'de'; // Standardsprache
//   }

//   openDialogCalendar() {
//     this.dialog.open(CalendarComponent, {
//       width: '600px',
//       height: '600px'
//     });
//   }

//   openDialogPrice(){
//     // this.dialog.open(PriceComponent, {
//     //   width: '600px',
//     //   height: '600px'
//     // });
//   }

//   switchLanguage(lang: string) {
//     this.translate.use(lang);
//     this.currentLang = lang;
//   }
// }

