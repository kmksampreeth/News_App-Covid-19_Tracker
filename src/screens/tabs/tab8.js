import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Alert,
  RefreshControl,
} from 'react-native';

export default class Tab8 extends Component {
  constructor(props) {
    super(props);
    //True to show the loader
    this.state = { refreshing: true };
    //Running the getData Service for the first time
    this.GetData();
  }

  GetData = () => {
    //Service to get the data from the server to render
    return fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          refreshing: false,
          //Setting the data source for the list to render
          dataSource: responseJson.Countries
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  ListViewItemSeparator = () => {
    return (
      //returning the listview item saparator view
      <View
        style={{
          height: 0.2,
          width: '90%',
          backgroundColor: '#808080',
        }}
      />
    );
  };
  onRefresh() {
    //Clear old data of the list
    this.setState({ dataSource: [] });
    //Call the Service to get the latest data
    this.GetData();
  }
  render() {
    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //Returning the ListView
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={(x, i) => i.toString()}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          enableEmptySections={true}
          renderItem={({item}) => (
            <Text
              style={styles.rowViewContainer}
              onPress={() => Alert.alert( //title
      `${item.Country}`,
      //body
      `Total Cases : ${item.TotalConfirmed}\nTotal Deaths : ${item.TotalDeaths}\nNew Cases : ${item.NewConfirmed}\nNew Deaths : ${item.NewDeaths}\nTotal Recovered : ${item.TotalRecovered}\nLast Updated : ${item.Date}`)}>
              {item.Country}
            </Text>
          )}
          refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
  },
  rowViewContainer: {
    fontSize: 20,
    padding: 10,
  },
});
