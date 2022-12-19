import React, {
  ReactElement,
  useState,
} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import mockMapListings from '../../../mock/data/MockMapListings';
import MapListingCard from '../components/molecules/MapListingCard';
import { ListingMap } from '../types/Listings';

export default function ListingScreen(): ReactElement {
  const [listings, setListings] = useState<ListingMap>(mockMapListings);

  return (
    <ScrollView style={styles.listingView}>
      <Text style={styles.listingViewHeader}>
        Listings
      </Text>
      {Object.entries(listings).map(([listingId, listing]) => (
        <View style={styles.listingCardWrapper} key={listingId}>
          <MapListingCard
            listing={listing}
            mapMode={false}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listingView: {
    height: '100%',
    width: '100%',
    paddingTop: 40,
    paddingHorizontal: 6,
  },
  listingViewHeader: {
    paddingVertical: 24,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listingCardWrapper: {
    marginBottom: 6,
  },
});
