import { usePatchCartItemByCartItemIdMutation } from '@apis/cart/CartApi.mutation';
import { CartItemType } from '@apis/cart/CartApi.type';
import { useGetProductByIdQuery } from '@apis/product/ProductApi.query';
import { ProductDetailDTOTType } from '@apis/product/ProductApi.type';
import { Flex, FlexProps, Text, Image, Checkbox } from '@chakra-ui/react';
import { orderItemSliceActions, orderItemType } from '@features/orderItem/orderItemSlice';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import CheckboxIcon from '../New/@Icons/System/CheckboxIcon';
import XIcon from '../New/@Icons/System/XIcon';
import CommerceCount from './CommerceCount';
interface CommerceProps extends FlexProps {
  settotaldeliverycost: React.Dispatch<React.SetStateAction<number>>,
  settotalcost: React.Dispatch<React.SetStateAction<number>>,
  itemdata: CartItemType,
  cartindex: number,
  handledeleteitem: (id: number, index: number) => void
  ischeck: boolean
  changeByIndex: (index: number, value:boolean) => void
}
interface CommerceViewProps extends CommerceProps{
  productdata:ProductDetailDTOTType,
}

function Commerce({ itemdata,...props }: CommerceProps) {
  const { isError, isLoading, data } = useGetProductByIdQuery({ variables: itemdata.productId })
  if (isLoading || data===undefined) return <Text>상품정보 로딩중</Text>
  if (isError) return <Text>에러발생</Text>
  return <CommerceView productdata={data} itemdata={itemdata} {...props}/>
}
function CommerceView({...props}:CommerceViewProps){
  const dispatch = useDispatch()
  const { changeByIndex,ischeck, itemdata, settotalcost, settotaldeliverycost, cartindex, handledeleteitem, productdata, ...restProps } = props
  const { price, photo, name, capacity } = productdata
  const [count, setCount] = React.useState(itemdata.count)
  
  const delivery = count * price < 30000 ? 2500 : 0
  const total = count * price + delivery
  const { mutateAsync: patchCartItemCount } = usePatchCartItemByCartItemIdMutation()
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeByIndex(cartindex, e.target.checked)
  }
  useEffect(() => {
    if (price === undefined) return
    if(!ischeck){
      dispatch(orderItemSliceActions.
        delOrderItem(itemdata.id))
      return
    }
    const orderItem:orderItemType = {
      name, capacity, count, price, 
      productId:itemdata.productId,
      cartItemId:itemdata.id
    }
    dispatch(orderItemSliceActions
      .addOrderItem({cartItemId: itemdata.id, orderItem}))


    const tot = count * price
    const del = tot < 30000 ? 2500 : 0

    patchCartItemCount({ cartItemId: itemdata.id, count })
    settotalcost(prev => {
      return prev + (tot)
    })
    settotaldeliverycost(prev => prev + del)
    return () => {
      settotalcost(prev => prev - (tot))
      settotaldeliverycost(prev => prev - del)
    }
  }, [count, ischeck
  ])
  return (
    <>
    <Flex   // Card/Commerce
        px="16px" py="20px" bgColor="white" {...restProps}
      >
        <Checkbox
          alignItems="start" 
          h="fit-content"
          onChange={handleCheck} isChecked={ischeck}
          icon={<CheckboxIcon state={ischeck ? "Select" : "Default"} shape="Rectangle" />}>
        </Checkbox>
        <Flex   // 상품 정보 전체
          ml="10px" flexDir="column" w="full"
        >
          <Flex // 상품 정보
            alignSelf="stretch"
            justifyContent="space-between"
          >

            <Flex // 상품 설명
            >
              <Image // 상품 이미지
                src={photo} w="90px" h="90px" />
              <Flex // 상품 텍스트
                flexDir="column" ml="10px"
              >
                <Text textStyle="title" textColor="black">{name}</Text>
                <Text textStyle="text" textColor="gray.600">{`${name} | ${capacity}ml`}</Text>
                <Text textStyle="title" textColor="primary.500">{`${price}원`}</Text>
              </Flex>
            </Flex>
            <XIcon onClick={() => handledeleteitem(itemdata.id, cartindex)} xsize={20} xcolor={'Black'} />
          </Flex>
          {<CommerceCount mt="15px" count={count} setcount={setCount} name={name} price={price} />}
          <Flex   // 배송비
            mt="15px" justifyContent="space-between"
          >
            <Text textColor="black" textStyle="text">{`배송비 ${delivery === 0 ? "무료" : delivery+"원"}`}</Text>
            <Text textColor="black" textStyle="titleLarge">{total}{"원"}</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
export default Commerce;