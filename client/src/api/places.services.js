import axios from "axios";
import {places_api_key} from "../util/places_config"

const buildSearchQuery = (searchParams) =>{
  let buildSearch = searchParams.replace(/ /g,"+");
  if (buildSearch.charAt(buildSearch.length-1) ==='+') buildSearch = buildSearch.slice(0,-1) ;
 return buildSearch;
}


export const placesAutoQuery = (searchParams, handleResponse = {}) => {

  let apiUri = "/maps/api/place/autocomplete/json?";
  let buildSearch = buildSearchQuery(searchParams);

  axios({
    method: 'get',
    url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com${apiUri}input=${buildSearch}&key=${places_api_key}`,   
  }).then((res) => {
    console.log(res.data.predictions);
  });
};