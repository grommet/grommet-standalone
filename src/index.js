//import styles
import 'grommet/scss/vanilla/index';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Meter from 'grommet/components/Meter';
import Title from 'grommet/components/Title';
import Value from 'grommet/components/Value';

class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Header direction="row" justify="between" size="large"
          pad={{ horizontal: 'medium' }}>
          <Title>Grommet standalone</Title>
        </Header>
        <Box pad='medium'>
          <Meter value={40} />
        </Box>
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!
          </p>
        </Footer>
      </App>
    );
  }
};

let element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove('loading');
