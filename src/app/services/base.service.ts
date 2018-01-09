import { HttpClient } from '@angular/common/http';
import { Filters, Entity } from '@services/contract';
import { Observable } from 'rxjs/Observable';
import { LocationOverviewModelResponse } from '@services/location/location.contracts';

export class BaseService {
    constructor(private http: HttpClient, private uriPath: string) { }

    get<T>(filters: Filters): Observable<T> {
        const filter = Object.entries(filters).map(([key, val]) => `${key}=${val}`).join('&');
        return this.http.get<T>(`/${this.uriPath}?${filter}`);
    }

    update<T>(model: Entity): Observable<T> {
        return this.http.put<T>(`/${this.uriPath}/${model._id}`, model);
    }

    create<T>(model: Entity): Observable<T> {
        return this.http.post<T>(`/${this.uriPath}`, model);
    }
}
