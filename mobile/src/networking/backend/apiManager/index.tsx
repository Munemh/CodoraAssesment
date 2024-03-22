import { Api_products } from 'react-native-config';


export const getConfig = () => {
  if (__DEV__) {
    return Api_products;
  }

  return Api_products;
};

