import React from 'react';

class Selection extends React.Component {
  render() {
    return (
      <div>
        <div id="rover-selection">
          <h3>Selected Rover: {this.props.selectedRover}</h3>
          {this.props.rovers.map((rover) => {
            return (
              <button
                key={rover}
                onClick={() => {
                  this.props.updateRover(rover);
                }}
              >
                {rover}
              </button>
            );
          })}
        </div>
        <div className="sol-selection">
          <h4>Martian Sol: {this.props.currentSol}</h4>

          <input
            type="number"
            min="0"
            max="1000"
            placeholder="enter 0 to 1000"
            onChange={(e) => {
              this.props.updateSol(e.target.value);
            }}
          />
        </div>
        <div className="camera-selection">
          <h4>Selected Camera: {this.props.selectedCamera}</h4>
          {this.props.cameras.map((camera) => {
            return (
              <button
                key={camera}
                onClick={() => {
                  this.props.updateCamera(camera);
                }}
              >
                {camera}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Selection;
