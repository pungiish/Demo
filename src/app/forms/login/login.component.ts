import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/shared/data.service';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	token: string;
	loginForm = new FormGroup({
		email: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
	})
	constructor (private data: DataService, private router: Router, private _snackBar: MatSnackBar) { }

	ngOnInit () {
	}
	logIn () {
		this.data.logIn(this.loginForm.value).subscribe(
			token => {
				this.data.token = Object.values(token)
				this.router.navigate(['/users'])
			},
			err => {
				this._snackBar.open('Invalid Login', null, {
					duration: 2000,
				});
				this.loginForm.reset();
			}
		)
	}
}
