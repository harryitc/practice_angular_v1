import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthRequestInterceptor } from './core/interceptors/request.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [

    // cung cấp các routes
    provideRouter(routes),

    // giao thức http
    importProvidersFrom(HttpClientModule),

    // Cấu hình Thêm các header đến toàn bộ các request khi gửi đi
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthRequestInterceptor, // <--- Cấu hình HttpResponseInterceptor
      multi: true,
    },

  ]
};
