// import { Component } from '@angular/core';
// import {MatIconModule} from '@angular/material/icon';
// import {MatMenuModule} from '@angular/material/menu';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [
//     MatIconModule,
//     MatMenuModule,
//     TranslateService,
//   ],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {

// }


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



// import { Component } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [
//     MatIconModule,
//     MatMenuModule,
//     TranslateModule,
//     MatDialogModule
//   ],
//   providers: [TranslateService], // Hier füge den Service hinzu
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {
//   currentLang = 'de'; // Beispielwert, du musst den aktuellen Sprachwert setzen

//   // constructor(private translate: TranslateService) {
//   //   // Hier könntest du die Sprache initialisieren, falls nötig
//   // }

//   constructor(private dialog: MatDialog, private translate: TranslateService) {
//     this.currentLang = this.translate.currentLang || 'de'; // Standardsprache
//   }

//   switchLanguage(lang: string) {
//     this.translate.use(lang);
//     this.currentLang = lang;
//   }

//   openDialogPrice() {
//     // Implementierung für Preisdialog
//   }

//   openDialogCalendar() {
//     // Implementierung für Kalenderdialog
//   }
// }



// import { Component, importProvidersFrom } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { TranslateModule, TranslateService, TranslateLoader, TranslateStore } from '@ngx-translate/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// // Aot compilation support
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [
//     MatIconModule,
//     MatMenuModule,
//     MatDialogModule,
//     HttpClientModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     })
//   ],
//   providers: [
//     TranslateService,
//     TranslateStore, // Dies stellt sicher, dass TranslateStore bereitgestellt wird
//     { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
//   ],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {
//   currentLang = 'de'; // Beispielwert, du musst den aktuellen Sprachwert setzen

//   constructor(private dialog: MatDialog, private translate: TranslateService) {
//     this.currentLang = this.translate.currentLang || 'de'; // Standardsprache
//   }

//   switchLanguage(lang: string) {
//     this.translate.use(lang);
//     this.currentLang = lang;
//   }

//   openDialogPrice() {
//     // Implementierung für Preisdialog
//   }

//   openDialogCalendar() {
//     // Implementierung für Kalenderdialog
//   }
// }



// import { Component } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { TranslateModule } from '@ngx-translate/core';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [
//     MatIconModule,
//     MatMenuModule,
//     MatDialogModule,
//     TranslateModule // Nur das Modul, ohne forRoot()
//   ],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {
//   currentLang = 'de'; // Beispielwert, du musst den aktuellen Sprachwert setzen

//   constructor(private dialog: MatDialog, private translate: TranslateService) {
//     this.currentLang = this.translate.currentLang || 'de'; // Standardsprache
//   }

//   switchLanguage(lang: string) {
//     this.translate.use(lang);
//     this.currentLang = lang;
//   }

//   openDialogPrice() {
//     // Implementierung für Preisdialog
//   }

//   openDialogCalendar() {
//     // Implementierung für Kalenderdialog
//   }
// }


import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    TranslateModule, // Nur das Modul, ohne forRoot()
    
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  currentLang = 'de'; // Beispielwert, du musst den aktuellen Sprachwert setzen

  constructor(private dialog: MatDialog, private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'de'; // Standardsprache
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  openDialogPrice() {
    // Implementierung für Preisdialog
  }

  openDialogCalendar() {
    // Implementierung für Kalenderdialog
  }
}