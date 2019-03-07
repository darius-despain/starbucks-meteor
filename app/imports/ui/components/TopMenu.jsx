import React from 'react';
import { Menu, Image, Container } from 'semantic-ui-react';

export default class TopMenu extends React.Component {

  render() {
    return (
        <div>
          <Menu borderless className="ui borderless topmenu menu">
            <Container>
              <Image src="https://www.starbucks.com/static/images/global/logo.svg" />
              <Menu.Item>COFFEE</Menu.Item>
              <Menu.Item>TEA</Menu.Item>
              <Menu.Item>MENU</Menu.Item>
              <Menu.Item>COFFEEHOUSE</Menu.Item>
              <Menu.Item>SOCIAL IMPACT</Menu.Item>
              <Menu.Item>STARBUCKS REWARDS</Menu.Item>
              <Menu.Item>STORIES</Menu.Item>
              <Menu.Item>GIFT CARDS</Menu.Item>
            </Container>
          </Menu>
        </div>
    );
  }
}
