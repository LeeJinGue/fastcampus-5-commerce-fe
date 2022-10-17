import { AxiosInstance } from 'axios';

import instance from '@apis/_axios/instance';

import { CartDeleteByCartItemIdParamType, CartGetByCartItemIdParamType, CartGetByCartItemIdReturnType, CartGetByUserIdParamType, CartGetByUserIdReturnType, CartPatchByCartItemIdParamType, CartPatchByCartItemIdReturnType, CartPostByUserIdParamType, CartPostByUserIdReturnType, CartPostItemByCartIdParamType, CartPostItemByCartIdReturnType } from './CartApi.type';

export class CartApi {
  axios: AxiosInstance = instance;
  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  getCart = async (
    params?: CartGetByUserIdParamType,
  ): Promise<CartGetByUserIdReturnType> => {
    const { data } = await this.axios({
      method: 'GET',
      url: `/v1/cart/?user_id=${params?.user_id}`,
    });
    return data;
  };
  postCart = async (params: CartPostByUserIdParamType): Promise<CartPostByUserIdReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/cart/`,
      data: params,
    });
    return data;
  };

  postCartItem = async (params: CartPostItemByCartIdParamType): Promise<CartPostItemByCartIdReturnType> => {
    const { data } = await this.axios({
      method: 'POST',
      url: `/v1/cart/item/`,
      data:params,
    });
    return data;
  };
  getCartItemByCartItemId = async (params: CartGetByCartItemIdParamType): Promise<CartGetByCartItemIdReturnType> => {
    const { cartItemId } = params
    const { data } = await this.axios({
      method: 'PUT',
      url: `/v1/cart/item/${cartItemId}/`,
    });
    return data;
  };
  patchCartItemByCartItemId = async (params: CartPatchByCartItemIdParamType): Promise<CartPatchByCartItemIdReturnType> => {
    const { cartItemId, ...etc } = params
    const { data } = await this.axios({
      method: 'PATCH',
      url: `/v1/cart/item/${cartItemId}/`,
      data: etc,
    });
    return data;
  };
  deleteCartItemByCartItemId = async (params: CartDeleteByCartItemIdParamType): Promise<undefined> => {
    const {cartItemId} = params
    const { data } = await this.axios({
      method: 'DELETE',
      url: `/v1/cart/item/${cartItemId}/`,
    });
    return data;
  };
}

const cartApi = new CartApi();

export default cartApi;