import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Helmet from "react-helmet";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <RaisedButton label="Default" />
          </MuiThemeProvider>
        <Helmet
                htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
                title="test"
                titleTemplate="test - %s"
                defaultTitle="My Default Title"
                titleAttributes={{itemprop: "name", lang: "en"}}
                base={{target: "_blank", href: "http://mysite.com/"}}
                meta={[
                    {name: "description", content: "Helmet application"},
                    {property: "og:type", content: "article"}
                ]}
                link={[
                    {rel: "canonical", href: "http://mysite.com/example"},
                    {rel: "apple-touch-icon", href: "http://mysite.com/img/apple-touch-icon-57x57.png"},
                    {rel: "apple-touch-icon", sizes: "72x72", href: "http://mysite.com/img/apple-touch-icon-72x72.png"}
                ]}
                
                onChangeClientState={(newState) => console.log(newState)}
            />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my React</h2>
        </div>
        
      </div>
    );
  }
}

export default App;
