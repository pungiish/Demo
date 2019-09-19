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
	token: string;
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		})
	};
	constructor (private http: HttpClient, private config: ConfigService) {
	}

	create (user: User): Observable<any> {
		return this.http.post(this.config.registerUrl, user, this.httpOptions)
	}
	read (): Observable<any> {
		this.httpOptions.headers.append('token', this.token);
		return this.http.get<any>(this.config.usersUrl, this.httpOptions);
	}
	logIn (user: User): Observable<string> {
		return this.http.post<string>(this.config.loginUrl, user, this.httpOptions)
	}
}
