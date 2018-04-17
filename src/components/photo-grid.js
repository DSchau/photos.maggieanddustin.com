import React, { Component } from 'react';
import Lightbox from 'react-images';

import { Grid } from './grid';
import { Photo } from './photo';
import { toImageMap } from '../util';

export class Photogrid extends Component {
  state = {
    current: 0,
    open: false
  };

  closeLightbox = () => {
    this.setState({
      open: false
    });
  }

  openLightbox = index => {
    return () => {
      this.setState({
        current: typeof index === 'number' ? index : this.state.current,
        open: true,
      })
    };
  };

  goToPrev = () => {
    this.setState({
      current: this.state.current - 1 || 0
    });
  };

  goToNext = () => {
    this.setState({
      current: this.state.current + 1 % this.props.images.length
    });
  };

  render() {
    const { images: imagesProp = [] } = this.props;
    const { current, open } = this.state;
    if (imagesProp.length === 0) {
      return null;
    }

    const images = imagesProp.map(toImageMap);

    return (
      <div>
        <Grid>
          {
            images.map(({ sizes }, index) => (
              <Photo onClick={this.openLightbox(index)} sizes={sizes} key={sizes.src} />
            ))
          }
        </Grid>
        <Lightbox
          backdropClosesModal={true}
          currentImage={current}
          images={images.map(({ Url }) => ({ src: Url }))}
          isOpen={open}
          onClose={this.closeLightbox}
          onClickPrev={this.goToPrev}
          onClickNext={this.goToNext}
        />
      </div>
    );
  }
}
