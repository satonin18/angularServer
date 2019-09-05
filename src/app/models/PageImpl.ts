import {Pageable} from './Pageable';
import {Sort} from './Sort';
import {Notification} from './Notification';

export interface PageImpl {

  content: Notification[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  sort: Sort;
  numberOfElements: number;
  size: number;
  number: number;

}
