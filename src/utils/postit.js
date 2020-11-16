import 'whatwg-fetch';

const Postit = {};
const baseUrl = 'http://localhost:3000/api';


Postit.getPosts = () => {
  let url = `${baseUrl}/posts`;
  return fetch(url).then(response => {
    if(!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      const posts = jsonResponse.posts;
      return posts;
    });
  });
};
/*
GoldMedalMetrics.getGoldMedals = (country, sortBy, isAscending)  => {
  const newCountryName = GoldMedalMetrics.fixName(country);
  let url = `${baseUrl}/country/${newCountryName}/medals`;
  if (typeof sortBy !== 'undefined' && typeof isAscending !== 'undefined') {
    const descendingString = isAscending ? 'y' : 'n';
    url = `${baseUrl}/country/${newCountryName}/medals?sort_by=${sortBy}&ascending=${descendingString}`;
  }

  return fetch(url).then(response => {
    if(!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      const medals = jsonResponse.medals;
      return medals;
    });
  });
};

GoldMedalMetrics.getSports = (country, sortBy, isAscending) => {
  const newCountryName = GoldMedalMetrics.fixName(country);
  let url = `${baseUrl}/country/${newCountryName}/sports`;

  if (typeof sortBy !== 'undefined' && typeof isAscending !== 'undefined') {
    const ascendingString = isAscending ? 'y' : 'n';
    url = `${baseUrl}/country/${newCountryName}/sports?sort_by=${sortBy}&ascending=${ascendingString}`;
  }

  return fetch(url).then(response => {
    if(!response.ok) {
      return new Promise(resolve => resolve(null));
    }
    return response.json().then(jsonResponse => {
      const sports = jsonResponse.sports;
      return sports;
    });
  });
};
*/
export default Postit;