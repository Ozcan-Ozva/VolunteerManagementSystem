import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './Custom/Components/components.module';
import { CustomDialogModule } from './Custom/Dialog/dialog.moduls';
import { AuthService, TokenPayload } from './Services/auth.service';
import { GatewayModule } from './Services/Gateways/gateway.module';
import { StoreAppModule } from './Store/store-app.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export function tokenGetter(): string | null {
  const access_token = localStorage.getItem('access_token');
  if (access_token) {
    try {
      let token: TokenPayload = JSON.parse(access_token);
      return token ? token.id : null;
    } catch (error) {
      return null;
    }
  }
  return null;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CustomDialogModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GatewayModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
      useDefaultLang: true,
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: environment.jwt_whitelist,
        headerName: 'Authorization',
        authScheme: '',
      },
    }),
    StoreAppModule,
  ],
  exports: [TranslateModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ts: TranslateService) {
    ts.setDefaultLang('en');
  }
}