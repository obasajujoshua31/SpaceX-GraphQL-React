import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class ControlledCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        {this.props.images.map(image => (
          <Carousel.Item>
            <img className="d-block w-100" src={image} alt="First slide" />
            <Carousel.Caption>
              <h3>{this.props.rocket_name}</h3>
              <p>{this.props.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default ControlledCarousel;
