import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IItem } from './item/item.interface';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    private itemsUrl = "assets/items-sample.json";

    constructor(private http: HttpClient) { }

    getItems(): Observable<IItem[]> {
        return this.http.get<IItem[]>(this.itemsUrl).pipe(
            //tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
            errorMessage = `Client side error: ${err.error.message}`;
        } else {
            errorMessage = `Server side error: ${err.status} - ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
