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
	token: string[];

	constructor (private http: HttpClient) {
	}

	create (user: User): Observable<any> {
		let headers = new HttpHeaders({
			'Accept': 'application/json',
		});
		return this.http.post(env.req + '/register', user, { headers: headers })
	}
	read (): Observable<any> {
		let headers = new HttpHeaders({
			'Accept': 'application/json',
			'Authorization': `${this.token}`,
		});
		return this.http.get<any>(env.req + '/users', { headers: headers });
	}
	getUser (user: User): Observable<any> {
		let headers = new HttpHeaders({
			'Accept': 'application/json',
			'Authorization': `${this.token}`,
		});

		return this.http.get<any>(env.req + '/users/' + user.id, { headers: headers })
	}
	logIn (user: User): Observable<string> {
		let headers = new HttpHeaders({
			'Accept': 'application/json',
		});
		return this.http.post<string>(env.req + '/login', user, { headers: headers })
	}
}
