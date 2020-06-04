import React from 'react';
import {Text} from 'native-base';
import moment from 'moment';

class Time extends React.Component {

constructor(props){
    super(props);
    this.data = props.time; 
}

  render(){
    const time = moment( this.date || moment.now() ).fromNow();
  return (
       <Text style={{fontWeight:"bold",marginLeft:10}} note>{ time}</Text>
  );
  }
}

export default Time;