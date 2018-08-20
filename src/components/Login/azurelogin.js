import React, { Component } from 'react';
import {ReactNativeAD, ADLoginView} from 'react-native-azure-ad'
import {Actions, Router, Scene} from 'react-native-router-flux';

const CLIENT_ID = '70f7a292-263c-4cde-8cae-ba25555d79e4';

export default class LandingView extends React.Component {

  constructor(props) {
    super(props)
    this.AzureADContext = {
      client_id : CLIENT_ID,
      // Optional
      redirectUrl : 'http://localhost:8081',  
      // Optional
      authority_host : 'https://login.microsoftonline.com/70f7a292-263c-4cde-8cae-ba25555d79e4/oauth2/authorize',
      // Optional
      tenant  : 'common',  
      // Optional
      prompt : 'none',
      // Optional
      login_hint : 'user@domain.com',	  
      // This is required if client_id is a web application id
      // but not recommended doing this way.
      //client_secret : '74cd5dd4-cbb0-46a1-9565-c98901df63e5',
      resources : [
        'https://graph.microsoft.com',
        'https://outlook.office365.com',
        // ... more resources
      ]
    }
  }

  render() {

  new ReactNativeAD({
    client_id: CLIENT_ID,
    resources: [
      'https://outlook.office365.com'
    ]})
  
    return <ADLoginView
              context={ReactNativeAD.getContext(CLIENT_ID)}
              onSuccess={this.onLoginSuccess.bind(this)}/>
            //   onSuccess={() => Actions.home()} />
  }

  onLoginSuccess(credentials) {
      Actions.home()
    console.log(credentials['https://outlook.office365.com'].access_token)
    // use the access token ..
  }

}



