import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  number: number;
  capacity: number;
  restaurant_id: string;
  status: string;
  type: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    reservation?: number;
  };
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
  status?: string;
  type?: string;
}
