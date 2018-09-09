import React from 'react';
import PropTypes from 'prop-types'
import io from "socket.io-client";
import {
  App,
  Panel,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  Label,
  Input,
  ListButton,
  BlockFooter
} from 'framework7-react';

import routes from '../routes';

const API_ROOT_SOCKET = 'http://103.53.230.75:9091/';



class AppWr extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      message: null
    };
    this.socket = io(API_ROOT_SOCKET)
  }

  // Framework7 parameters here
  f7params = {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    pushState: true,
    routes,
  }
  render() {
    return (
    
      <App params={this.f7params}  >
        {/* Statusbar */}
        <Statusbar />

        {/* Left Panel */}
        <Panel left cover themeDark>
          <View url="/panel-left/" />
        </Panel>

        {/* Right Panel */}
        <Panel right reveal themeDark>
          <View url="/panel-right/"/>
        </Panel>

        {/* Main View */}
        <View id="main-view" url="/" main className="ios-edges"/>

        {/* Popup */}
        <Popup id="popup">
          <View>
            <Page>
              <Navbar title="Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</Block>
            </Page>
          </View>
        </Popup>

        {/* Login Screen */}
        <LoginScreen id="login-screen">
          <View>
            <Page loginScreen>
              <LoginScreenTitle>Login</LoginScreenTitle>
              <List form>
                <ListItem>
                  <Label>Username</Label>
                  <Input name="username" placeholder="Username" type="text"></Input>
                </ListItem>
                <ListItem>
                  <Label>Password</Label>
                  <Input name="password" type="password" placeholder="Password"></Input>
                </ListItem>
              </List>
              <List>
                <ListButton title="Sign In" loginScreenClose></ListButton>
                <BlockFooter>
                  <p>Click Sign In to close Login Screen</p>
                </BlockFooter>
              </List>
            </Page>
          </View>
        </LoginScreen>
      </App>
    
    );
  }

  getChildContext() {
    return {
      socket: this.socket
    };
  }

};

AppWr.childContextTypes = {
  socket: PropTypes.object.isRequired
}

export default AppWr;