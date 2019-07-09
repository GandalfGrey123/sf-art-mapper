import axios from "axios";
import places_api_key from "../util/places_config"

export const getListings = (searchParams = {}) => {
  let apiUri = "/maps/api/place/autocomplete/json?";
  let buildSearch = searchParams.replace(/ /g,"+");

  axios({
    method: 'get',
    url: `https://maps.googleapis.com${apiUri}input=${buildSearch}&key=${places_api_key}`,
    params: params,
    // headers: headers
  }).then((res) => {
    handleResponse(res.data);
  });
};