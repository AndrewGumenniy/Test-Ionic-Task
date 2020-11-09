
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class PasswordInterceptor implements HttpInterceptor {
    private authService: AuthService;

    constructor(private injector: Injector, private router: Router) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.authService = this.injector.get(AuthService);

        if (this.authService && this.authService.getPassword()) {
            request = request.clone({
                setHeaders: {
                    'X-Password': this.authService.getPassword()
                }
            });

        }

        return next.handle(request).pipe(
            tap(
              (event) => {
                if (event instanceof HttpResponse) {
                  console.log('Server response');
                }
              },
              (err) => {
                if (err instanceof HttpErrorResponse) {
                  if (err.status === 401) {
                    console.log('Unauthorized');
                  }
                }
              }
            )
          );
    }

}
