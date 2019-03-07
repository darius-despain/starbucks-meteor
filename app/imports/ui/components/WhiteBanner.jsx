import React from 'react';
import { Image } from 'semantic-ui-react';

export default class WhiteBanner extends React.Component {

  render() {
    return (
        <div className="white-banner">
          <div className="ui two column middle aligned grid container">
            <div className="column">
              <Image className="left floated image"
                     src="https://globalassets.starbucks.com/assets/7579480cc195459883bdc1102bb2d4c1.jpg"/>
            </div>
            <div className="column">
              <h2>
                ENJOY MORE REWARDS
              </h2>
              <h4>
                Earn Stars in and out of Starbucks® stores with the Starbucks Rewards™ Visa® Card and the Starbucks
                Rewards™ Visa® Prepaid Card.
              </h4>
            </div>
          </div>
        </div>
    );
  }
}
