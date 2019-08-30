import {User} from './User';
import {NotificationStatus} from './NotificationStatus';
import {Organization} from './Organization';
// import {Action} from './Action';

export class Notification {
  id: string;
  notificationType: string;
  status: NotificationStatus;
  dateReceived: Date;
  dateResponse: Date;
  letterNumber: string;
  organization: Organization;
  userNotificationAuthor: User;
  // actionsOfNotification: Action[];
}
