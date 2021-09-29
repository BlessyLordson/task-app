import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { MobilenumberPipe } from './mobilenumber.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    TwowaybindingComponent,
    MobilenumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
