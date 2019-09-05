/*
declarations: классы представлений (view classes), которые принадлежат модулю.
    Angular имеет три типа классов представлений: компоненты (components), директивы (directives), каналы (pipes)
exports: набор классов представлений, которые должны использоваться в шаблонах компонентов из других модулей
imports: другие модули, классы которых необходимы для шаблонов компонентов из текущего модуля
providers: классы, создающие сервисы, используемые модулем
bootstrap: корневой компонент, который вызывается по умолчанию при загрузке приложения
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ListUsersComponent} from './component/list_users/list-users.component';
import {NotificationComponent} from './component/notifications/notification.component';
import {RouterModule} from '@angular/router';
import {CommonHeaderUserComponent} from './component/common_header_user/common_header_user.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {TheNotificationComponent} from './component/the_notification/the-notification.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, // HttpModule = depricated
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      // {path: 'account/notifications/:id', component: NotificationDetailComponent},
      // {path: 'account', component: AccountTableComponent},
      // {path: '', redirectTo: 'account', pathMatch: 'full'},
      // {path: 'account/notifications/:id/actions', component: ActionsHistoryComponent}

      {path: 'users', component: ListUsersComponent},
      {path: 'notifications', component: NotificationComponent},
      {path: 'notifications/:id', component: TheNotificationComponent},
      {path: '', redirectTo: 'users', pathMatch: 'full'},

    ])
  ],
  declarations: [
    AppComponent,
    CommonHeaderUserComponent,
    ListUsersComponent,
    NotificationComponent,
    TheNotificationComponent
  ],
  bootstrap:    [
    AppComponent
    // NotificationComponent
    // CommonHeaderUserComponent
  ],
  providers: [],
})
export class AppModule { }
