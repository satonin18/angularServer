import { Component, OnInit} from '@angular/core';
// import { HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {TestUser} from './models/TestUser';
import {Observable} from 'rxjs';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [HttpService]
})
export class AppComponent
  implements OnInit {



  ngOnInit() {

  }
}
