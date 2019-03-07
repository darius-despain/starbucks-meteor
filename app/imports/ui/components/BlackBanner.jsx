import React from 'react';
import { Image } from 'semantic-ui-react';

export default class BlackBanner extends React.Component {

  render() {
    return (
        <div className="black-banner">
          <div className="ui two column middle aligned grid container">
            <div className="column">
              <Image className="medium left floated image"
                     src="https://www.starbucks.com/static/images/rewards/msr3_usen_logo.svg"/>
            </div>
            <div className="column">
              <h2>
                Make every sip more rewarding
              </h2>
              <h4>
                Join Starbucks Rewards™ to earn Gold level benefits like free drinks and food, get free refills, pay and
                order with your phone, and more.
              </h4>
            </div>
          </div>
          <div className="ui four column centered grid">
            <button className="ui yellow button">JOIN NOW</button>
            <button className="ui inverted button">SIGN IN</button>
          </div>
        </div>
    );
  }
}
