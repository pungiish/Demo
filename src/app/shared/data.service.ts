import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { ConfigService } from 'src/assets/config'
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { tap, map, catchError } from 'rxjs/operators'
import { User } from '../models/User';
@Injectable({
	providedIn: 'root'
})
export class DataService {
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		})
	};
	constructor (private http: HttpClient, private config: ConfigService) {
	}

	create (user: User) {
		return this.http.post(this.config.registerUrl, user, this.httpOptions)
	}
	read (): Observable<any> {
		return this.http.get<any>(this.config.usersUrl);
	}
	update () {

	}
	delete () {

	}
	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
		  // A client-side or network error occurred. Handle it accordingly.
		  console.error('An error occurred:', error.error.message);
		} else {
		  // The backend returned an unsuccessful response code.
		  // The response body may contain clues as to what went wrong,
		  console.error(
			`Backend returned code ${error.status}, ` +
			`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError(
		  'Something bad happened; please try again later.');
	  };
}
