import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { SongsComponent } from './components/songs/songs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SortDirective } from './directive/sort.directive';
import { MessagesComponent } from './components/messages/messages.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { Songs1Component } from './components/songs1/songs1.component';
import { Songs2Component } from './components/songs2/songs2.component';
import { Songs3Component } from './components/songs3/songs3.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SongsComponent,
    SortDirective,
    MessagesComponent,
    Songs1Component,
    Songs2Component,
    Songs3Component
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MaterialModule,
    CurrencyMaskModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
