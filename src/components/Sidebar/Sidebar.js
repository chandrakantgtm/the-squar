import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { countryCodes } from '../../masterdata';

const Div = styled.div`
  img {
    object-fit: cover;
    width: 100%;
  }
`;

export default class Sidebar extends Component {
  state = {
    show: false,
    activeSlide: 1,
    slideIndex: 0,
    updateCount: 0,
  };

  render() {
    return (
      <Fragment>
        <Div>
          <div className="text-left property-calendar-top">
            <h4 title="Aoyama Serviced Apartments, Shibuya">
              Aoyama Serviced Apartments, Shibuya
            </h4>
            <StarRateIcon className="star-rating red" />
            <StarRateIcon className="star-rating red" />
            <StarRateIcon className="star-rating red" />
            <StarRateIcon className="star-rating red" />
            <StarRateIcon className="star-rating red" />
            <p className="selected-item-price">
              {' '}
              <span className="font-weight-bold h4">
                £{this.props.items[this.props.value].price}
              </span>{' '}
              per night onwards
            </p>
            <div className="Wishlist__Div-l81knu-0 flfPYe">
              <FavoriteBorderIcon title="Add to Wishlist" />
            </div>
            <hr />
          </div>
          <div className="EnquiryForm__Div-sc-1b7fy8u-0 kwhIyE">
            <div className="DateRangePicker DateRangePicker_1">
              <div>
                <div className="form-container">
                  <div className="mx-auto my-form">
                    <div className="input-wrap">
                      <select
                        name="apartment_title"
                        id="apartment_title"
                        className="form-control"
                        onChange={(e) => this.props.onChange(e.target.value)}
                        value={this.props.value}
                      >
                        {this.props.items.map((item, id) => (
                          <option key={'option#' + id} value={id}>
                            {`${item.rooms} Bedroom £${item.price}/Night`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://nextinstance-dot-preproduction-ratedapartments.appspot.com/images/trust3.png"
                alt="trust"
                className="trust-mark"
              />
            </div>
          </div>
        </Div>
      </Fragment>
    );
  }
}
