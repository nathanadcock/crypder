import React, {
  useRef,
  useState,
} from 'react';
import {
  StyleSheet,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { animated, useSpring } from '@react-spring/native';
import MapMarker from '../components/atoms/MapMarker';
import mockMapListings from '../../../mock/data/MockMapListings';
import { ListingMap } from '../types/Listings';
import MapListingCard from '../components/molecules/MapListingCard';

export default function ExploreScreen() {
  const [listings, setListings] = useState<ListingMap>(mockMapListings);
  const [activeListingId, setActiveListingId] = useState<string|undefined>(undefined);
  const mapRef = useRef(null);

  const activeListing = activeListingId ? listings[activeListingId] : undefined;

  const listingViewWrapperStyle = useSpring({
    config: {
      mass: 0.25,
      tension: 300,
    },
    to: {
      bottom: activeListingId ? 0 : -200,
      opacity: activeListingId ? 1 : 0,
    },
  });

  const onCloseListingCardHandler = () => {
    setActiveListingId(undefined);
  };

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider="google"
        toolbarEnabled={false}
        mapPadding={{
          top: 24,
          bottom: 0,
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
            <MapMarker
              active={listingId === activeListingId}
              exchangeType={listing.exchangeType}
            />
          </Marker>
        ))}
      </MapView>
      <animated.View
        style={[
          styles.listingViewWrapper,
          listingViewWrapperStyle,
        ]}
      >
        <MapListingCard
          listing={activeListing}
          onClose={onCloseListingCardHandler}
        />
      </animated.View>
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
});
