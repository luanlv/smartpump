import React from 'react';
import PropTypes from 'prop-types';
import { Page, Navbar, Link, Block, BlockTitle, List, ListItem } from 'framework7-react';



class Pull extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      message: []
    };
    this.onPull = this.onPull.bind(this);
  }

  componentDidMount() {
    // console.log('ok')
    this.context.socket.on('pull', this.onPull);
  }

  componentWillUnmount() {
    console.log('exit')
  }

  onPull(data) {
      console.log(data)
      console.log(this)
      let that = this
      let message = that.state.message
      message.unshift(data)
      message = message.slice(0, 5)
      this.setState(prev => {
        return {
          ...prev,
          message: message
        }
      })
  }

  render() {
    return (
      <Page>
        <Navbar title="Thông tin nhận được từ client" backLink="Quay lại"></Navbar>
        <BlockTitle>Thông tin nhận từ client</BlockTitle>
        <List simple-list>
          {this.state.message.map((el,idx) => {
            return (
              <ListItem key={idx}>{JSON.stringify(el)}</ListItem>
            )
          })}
        </List>
  </Page>
    )
  }
}

Pull.contextTypes = {
  socket: PropTypes.object.isRequired
};


export default Pull;