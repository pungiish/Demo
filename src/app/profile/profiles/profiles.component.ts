import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public data: DataService) { }
	users: User[] = [];
	ngOnInit () {
		this.data.read().subscribe
			(x => x.data.forEach(element => {
			console.log(element);
			this.users.push(new User(element.first_name, element.last_name, element.email, element.avatar));
		}))



  }

}
