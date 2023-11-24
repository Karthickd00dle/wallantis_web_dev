import axios from 'axios';
import { BestsellerApi } from 'service/apiVariables';

export const getBestSellerProductsApi = () => {
  const { api, method, baseURL } = BestsellerApi.getBestSeller;

  return axios({
    method,
    url: api,
    baseURL: baseURL === "base" ? process.env.REACT_APP_API_BASE_URL : "",
  });
};
