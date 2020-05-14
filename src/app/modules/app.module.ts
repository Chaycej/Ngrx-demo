// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';

// Components
import { AppComponent } from '../components/app/app.component';
import { CountPageComponent } from '../components/count/count-page/count-page.component';
import { CountDisplayComponent } from '../components/count/count-display/count-display.component';

// reducer
import { reducer } from '../state/reducers/count.reducer';

// Services

@NgModule({
  declarations: [
    AppComponent,
    CountPageComponent,
    CountDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ state: reducer })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
