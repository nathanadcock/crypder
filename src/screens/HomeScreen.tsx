import React, { useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Text, View } from '../components/Themed';
import { ApplicationContext } from '../contexts/ApplicationContext';

export default function HomeScreen() {
  const { setActiveUser } = useContext(ApplicationContext);

  const signOutHandler = () => {
    setActiveUser(undefined);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Pressable
        style={styles.signOutButton}
        onPress={signOutHandler}
      >
        <Text style={styles.signOutButtonText}>Temporary Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  signOutButton: {
    alignItems: 'center',
    top: '-40%',
    borderRadius: 12,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#FFF',
  },
  signOutButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
