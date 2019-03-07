import React from 'react';
// import { Container, Menu, Dropdown, Icon, Image, Grid, Item, Divider, Input, Button } from 'semantic-ui-react';

export default class Footer extends React.Component {

  render() {
    return (
        <div className="footer">
          <div className="ui five column grid container">
            <div className="column">
              <h3>ABOUT US</h3>
              <div className="ui list">
                <div className="item">
                  Our Company
                </div>
                <div className="item">
                  Investor Relations
                </div>
                <div className="item">
                  Starbucks Stories
                </div>
                <div className="item">
                  Press Center
                </div>
              </div>
            </div>
            <div className="column">
              <h3>CAREER CENTER</h3>
              <div className="ui list">
                <div className="item">
                  Working at Starbucks
                </div>
                <div className="item">
                  College Plan
                </div>
                <div className="item">
                  Current Partners
                </div>
                <div className="item">
                  Coroporate Careers
                </div>
                <div className="item">
                  Manufacturing and Distribution
                </div>
                <div className="item">
                  Retail Careers
                </div>
                <div className="item">
                  International Careers
                </div>
              </div>
            </div>
            <div className="column">
              <h3>FOR BUSINESS</h3>
              <div className="ui list">
                <div className="item">
                  Office Coffee
                </div>
                <div className="item">
                  Starbucks Coffee International
                </div>
                <div className="item">
                  Foodservice
                </div>
                <div className="item">
                  Starbucks Card Corporate Sales
                </div>
                <div className="item">
                  Landlord Support Center
                </div>
                <div className="item">
                  Suppliers
                </div>
              </div>
            </div>
            <div className="column">
              <h3>ONLINE COMMUNITY</h3>
              <div className="ui list">
                <div className="item">
                  Twitter
                </div>
                <div className="item">
                  Facebook
                </div>
                <div className="item">
                  Instagram
                </div>
                <div className="item">
                  LinkedIn
                </div>
                <div className="item">
                  Pinterest
                </div>
                <div className="item">
                  YouTube
                </div>
                <div className="item">
                  My Starbucks Idea
                </div>
              </div>
            </div>
            <div className="column">
              <h3>QUICK LINKS</h3>
              <div className="ui list">
                <div className="item">
                  My Account
                </div>
                <div className="item">
                  Store Locator
                </div>
                <div className="item">
                  Nutrition Info
                </div>
                <div className="item">
                  Customer Service
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
