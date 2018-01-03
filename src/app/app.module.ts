import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountModule } from '../account/account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
