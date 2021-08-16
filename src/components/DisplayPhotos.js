import React from 'react';

class DisplayPhotos extends React.Component {
  render() {
    return (
      <div>
        {this.props.photos.map((photo) => {
          console.log(photo);
          return (
            <img
              src={`${photo.img_src}`}
              className="photo"
              key={photo.id}
              alt={`Image taken on ${photo.earth_date}`}
            />
          );
        })}
      </div>
    );
  }
}

export default DisplayPhotos;
