import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IItem } from './item/item.interface';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    private itemsUrl = "assets/items-sample.json";

    constructor(private http: HttpClient) { }

    getItems(): Observable<IItem[]> {
        return this.http.get<IItem[]>(this.itemsUrl).pipe(
            map(this.processItems),
            catchError(this.handleError)
        );
    }

    processItems = function (items: IItem[]) {
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; items[i].history && j < items[i].history!.length; j++) {
                items[i].history![j].date = new Date(items[i].history![j].date);
            }
        }

        return items;
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
