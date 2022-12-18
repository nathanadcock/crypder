import React, { ReactElement, useEffect, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ArrowFatLineDown,
  ArrowFatLineUp,
  ArrowsLeftRight,
  ArrowsOutLineHorizontal,
  Bookmark,
  ChatCircleText,
  CurrencyCircleDollar,
  Handshake,
  UserCircle,
  X,
} from 'phosphor-react-native';
import { Listing, ExchangeType } from '../../types/Listings';

export default function MapListingCard({
  listing: externalListing,
  onClose,
}: {
  listing: Listing | undefined;
  onClose: () => void;
}): ReactElement | null {
  const [listing, setListing] = useState(externalListing);

  useEffect(() => {
    if (externalListing) setListing(externalListing);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalListing]);

  if (!listing) return null;

  const listingTransactionPillColorStyle = (
    listing.exchangeType === ExchangeType.BUYING_CRYPTO
      ? styles.listingBuyPillColors
      : styles.listingSellPillColors
  );

  return (
    <View style={styles.listingContainer}>
      <View style={styles.listingHeader}>
        <View style={styles.rowContainer}>
          {/* AUTHOR PILL */}
          <View
            style={[
              styles.listingFancyPill,
              styles.listingAuthorPillColors,
              { marginRight: 6 },
            ]}
          >
            <View style={styles.rowContainer}>
              <UserCircle
                size={styles.listingFancyPillText.fontSize + 4}
                color={styles.listingFancyPillText.color}
                style={{ marginRight: 4 }}
              />
              <Text style={styles.listingFancyPillText}>
                {listing.author.username}
              </Text>
            </View>
          </View>
          {/* TRANSACTION TYPE PILL */}
          <View
            style={[
              styles.listingFancyPill,
              listingTransactionPillColorStyle,
            ]}
          >
            <View style={styles.rowContainer}>
              <ArrowsLeftRight
                size={styles.listingFancyPillText.fontSize + 4}
                color={styles.listingFancyPillText.color}
                style={{ marginRight: 4 }}
              />
              <Text style={styles.listingFancyPillText}>
                {listing.exchangeType}
              </Text>
            </View>
          </View>
        </View>
        {/* CLOSE BUTTON */}
        <Pressable
          style={styles.listingCloseButton}
          onPress={onClose}
        >
          <X size={20} />
        </Pressable>
      </View>
      {/* CONVERSION RATE TEXT */}
      <View style={styles.rowContainer}>
        <CurrencyCircleDollar size={32} style={{ marginRight: 4 }} />
        <Text style={styles.listingMainText}>
          {`${listing.conversionRate} USD/BTC`}
        </Text>
      </View>
      {/* TRADE LIMIT TEXT */}
      <View style={[styles.rowContainer, { marginBottom: 6 }]}>
        <ArrowsOutLineHorizontal
          size={styles.listingSubText.fontSize + 4}
          color={styles.listingSubText.color}
          style={{ marginLeft: 4, marginRight: 8 }}
        />
        <Text style={styles.listingSubText}>
          {`$${listing.minCashValue} - ${listing.maxCashValue} USD Limit`}
        </Text>
      </View>
      <View style={styles.rowContainer}>
        {/* TOTAL TRADES TEXT */}
        <View style={[styles.rowContainer, styles.listingInfoContainer]}>
          <Handshake
            size={styles.listingSubText.fontSize + 4}
            color="#8340db"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.listingSubText}>
            {`${listing.author.totalTrades}`}
          </Text>
        </View>
        {/* UP VOTES TEXT */}
        <View style={[styles.rowContainer, styles.listingInfoContainer]}>
          <ArrowFatLineUp
            size={styles.listingSubText.fontSize + 4}
            color="#408edb"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.listingSubText}>
            {`${listing.author.upVotes}`}
          </Text>
        </View>
        {/* DOWN VOTES TEXT */}
        <View style={[styles.rowContainer, styles.listingInfoContainer]}>
          <ArrowFatLineDown
            size={styles.listingSubText.fontSize + 4}
            color="#db6e40"
            style={{ marginRight: 4 }}
          />
          <Text style={styles.listingSubText}>
            {`${listing.author.downVotes}`}
          </Text>
        </View>
      </View>
      <View style={styles.horizontalRule} />
      <View style={styles.rowContainer}>
        <View style={styles.moreDetailsButton}>
          <Text style={styles.moreDetailsButtonText}>
            More Details
          </Text>
        </View>
        <View style={[styles.listingActionButton, { marginRight: 6 }]}>
          <Bookmark size={28} color="#666666" />
        </View>
        <View style={styles.listingActionButton}>
          <ChatCircleText size={28} color="#666666" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalRule: {
    height: 2,
    width: '100%',
    borderRadius: 100,
    backgroundColor: '#EEEEEE',
    marginVertical: 8,
  },
  listingContainer: {
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFFE4',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 12,
  },
  listingHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listingCloseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    width: 28,
    borderRadius: 8,
    backgroundColor: '#EEEEEE',
  },
  listingFancyPill: {
    borderRadius: 100,
    borderWidth: 3,
    marginBottom: 4,
    paddingVertical: 2,
    paddingLeft: 4,
    paddingRight: 8,
    backgroundColor: '#444444',
    borderColor: '#888888',
  },
  listingAuthorPillColors: {
    backgroundColor: '#A3297E',
    borderColor: '#D65CB1',
  },
  listingBuyPillColors: {
    backgroundColor: '#292FA3',
    borderColor: '#5C62D6',
  },
  listingSellPillColors: {
    backgroundColor: '#A37229',
    borderColor: '#D6A55C',
  },
  listingFancyPillText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  listingMainText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  listingSubText: {
    fontSize: 14,
    color: '#444444',
  },
  listingInfoContainer: {
    borderRadius: 100,
    marginRight: 6,
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: '#EEEEEE',
  },
  listingActionButton: {
    borderRadius: 12,
    padding: 8,
    backgroundColor: '#EEEEEE',
  },
  moreDetailsButton: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 6,
    paddingVertical: 12,
    backgroundColor: '#000000',
  },
  moreDetailsButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
