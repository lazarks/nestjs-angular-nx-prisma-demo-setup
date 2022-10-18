import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_CONFIG } from '@nestjs-angular-setup/app-config';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiModule } from '@nestjs-angular-setup/ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, UiModule],
  providers: [{ provide: APP_CONFIG, useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
