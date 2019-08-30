import { Component, OnInit} from '@angular/core';
// import { HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [HttpService]
})
export class AppComponent implements OnInit {

  user: User;
  // users: User[] = [];
  response: any;

  constructor(private http: HttpClient) { }
  // constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.http.get('user.json') //Observable<any>
    // this.httpService.getUsers()
    // .subscribe((data:User) => this.user=data);
    // .subscribe(data => this.users=data["userList"]);
    //   .subscribe(data => this.users = data);

    const observable: Observable<User> = this.http.get<User>('http://localhost:8081/lkz_project_war_exploded/angular/user');
    observable.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }
}
