import React from 'react';
import { StyleSheet, View, requireNativeComponent,Alert } from 'react-native';
import { Container, Header, Content,Body,Title, List, ListItem, Text, Separator } from 'native-base';

export default class SideMenuAbout extends React.Component {
  render(){
  return (
    <Container>
    <Header>
    <Body>
            <Title style={{fontWeight:'bold'}}>Instant News</Title>
          </Body>
    </Header>
    <Content>
      <Separator bordered>
        <Text>Credits</Text>
      </Separator>
      <ListItem>
        <Text onPress={() => Alert.alert('Support','For any suggesions and further updates\nPlease contact instantnews@fanclud.pm')}> Support </Text>
      </ListItem>
      <ListItem last>
        <Text onPress={() => Alert.alert('About Us','This App was developed by KMK Sampreeth')}>About Us</Text>
      </ListItem>
      <Text style={{marginTop:400,justifyContent:'center',alignItems:'center',marginLeft:30}}>Developed By KMK Sampreeth</Text>
    </Content>
  </Container>
  );
  }
}


