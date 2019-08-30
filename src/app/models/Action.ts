import {User} from './User';
import {ActionType} from './ActionType';
import {NotificationStatus} from './NotificationStatus';

export class Action {
  id: string;
  actionType: ActionType;
  content: string;
  date: Date;
  implementor: User;
  statusAfterAction: NotificationStatus;
  notification: Notification;
}
