import React from 'react';
// import { Container, Menu, Dropdown, Icon, Image, Grid, Item, Divider, Input, Button } from 'semantic-ui-react';

export default class MainBanner extends React.Component {

  render() {
    return (
        <div className="main-banner">
          <div className="ui two column middle aligned grid container">
            <div className="column">
              <h1>Love your drink</h1>
              <h4>Choose your espresso, smooth or bold. Discover a drink that&#39s made for you. </h4>
              <button className="ui inverted button">FIND YOUR ESPRESSO</button>
            </div>
          </div>
        </div>
    );
  }
}
