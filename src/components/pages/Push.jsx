import React from 'react';
import PropTypes from 'prop-types';
import { Page, Navbar, Link, Block, BlockTitle, Button } from 'framework7-react';

class Push extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
 
  render() {

    let json1 = {
      "ID": "00000001",
      "Action": 1,
      "Relay_1": {
       "mode": 0,
       "time_on": 30,
       "time_off": 3000,
       "times": 5,
       "times_0": "16:04:00",
       "on_0": 10,
       "times_1": "16:04:00",
       "on_1": 10,
       "times_2": "16:04:00",
       "on_2": 10,
       "times_3": "16:04:00",
       "on_3": 10,
       "times_4": "16:04:00",
       "on_4": 10
      }
     }

     let json2 = {
      "ID": "00000001",
      "Action": 7,
      "address": "203.190.171.56",
      "port": 21,
      "user": "ftpdota",
      "pass": "27P6Pu_FGe86",
      "name": "Project3Gn.bin",
      "path": "/"
     }

    return (
      <Page>
        <Navbar title="Đẩy thông tin xuống Client" backLink="Quay lại"></Navbar>
        <BlockTitle>Thông tin đẩy client</BlockTitle>
        <Block strong>
          <Button
            onClick={() => {
              this.context.socket.emit('server', json1);
            }}
          >Cấu hình Relay</Button>

          <Button
            onClick={() => {
              this.context.socket.emit('server', json2);
            }}
          >Bản tin OTA</Button>

        </Block>
      </Page>
    )
  }
}


Push.contextTypes = {
  socket: PropTypes.object.isRequired
};

export default Push;