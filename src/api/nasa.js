import axios from 'axios';

//api key: ichpcTdnLiR1fb26mpSJimjQ0ZOWwNkD90cYzSX7
export default axios.create({
  //this is the baseURL for Mars Rovers only
  baseURL: `https://api.nasa.gov/mars-photos/api/v1/rovers`,
});
