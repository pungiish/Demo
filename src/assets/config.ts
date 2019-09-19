import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    public registerUrl: string = "https://reqres.in/api/register"
    public loginUrl: string = "https://reqres.in/api/login"
    public usersUrl: string = "https://reqres.in/api/users"
    constructor () { }
}
