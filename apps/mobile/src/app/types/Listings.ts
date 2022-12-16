import { LatLng } from 'react-native-maps';

export interface Listing {
  id: string;
  conversionRate: number;
  maxCashValue: number,
  minCashValue: number,
  coordinate: LatLng;
  author: {
    username: string;
    totalTrades: number;
    upVotes: number;
    downVotes: number;
  };
}

export interface ListingMap {
  [id: string]: Listing;
}
