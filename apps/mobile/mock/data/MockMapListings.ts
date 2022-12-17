import { ListingMap, ExchangeType } from '../../src/app/types/Listings';

const mockMapListings: ListingMap = {
  testId_1: {
    id: 'testId_1',
    conversionRate: 13934.20,
    maxCashValue: 2500,
    minCashValue: 500,
    exchangeType: ExchangeType.BUYING_CRYPTO,
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    author: {
      username: 'BitCoinGuy27',
      totalTrades: 382,
      upVotes: 293,
      downVotes: 12,
    },
  },
  testId_2: {
    id: 'testId_2',
    conversionRate: 14230.43,
    maxCashValue: 500,
    minCashValue: 100,
    exchangeType: ExchangeType.SELLING_CRYPTO,
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4124,
    },
    author: {
      username: 'NiceBitCoin01',
      totalTrades: 1249,
      upVotes: 843,
      downVotes: 33,
    },
  },
  testId_3: {
    id: 'testId_3',
    conversionRate: 12903.99,
    maxCashValue: 7500,
    minCashValue: 2500,
    exchangeType: ExchangeType.SELLING_CRYPTO,
    coordinate: {
      latitude: 37.78325,
      longitude: -122.4224,
    },
    author: {
      username: 'CoinSniffer_',
      totalTrades: 1382,
      upVotes: 734,
      downVotes: 29,
    },
  },
};

export default mockMapListings;
