import { Component, OnInit} from '@angular/core';
// import { HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TestUser} from '../models/TestUser';
import {User} from '../models/User';

@Component({
  // selector: 'app-root',
  selector: 'app-list-users-root',
  templateUrl: './list_users.component.html',
  styleUrls: ['./list_users.component.css'],
  // providers: [HttpService]
})
export class ListUsersComponent implements OnInit {

  // testUser: TestUser;
  // testUsers: TestUser[];
  users: User[];

  response: any;

  constructor(private http: HttpClient) { }
  // constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.http.get('user.json') //Observable<any>
    // this.httpService.getUsers()
    // .subscribe((data:User) => this.user=data);
    // .subscribe(data => this.list_users=data["userList"]);
    //   .subscribe(data => this.list_users = data);

    // this.http.get<TestUser>('http://localhost:8081/lkz_project_war_exploded/angular/test_user')
    // .subscribe((testUser) => {
    //   this.testUser = testUser;
    //   console.log(this.testUser);
    // });
    //
    // this.http.get<TestUser[]>('http://localhost:8081/lkz_project_war_exploded/angular/test_users')
    // .subscribe((testUsers) => {
    //   this.testUsers = testUsers;
    //   console.log(this.testUsers);
    // });

    this.http.get<User[]>('http://localhost:8081/lkz_project_war_exploded/angular/users')
    .subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }
}
