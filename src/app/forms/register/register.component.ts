import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/User'
import { DataService } from 'src/app/shared/data.service';
import { Router, NavigationExtras } from '@angular/router';

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

	constructor (private data: DataService, private router: Router) { }
	showModal = false;
		ngOnInit () {
		}

	register () {
			this.data.create(this.registerForm.value).subscribe(
				data => {
					console.log(data)
					this.registerForm.reset();
					this.router.navigate(['/users'])
				},
				err => {
					console.log(err);
					this.showModal = true;
					setTimeout(() => {
						this.showModal = false;
					}, 2000);
				}
			);
		}
	}
