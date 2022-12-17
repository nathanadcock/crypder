import { LatLng } from 'react-native-maps';

export enum ExchangeType {
  BUYING_CRYPTO = 'Buying Crypto',
  SELLING_CRYPTO = 'Selling Crypto',
}

export interface Listing {
  id: string;
  conversionRate: number;
  maxCashValue: number;
  minCashValue: number;
  coordinate: LatLng;
  exchangeType: ExchangeType;
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
