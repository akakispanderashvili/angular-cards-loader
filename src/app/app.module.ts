import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { LoaderComponent } from './loader/loader.component';
import { AgeCalculatorPipe } from './pipes/age-calculator.pipe';
import { UsernamesPipe } from './pipes/usernames.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LoaderComponent,
    AgeCalculatorPipe,
    UsernamesPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
