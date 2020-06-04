import React, { Component } from 'react';
import { StyleSheet, View, requireNativeComponent, Dimensions, Modal, Share, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import {Container, Header, Content, Body, Left,Icon ,Right, Title, Button, Text} from 'native-base';


const webViewHeight = Dimensions.get('window').height - 56;



class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url, title} = this.props.articleData;
        message = `${title}\n\nRead More @ ${url}\n\nShared via InstantNews App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor:'red'}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                            <Icon name='person'/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                                <Text>share</Text>
                            </Button>
                        </Right>
                    </Header>
                    <ScrollView>
                    <Content contentContainerStyle={{height: webViewHeight}}>
                     
                        <WebView scrollEnabled={true} source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                        
                    </Content>
                    </ScrollView>
                </Container>
            </Modal>
        );
        } else {
            return null;
        }
    }
}

//make this component available to the app
export default ModalComponent;