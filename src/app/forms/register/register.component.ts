import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import { DataService } from 'src/app/shared/data.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm = new FormGroup({
		firstName: new FormControl('', Validators.required),
		lastName: new FormControl('', Validators.required),
		email: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
	})
	constructor (private data: DataService, private router: Router, private _snackBar: MatSnackBar) { }
	ngOnInit () {
	}

	register () {
		this.data.create(this.registerForm.value).subscribe(
			data => {
				console.log(data)
				this._snackBar.open('Successful registration, redirecting to login', null, {
					duration: 500,
				});
				setTimeout(() => {
					this.router.navigate(['/login'])
				}, 500);
			},
			err => {
				this._snackBar.open('Invalid registration details', null, {
					duration: 2000,
				});
			}
		);
	}
}
