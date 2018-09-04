import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
// import DummyHistory from './src/components/screens/history';
import DummyStatus from './status';
import DummySettings from './settings';
import Home from './home';
import DummyHistory from './history';

export default class Tabbar extends Component {
    onBackPress(){
        if (Actions.currentScene === 'tabbar'){
            return false;
        }
        Actions.pop()
        return true;
    }
    render() {
      return (
        <Container>
          <Header hasTabs />
          <Tabs>
            <Tab heading="Home">
              <Home />
            </Tab>
            <Tab heading="Status">
              <DummyStatus />
            </Tab>
            <Tab heading="History">
              <DummyHistory />
            </Tab>
            <Tab heading="Settings">
              <DummySettings />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }