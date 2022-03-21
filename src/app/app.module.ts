import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppModalWindow } from './app.modalWindow'
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
    imports:      [ BrowserModule, HttpClientModule, FormsModule ],
    declarations: [ AppComponent, AppModalWindow ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }