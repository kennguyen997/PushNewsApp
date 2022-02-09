import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';

interface Props {
  cityHandler: (city: string) => any;
}

const SearchBarGG: FC<Props> = ({cityHandler}) => {
  return (
    <View style={styles.mainSearch}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyBfp-ATr0I5TJh-kMwX9Ri9zB8J6GqhiN8'}}
        onPress={(data: GooglePlaceData) => {
          console.log(data.description);
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.leftButton}>
            {/* <Ionicons name="location-sharp" size={24} /> */}
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightButton}>
            {/* <AntDesign name="clockcircle" size={11} style={{marginRight: 6}} /> */}
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBarGG;

const styles = StyleSheet.create({
  mainSearch: {marginTop: 15, flexDirection: 'row'},
  leftButton: {marginLeft: 10},
  rightButton: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
});
