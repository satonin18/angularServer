import { Component, OnInit} from '@angular/core';
// import { HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TestUser} from '../models/TestUser';
import {User} from '../models/User';
import {Notification} from '../models/Notification';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.css'],
  // providers: [HttpService]
})
export class NotificationComponent implements OnInit {

  // notification: Notification;
  notifications: Notification[];

  response: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  // constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.http.get('user.json') //Observable<any>
    // this.httpService.getUsers()
    // .subscribe((data:User) => this.user=data);
    // .subscribe(data => this.list_users=data["userList"]);
    //   .subscribe(data => this.list_users = data);

    const userId = this.route.snapshot.paramMap.get('userId');

    // this.http.get<Notification>('http://localhost:8081/lkz_project_war_exploded/angular/notification')// + '?userId=' + id)
    // .subscribe((notification) => {
    //   this.notification = notification;
    //   console.log(this.notification);
    // });

    this.http.get<Notification[]>('http://localhost:8081/lkz_project_war_exploded/angular/notifications')
    .subscribe((notifications) => {
      this.notifications = notifications;
      console.log(this.notifications);
    });
  }
}
