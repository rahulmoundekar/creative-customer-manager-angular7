
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private baseUrl = "http://localhost:8080/customers";

    constructor(private http: HttpClient) { }

    getCustomerList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`).pipe(catchError(this.handleError));
    }

    getCustomerById(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
    }

    createNewCustomer(customer: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, customer).pipe(catchError(this.handleError));
    }

    updateCustomer(id: number, customer: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, customer).pipe(catchError(this.handleError));
    }

    deleteCustomerById(id: number): Observable<Object> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' }).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {

            // A client-side or network error occurred. Handle it accordingly.

            console.error('An error occurred:', error.error.message);
        } else {

            // The backend returned an unsuccessful response code.

            // The response body may contain clues as to what went wrong.

            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }

        // return an observable with a user-facing error message

        return throwError('Something bad happened. Please try again later.');
    }

}