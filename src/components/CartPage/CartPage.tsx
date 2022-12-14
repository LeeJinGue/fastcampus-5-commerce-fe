import React, { useEffect, useState } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, IconButton, Checkbox } from '@chakra-ui/react';
import CheckboxIcon from '@components/common/New/@Icons/System/CheckboxIcon';
import { LAYOUT } from '@constants/layout';
import XIcon from '@components/common/New/@Icons/System/XIcon';
import CartQuantityIcon from '@components/common/New/@Icons/System/CartQuantity';
import Commerce from '@components/common/Card/Commerce';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { productSimpleType } from '@constants/dummy';
import { ProductDetailDTOTType } from '@apis/product/ProductApi.type';
import { RefetchOptions, RefetchQueryFilters, useQueries, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import { useGetCartQuery } from '@apis/cart/CartApi.query';
import LoadingPage from '@components/common/New/LoadingPage';
import { useDeleteCartItemByCartItemIdMutation, usePostCartMutation } from '@apis/cart/CartApi.mutation';
import { useGetProductByIdQuery, useGetProductsByIdListQueries } from '@apis/product/ProductApi.query';
import axios from 'axios';
import useAppStore from '@features/useAppStore';
import { CartDTOType } from '@apis/cart/CartApi.type';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import useCheckList from './_hook/useCheckList';
import { useDispatch, useSelector } from 'react-redux';
import { orderItemSliceActions } from '@features/orderItem/orderItemSlice';

export type cartItem = {
  count: number,
  productData: ProductDetailDTOTType,
}
interface CartPageViewProps extends ChakraProps {
  cartData: CartDTOType,
  refetch: (options?: (RefetchOptions & RefetchQueryFilters)) => Promise<UseQueryResult>
}
interface EmptyCartPageProps extends ChakraProps {
}
function EmptyCartPage({ ...basisProps }: EmptyCartPageProps) {
  const route = useRouter()
  const handleGoProducts = () => route.push({pathname: ROUTES.PRODUCTS})
  return (
    <Flex
      flexDir="column" pt={LAYOUT.HEADER.HEIGHT} w="375px"
      alignItems="center" pb="80px" bgColor="white" {...basisProps}>
      <Text textStyle="title" textColor="black" textAlign="center" mt="100px">
        {"??????????????? ??????????????????."}<br />
        {"????????? ??????????????????!"}
      </Text> 
      <PrimaryButton onClick={handleGoProducts} mt="30px" w="180px" h="50px" btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"??????????????????"}</PrimaryButton>
    </Flex>
  )
}
function CartPageData({...basisProps}){
  const {mutateAsync: postCartMutation} = usePostCartMutation()
  // const { userData } =  useAppStore(state => state.USER)
  // const {id:user_id} = userData
  const {refetch, data:cartData, isError, isLoading} = useGetCartQuery({variables: {user_id:0}, options: {
    notifyOnChangeProps: ["data"],
  }})
  if(isLoading || cartData===undefined) return <LoadingPage />
  if(isError){
    return <Text>???????????? ?????? ???????????? ??????</Text>
  }
  if(cartData && cartData.length === 0){
    // cartData??? ?????????, ??????????????? ?????? ???????????????.
    
    postCartMutation({userId: cartData[0].userId}).then(res => {
      console.log("??? ??????????????? ??????????????????:",res)
      return <EmptyCartPage />
    })
  }
    if(cartData && cartData[0].cartitem && cartData[0].cartitem.length === 0) return <EmptyCartPage />
    return (
    <>
      <CartPageView refetch={refetch} cartData={cartData[0]} {...basisProps}/>
    </>
    )
  
}
function CartPageView({ refetch,cartData,...basisProps }: CartPageViewProps) {
  const dispatch =  useDispatch()
  const orderItemList = useAppStore(state => state.ORDER_ITEM)
  const { mutateAsync: deleteCartItemMutation } = useDeleteCartItemByCartItemIdMutation()
  const [totalCost, setTotalCost] = useState(0)
  const [totalDeliveryCost, setTotalDeliveryCost] = useState(0)
  const {checkList, setCheckList, changeByIndex, setAllCheck, isAllCheck} = useCheckList({length: cartData.cartitem.length, initVal:false})
  const route = useRouter()
  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllCheck(e.target.checked)
  }
  const handleDeleteItem = (id:number, index:number) => {
    deleteCartItemMutation({cartItemId: id}).then((res) => {
      refetch()
    }).catch(err => {
      console.log("# cartItem ?????? ??????:",err)
    })
  }
  const handleDeleteSelectedItem = async() => {
    checkList.forEach((isCheck, index) => {
      if(isCheck) {
        deleteCartItemMutation({cartItemId:cartData.cartitem[index].id})
        return undefined
      }
      return isCheck
    })
    const newCheckArray = checkList.filter((isCheck) => isCheck !== undefined)
    setCheckList(newCheckArray)
    refetch()
  }
  const handlePayment = (total:number) => {
    dispatch(orderItemSliceActions.setTotal({totalDeliveryCost, totalCost}))
    if(totalCost === 0) {
      alert("????????? ???????????? ????????????.")
      return
    }
    route.push({pathname:ROUTES.PAYMENT.MAIN})
  }

    return (
      <Flex   // ???????????? ?????? ?????????
        flexDir="column" pt={LAYOUT.HEADER.HEIGHT} w="375px" bgColor="gray.200" {...basisProps}>
        <Flex // ?????? ???
          w="375px" h="50px" bgColor="white" px="16px" justifyContent="space-between" alignItems="center">
          <Flex justifyContent="center" alignItems="center">
            <Checkbox
            onChange={handleCheckAll} isChecked={isAllCheck}
            icon={<CheckboxIcon state={isAllCheck ? "Select" : "Default"} shape="Rectangle" />}>
              <Text ml="10px" textStyle="text" textColor="gray.600">{"????????????"}</Text>
            </Checkbox>
          </Flex>
          <Button bgColor="white" onClick={handleDeleteSelectedItem}>
            <Text textStyle="text" textColor="gray.400">{"????????????"}</Text>
          </Button>
        </Flex>
        {cartData.cartitem.map((cart, cartIndex) => {
          return <Commerce mt="10px" handledeleteitem={handleDeleteItem} 
          ischeck={checkList[cartIndex]} changeByIndex={changeByIndex}
          
          // setischeck={setCheckList[cartIndex]}
          cartindex={cartIndex} itemdata={cart} key={cart.id} 
          settotalcost={setTotalCost} settotaldeliverycost={setTotalDeliveryCost} />
        })}
        <Flex   // ?????????????????????
          flexDir="column" bgColor="white" px="16px" mt="10px" pb="50px">
          <Flex // ?????? ?????????
            flexDir="column" textColor="gray.600" textStyle="text" my="20px">
            <Flex
              justifyContent="space-between">
              <Text>{"??? ?????? ??????"}</Text>
              <Text>{totalCost}{"???"}</Text>
            </Flex>
            <Flex
              justifyContent="space-between">
              <Text>{"??? ?????????"}</Text>
              <Text>{totalDeliveryCost}{"???"}</Text>
            </Flex>
          </Flex>
          <Box border="1px solid" borderColor="gray.200" w="343px" h="0px"></Box>
          <Flex // ?????? ??????
            justifyContent="space-between" my="20px">
            <Text textStyle="text" textColor="black">{"????????????"}</Text>
            <Text textStyle="title" textColor="primary.500">{totalCost+totalDeliveryCost}{"???"}</Text>
          </Flex>
          <PrimaryButton mb="30px" h="50px" w="343px" onClick={() => handlePayment(totalCost+totalDeliveryCost)} btntype={'Solid'} btnstate={'Primary'} btnshape={'Round'}>{"????????????"}</PrimaryButton>
        </Flex>
      </Flex>
    );
  }


export default CartPageData;
