import React from 'react';
import { Image } from 'semantic-ui-react';

export default class GreenBanner extends React.Component {

  render() {
    return (
        <div className="green-banner">
          <div className="ui two column middle aligned grid container">
            <div className="column">
              <Image className="left floated image"
                     src="https://globalassets.starbucks.com/assets/b2b894770cf84382aacc37ec9c99b37e.jpg"/>
            </div>
            <div className="column">

              <h2>
                HEARTY WINTER TO YOU
              </h2>
              <h4>
                Warm and satisfying, our new Ham & Swiss Panini is high protein and delicious.
              </h4>
            </div>
          </div>
        </div>
    );
  }
}
