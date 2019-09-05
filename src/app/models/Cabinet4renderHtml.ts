import {PageImpl} from './PageImpl';
import {CabinetSessionState} from './CabinetSessionState';
import {Status} from './Status';

export class Cabinet4renderHtml {
  // statuses4selectFilter: Array<Status>;
  statuses4selectFilter: Array<Status>;
  listArchiveStatus: Array<Status>;
  checkedMainListNotificStatuses: Array<Status>;

  pageImpl: PageImpl;
  state: CabinetSessionState;

  newCheckedMainListNotificStatusesId: Array<number>;
}
