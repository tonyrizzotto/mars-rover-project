import React from 'react';
import './DisplayPhotos.css';

class DisplayPhotos extends React.Component {
  state = {
    activeIndex: 0,
  };

  // showPhotos = () => {
  //   if (this.props.photos === undefined) {
  //     console.log(this.props.photos);
  //     return;
  //   } else {
  //     let currentPhoto = this.props.photos[this.state.activeIndex];
  //     console.log(currentPhoto);
  //   }
  // };

  render() {
    return (
      <div>
        {this.props.photos.map((photo, index) => {
          if (index === this.state.activeIndex) {
            return (
              <img
                src={`${photo.img_src}`}
                className={`photo
                    ${index === this.state.activeIndex ? 'active' : 'inactive'}
                  `}
                key={photo.id}
                alt={`taken on ${photo.earth_date}`}
              />
            );
          }
        })}
        <button
          onClick={() => {
            if (this.state.activeIndex === 0) {
              this.setState({
                activeIndex: this.props.photos.length - 1,
              });
            } else {
              this.setState({ activeIndex: this.state.activeIndex - 1 });
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (this.state.activeIndex === this.props.photos.length - 1) {
              this.setState({
                activeIndex: 0,
              });
            } else {
              this.setState({ activeIndex: this.state.activeIndex + 1 });
            }
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default DisplayPhotos;
