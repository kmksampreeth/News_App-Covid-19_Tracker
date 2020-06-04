import React, { Component } from 'react';
import { Container, Drawer, Button, Header, Text, Content, Tab, Tabs, Left, Body, Right, Title, ScrollableTab} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SideBar from './SideMenuAbout';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
import Tab4 from './tabs/tab4';
import Tab5 from './tabs/tab5';
import Tab6 from './tabs/tab6';
import Tab7 from './tabs/tab7';
import Tab8 from './tabs/tab8';
import Tab9 from './tabs/tab9';
export default class TabsExample extends Component {


    closeDrawer ()  {
        this._drawer._root.close()
      };
    openDrawer () { 
        this._drawer._root.open() 
    };


  render() {
    return (


<Drawer ref={(ref) => { this._drawer = ref; }} content={<SideBar navigator={this._navigator} />} onClose={() => this.closeDrawer()} >
      <Container>
        <Header hasTabs noLeft>
        <Left/>
          <Body>
            <Title style={{fontWeight:'bold'}}>Instant News</Title>
          </Body>
          <Right>
          <Button hasText transparent onPress={() => this.openDrawer()}>
              <Text style={{fontWeight:'bold'}}>About Us</Text>
            </Button>
          </Right>
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}} renderTabBar={()=> <ScrollableTab />}>
          <Tab  heading="General">
            <Tab1 />
          </Tab>
          <Tab heading="Business">
            <Tab2 />
          </Tab>
          <Tab heading="Technology">
            <Tab3 />
          </Tab>
          <Tab heading="Entertainment">
            <Tab4 />
          </Tab>
          <Tab heading="Health">
            <Tab5 />
          </Tab>
          <Tab heading="Science">
            <Tab6 />
          </Tab>
          <Tab heading="Sports">
            <Tab7 />
          </Tab>
          <Tab heading="Covid-19">
            <Tab8 />
          </Tab>
          <Tab heading="Covid-19(India)">
            <Tab9 />
          </Tab>
        </Tabs>
      </Container>
      </Drawer>
    );
  }
}