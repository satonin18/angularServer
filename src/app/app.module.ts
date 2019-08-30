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
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ListUsersComponent} from './list_users/list_users.component';
import {NotificationComponent} from './notifications/notification.component';
import {RouterModule} from '@angular/router';
import {CommonHeaderUserComponent} from './common_header_user/common_header_user.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule, // HttpModule = depricated
    RouterModule.forRoot([
      // {path: 'account/notifications/:id', component: NotificationDetailComponent},
      // {path: 'account', component: AccountTableComponent},
      // {path: '', redirectTo: 'account', pathMatch: 'full'},
      // {path: 'account/notifications/:id/actions', component: ActionsHistoryComponent}
      {path: 'users', component: ListUsersComponent},
      {path: 'notifications', component: NotificationComponent},
      // {path: 'notification/:userId', component: NotificationComponent},
      {path: '', redirectTo: 'users', pathMatch: 'full'},

    ]),
  ],
  declarations: [
    AppComponent,
    CommonHeaderUserComponent,
    ListUsersComponent,
    NotificationComponent
  ],
  bootstrap:    [
    AppComponent
    // NotificationComponent
    // CommonHeaderUserComponent
  ],
  providers: [],
})
export class AppModule { }
