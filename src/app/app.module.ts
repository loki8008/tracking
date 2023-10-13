import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { ApiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './shared/services/guards/auth-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ApiPrefixInterceptor,
    //   multi: true,
    // },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
