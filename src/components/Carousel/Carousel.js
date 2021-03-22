import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RoomIcon from '@material-ui/icons/Room';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import GroupIcon from '@material-ui/icons/Group';
import Sidebar from '../Sidebar/Sidebar';
import { Container, Grid } from '@material-ui/core';

import httpsWithQuality from '../../utils/httpsWithQuality';

const Div = styled.div`
  img {
    object-fit: cover;
    width: 100%;
  }
`;

class Carousel extends Component {
  state = {
    show: false,
    activeSlide: 0,
    oldSlide: 0,
    slideIndex: 0,
  };

  render() {
    const settings = {
      dots: false,
      lazyLoad: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 1,
      autoplay: false,
      autoplaySpeed: 6000,
      arrows: false,
      padSlides: 20,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      afterChange: (current) => {
        this.setState({ activeSlide: current });
        this.slider.slickGoTo(current);
      },
    };

    console.log(
      'activeSlide:',
      this.state.activeSlide,
      'oldSlide',
      this.state.oldSlide,
      'slideIndex:',
      this.state.slideIndex,
    );

    return (
      <Container maxWidth="lg">
        <br />
        <br />
        <Grid container spacing={4}>
          <Grid item sm={8}>
            <Grid item spacing={4}>
              <Div className="property-carousel">
                <h3>Apartment Type</h3>
                <Slider
                  {...settings}
                  ref={(slider) => (this.slider = slider)}
                  className="relative"
                >
                  {this.props.images.map((item, id) => (
                    <div
                      className="shadow-1"
                      key={'slide#' + id}
                      onClick={() => {
                        this.setState({ slideIndex: id });
                        this.slider.slickGoTo(id);
                      }}
                    >
                      <img
                        src={httpsWithQuality(item.image_url, 450)}
                        alt={item.filename}
                        className="img-responsive"
                      />
                      <Grid item className="space-between">
                        <h5 title="3 Bedroom" className="float-left">
                          {item.rooms} {item.rooms > 1 ? 'Bedrooms' : 'Bedroom'}
                        </h5>
                        <h5 class="">
                          <span className="font-weight-bold h4">
                            {' '}
                            £{item.price}
                          </span>
                          /Night
                        </h5>
                      </Grid>
                      <Grid item>
                        <h4>
                          <HotelIcon />
                          {item.bed}
                          <BathtubIcon />
                          {item.bath}
                        </h4>
                      </Grid>
                      <hr />
                      <h4>
                        <RoomIcon /> {item.address}
                      </h4>
                      <h4>
                        <GroupIcon /> {item.residents}
                      </h4>
                    </div>
                  ))}
                </Slider>
              </Div>
            </Grid>
          </Grid>
          <Grid item sm={4}>
            <Sidebar
              value={this.state.slideIndex}
              onChange={(e) => {
                this.setState({ slideIndex: e });
                this.slider.slickGoTo(e);
              }}
              items={this.props.images}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default Carousel;
