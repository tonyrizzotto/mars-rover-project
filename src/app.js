import React from 'react';
import nasa from '../src/api/nasa';
import Selection from './components/Selection';
import DisplayPhotos from './components/DisplayPhotos';

class App extends React.Component {
  state = {
    rover: 'curiosity',
    camera: '',
    sol: 0,
    photos: [],
  };

  //function that calls the NASA api
  fetchData = () => {
    const api_key = 'ichpcTdnLiR1fb26mpSJimjQ0ZOWwNkD90cYzSX7';
    nasa
      .get(`/${this.state.rover}/photos`, {
        params: {
          sol: this.state.sol,
          //if camera state is empty, don't pass camera param, otherwise set to current value
          ...(this.state.camera !== '' ? { camera: this.state.camera } : {}),
          api_key: api_key,
          page: 1,
        },
      })
      .then((response) => this.setState({ photos: response.data.photos }));
  };

  // update state function to pass to child
  updateRover = (value) => {
    this.setState({
      rover: value,
    });
  };

  updateCamera = (value) => {
    this.setState({
      camera: value,
    });
  };

  updateSol = (value) => {
    this.setState({
      sol: value,
    });
  };

  render() {
    const cameras = ['FHAZ', 'RHAZ', 'NAVCAM'];
    const rovers = ['spirit', 'curiosity', 'opportunity'];

    return (
      <div>
        <div>
          <DisplayPhotos photos={this.state.photos} />
        </div>
        <span>
          <Selection
            selectedCamera={this.state.camera}
            selectedRover={this.state.rover}
            currentSol={this.state.sol}
            rovers={rovers}
            updateRover={this.updateRover}
            updateCamera={this.updateCamera}
            updateSol={this.updateSol}
            cameras={cameras}
          />
        </span>
        <div>
          <h4>Submit Data</h4>
          <button onClick={this.fetchData}>Get Data</button>
        </div>
      </div>
    );
  }
}

export default App;
