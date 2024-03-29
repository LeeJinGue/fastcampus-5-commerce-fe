import { CartDTOType, CartItemType } from '@apis/cart/CartApi.type';
import { useGetProductByIdQuery } from '@apis/product/ProductApi.query';
import { ProductDetailDTOTType } from '@apis/product/ProductApi.type';
import { Flex, FlexProps, Text, Image } from '@chakra-ui/react';
import { status_to_shipping_status } from '@constants/string';
import { orderItemType } from '@features/orderItem/orderItemSlice';
import React from 'react'
interface PriceViewCardProps extends FlexProps{
  isshippingfeevisible: boolean,
  productdata: ProductDetailDTOTType,
  count: number,
  status: string,
}
interface PirceDataProps extends FlexProps{
  productid: number,
  count: number,
  isshippingfeevisible: boolean,
  status: string,
}
function PriceCardData({isshippingfeevisible ,...props}: PirceDataProps){
  const { productid } = props
  const {data, isError, isLoading} = useGetProductByIdQuery({variables: productid})
  if(isLoading || data===undefined) return <Text>로딩중</Text>
  if(isError) return <Text>상품 정보 갖고오기 에러발생!</Text>
  return <PriceCardView productdata={data} isshippingfeevisible={isshippingfeevisible} {...props}/>
}
function PriceCardView({isshippingfeevisible,...props}: PriceViewCardProps) {
  const {name, capacity, price, photo } = props.productdata
  const {count, status } = props
  const shippingFee = price*count < 30000 ? 2500 : 0
  return (
    <Flex // Card/price card
      borderY="1px solid" borderColor="gray.200"
      alignItems="center" justifyContent="space-between" {...props}
      >
        <Flex alignItems="center">
          <Image my="10px" src={photo} w="60px" h="60px" />
          <Flex
          flexDir="column" alignItems="start" ml="10px" >
            <Text textStyle="titleSmall" textColor="black">{name}</Text>
            <Text textStyle="textSmall" textColor="gray.700">{`${name} | ${capacity}ml`}</Text>
            <Text textStyle="titleSmall" textColor="primary.500">{`${price}원 / ${count}개`}</Text>
          </Flex>
        </Flex>
        <Flex 
        flexDir="column" alignItems="end" visibility={isshippingfeevisible ? "visible" : "hidden"} 
        >
          <Text textStyle="titleSmall" textColor="primary.500">{status_to_shipping_status(status)}</Text>
          <Text textStyle="textSmall" textColor="black">{`배송비 ${shippingFee === 0 ? "무료" : shippingFee+"원"}`}</Text>
        </Flex>
      </Flex>
  )
}
export default PriceCardData;