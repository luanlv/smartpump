import React from 'react';
import PropTypes from 'prop-types';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
} from 'framework7-react';

class Home extends React.Component{
  render(){
    return (
  <Page colorTheme="dark">
    <Navbar colorTheme="red">
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left"></Link>
      </NavLeft>
      <NavTitle>Smart Pump</NavTitle>
      {/* <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right"></Link>
      </NavRight> */}
    </Navbar>

    <Block strong>
      <List>
        <ListItem link="/pull/" title="Thông tin server nhận"></ListItem>
        <ListItem link="/push/" title="Thông tin đẩy xuống client"></ListItem>
      </List>
    </Block>
  </Page>
    )
  }
}

Home.contextTypes = {
  socket: PropTypes.object.isRequired
};

export default Home;