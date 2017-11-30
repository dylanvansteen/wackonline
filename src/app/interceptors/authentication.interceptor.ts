import {
    HttpInterceptor,
    HttpRequest,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent,
    HttpHandler,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler)
        : Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        const accessToken = localStorage.getItem('accessToken');
        const authReq = req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } });
        return next.handle(authReq);
    }

}
