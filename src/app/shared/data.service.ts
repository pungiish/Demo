import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment as env } from 'src/environments/environment'
import { Observable } from 'rxjs';

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
	constructor (private http: HttpClient) {
	}

	create (user: User): Observable<any> {
		return this.http.post(env.req + '/register', user, this.httpOptions)
	}
	read (): Observable<any> {
		this.httpOptions.headers.append('token', this.token);
		return this.http.get<any>(env.req + '/users', this.httpOptions);
	}
	logIn (user: User): Observable<string> {
		return this.http.post<string>(env.req + '/login', user, this.httpOptions)
	}
}
