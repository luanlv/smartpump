import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';

export default () => (
  <Page  colorTheme="red">
    <Navbar title="Menu" />
    {/* <Block strong>
      <p>Left panel content goes here</p>
    </Block>
    <BlockTitle>Load page in panel</BlockTitle> */}
    <List>
      <ListItem link="/" title="Trang chủ" view="#main-view" panelClose></ListItem>
      <ListItem link="/Pull/" title="Client => Server" view="#main-view" panelClose></ListItem>
      <ListItem link="/Push/" title="Server => Client" view="#main-view" panelClose></ListItem>
    </List>
    {/* <BlockTitle>Load page in main view</BlockTitle>
    <List>
      <ListItem link="/about/" title="About" view="#main-view" panelClose></ListItem>
      <ListItem link="/form/" title="Form" view="#main-view" panelClose></ListItem>
    </List> */}
  </Page>
);
