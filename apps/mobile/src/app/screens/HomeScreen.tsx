import {
  ArrowsOutLineHorizontal,
  CreditCard,
  CurrencyCircleDollar,
  Handshake,
  ThumbsDown,
  ThumbsUp,
  UserCircle,
} from 'phosphor-react-native';
import React, {
  useRef,
  useState,
} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, { LatLng, Marker } from 'react-native-maps';
import MapMarker from '../components/atoms/MapMarker';
import StyledTextInput from '../components/atoms/StyledTextInput';

interface Listing {
  id: string;
  conversionRate: number;
  maxCashValue: number,
  minCashValue: number,
  coordinate: LatLng;
  author: {
    username: string;
  };
}

interface ListingMap {
  [id: string]: Listing;
}

const mockListings: ListingMap = {
  testId_1: {
    id: 'testId_1',
    conversionRate: 13934.20,
    maxCashValue: 2500,
    minCashValue: 500,
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    author: {
      username: 'BitCoinGuy27',
    },
  },
  testId_2: {
    id: 'testId_2',
    conversionRate: 14230.43,
    maxCashValue: 500,
    minCashValue: 100,
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4124,
    },
    author: {
      username: 'NiceBitCoin01',
    },
  },
  testId_3: {
    id: 'testId_3',
    conversionRate: 12903.99,
    maxCashValue: 7500,
    minCashValue: 2500,
    coordinate: {
      latitude: 37.78325,
      longitude: -122.4224,
    },
    author: {
      username: 'CoinSniffer_',
    },
  },
};

export default function HomeScreen() {
  const [listings, setListings] = useState<ListingMap>(mockListings);
  const [activeListingId, setActiveListingId] = useState<string>(Object.keys(listings)[0]);
  const mapRef = useRef(null);

  const activeListing = listings[activeListingId];

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider="google"
        toolbarEnabled={false}
        mapPadding={{
          top: 24,
          bottom: 180,
          left: 0,
          right: 0,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {Object.entries(listings).map(([listingId, listing]) => (
          <Marker
            key={listing.id}
            coordinate={listing.coordinate}
            onPress={() => setActiveListingId(listingId)}
            tracksViewChanges
          >
            <MapMarker active={listingId === activeListingId} />
          </Marker>
        ))}
      </MapView>
      <View style={styles.listingViewWrapper}>
        <View style={styles.listingContainer}>
          {/* Author */}
          <View
            style={[
              styles.listingTextWrapper,
              styles.listingAuthorWrapper,
            ]}
          >
            <UserCircle
              size={20}
              color="#FFFFFF"
              style={styles.listingTextIcon}
            />
            <Text style={styles.listingAuthorText}>
              {activeListing.author.username}
            </Text>
          </View>
          {/* Conversion Rate */}
          <View
            style={[
              styles.listingTextWrapper,
            ]}
          >
            <CurrencyCircleDollar
              size={32}
              style={styles.listingTextIcon}
            />
            <Text style={styles.listingConversionRateText}>
              {`${activeListing.conversionRate} USD/BTC`}
            </Text>
          </View>
          {/* Limit */}
          <View
            style={[
              styles.listingTextWrapper,
              styles.listingLimitWrapper,
            ]}
          >
            <ArrowsOutLineHorizontal
              size={24}
              style={styles.listingTextIcon}
            />
            <Text style={styles.listingLimitText}>
              {`$${activeListing.minCashValue} - ${activeListing.maxCashValue} USD Limit`}
            </Text>
          </View>
          <View style={styles.listingInfoGroup}>
            {/* Trades */}
            <View style={styles.listingInfoWrapper}>
              <Handshake
                size={24}
                style={styles.listingTextIcon}
              />
              <Text style={styles.listingInfoText}>
                2334
              </Text>
            </View>
            {/* Positive */}
            <View style={styles.listingInfoWrapper}>
              <ThumbsUp
                size={24}
                style={styles.listingTextIcon}
              />
              <Text style={styles.listingInfoText}>
                223
              </Text>
            </View>
            {/* Negative */}
            <View style={styles.listingInfoWrapper}>
              <ThumbsDown
                size={24}
                style={styles.listingTextIcon}
              />
              <Text style={styles.listingInfoText}>
                16
              </Text>
            </View>
          </View>
          <Pressable style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>More details</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
  headerViewWrapper: {
    position: 'absolute',
    width: '100%',
    top: 0,
    paddingTop: 40,
    paddingLeft: 12,
    paddingRight: 12,
  },
  listingViewWrapper: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  listingContainer: {
    backgroundColor: '#FFFFFFE4',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 12,
  },
  listingTextIcon: {
    marginRight: 6,
  },
  listingTextWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  listingAuthorWrapper: {
    alignSelf: 'flex-start',
    borderRadius: 100,
    borderWidth: 3,
    marginBottom: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 12,
    backgroundColor: '#2b32ad',
    borderColor: '#5c62d6',
  },
  listingAuthorText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  listingConversionRateText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  listingLimitWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    marginBottom: 8,
  },
  listingLimitText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listingInfoGroup: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  listingInfoWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    marginRight: 6,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 8,
  },
  listingInfoText: {
    fontSize: 14,
  },
  detailsButton: {
    alignItems: 'center',
    borderRadius: 12,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#000',
  },
  detailsButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
