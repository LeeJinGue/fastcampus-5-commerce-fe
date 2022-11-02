import React, { useState } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, Divider, Input, IconButton, Textarea } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import DateText from '@components/common/New/DateText';
import PriceCard from '@components/common/Card/PriceCard';
import RatioStarIcon, { ratioType } from '@components/common/New/@Icons/System/RatioStar';
import UploadIcon from '@components/common/New/@Icons/System/Button/Upload';
import XIcon from '@components/common/New/@Icons/System/XIcon';
import PrimaryButton from '@components/common/New/PrimaryButton';
import { useGetOrderByIdQuery, useGetOrderListQuery, useGetOrderStatusQuery } from '@apis/order/OrderApi.query';
import { useGetUserMeQuery } from '@apis/user/UserApi.query';
import { getToken } from '@utils/localStorage/token';
import LoadingPage from '@components/common/New/LoadingPage';
import { OrderDTOType, OrderStatusType } from '@apis/order/OrderApi.type';
import { orderItemType } from '@features/orderItem/orderItemSlice';
import { useRouter } from 'next/router';


interface MypageOrderhistoryWritereviewPageDataProps extends ChakraProps {
}
interface MypageOrderhistoryWritereviewPageProps extends MypageOrderhistoryWritereviewPageDataProps {

}
const initRatioList:ratioType[] = ["empty","empty","empty","empty","empty"]
function MypageOrderhistorywritereviewPageData({...basisProps}:MypageOrderhistoryWritereviewPageDataProps ){

  return <MypageOrderhistoryWritereviewPage  />

}
function MypageOrderhistoryWritereviewPage({

  ...basisProps
}: MypageOrderhistoryWritereviewPageProps) {
  const route = useRouter()
  const orderStauts:OrderStatusType = {
    id: typeof route.query.id === "string" ? Number.parseInt(route.query.id) : 0,
    orderId: typeof route.query.orderId === "string" ? route.query.orderId : '',
    productId: typeof route.query.productId === "string" ? Number.parseInt(route.query.productId) : 0,
    count: typeof route.query.count === "string" ? Number.parseInt(route.query.count) : 0,
    shippingStatus: typeof route.query.shippingStatus === "string" ? route.query.shippingStatus : '',
    created: typeof route.query.created === "string" ? route.query.created : ''
  }
  const {productId, count, shippingStatus, created} = orderStauts
  const [review, setReview] = useState("")
  const [reviewPhotos, setReviewPhotos] = useState(["/images/review_img1.png","/images/review_img2.png"])
  const [ratioList, setRatioList] = useState(initRatioList)
  const handleEnterKey = (key:string) => {
      if(key === "Enter"){
        console.log("엔터눌렀음")
        setReview(prev => prev+"\n")
      } 
  }
  const handleRatioOnclick = (index:number) => {
    setRatioList((prev) => {
    return prev.map((_, prevIndex) => {
      if(prevIndex <= index) return 'full'
      return 'empty'
    }) 
    })
  }
  return (
    <Flex pt={LAYOUT.HEADER.HEIGHT} pb="30px" w="375px" 
    flexDir="column" bgColor="white" {...basisProps}>
      <Text px="16px" mt="50px" textStyle="titleLarge" textColor="black">리뷰작성</Text>
      <DateText px="16px" mt="80px" date={created} />
      <PriceCard px="16px" ispaymentcomplete={false} 
      productid={productId} count={count} status={shippingStatus} />
      <Box my="20px" h="20px" bgColor="gray.100"/>
      <Text px="16px" textStyle="text">별점</Text>
      <Flex h="80px" mt="20px" justifyContent="center" alignItems="center">
        {ratioList.map((value, index)=>{
          return <RatioStarIcon _hover={{cursor:"pointer"}} onClick={()=>{
            handleRatioOnclick(index)
          }} ratio={value} size="36"/>
        })}
      </Flex>
      <Divider mt="20px"/>
      <Text px="16px" mt="20px" textStyle="text" textColor="black" >
        내용
      </Text>
      <Flex mt="20px" px="16px">
        <Textarea resize="none" border="0"
        boxSizing='border-box' h="174px" placeholder='내용을 작성하세요.'
        value={review} onChange={(e) => setReview(e.target.value)} />
      </Flex>
      <Divider mt="20px"/>
      <Text px="16px" mt="20px" textStyle="text" textColor="black">{`사진첨부 (0/3)`}</Text>
      <Flex   // 리뷰사진들
      px="16px" mt="30px" >
        <IconButton 
        border="1px dashed" borderColor="gray.400" borderRadius="5px"
        w="80px" h="80px" mr="20px" aria-label='AddReviewPhoto' icon={<UploadIcon iconcolor='Gray'/>}/>
        {reviewPhotos.map((value) => {
          return (<Flex>
            <Image w="80px" h="80px" borderRadius="5px" src={value} />
            <XIcon position="relative" left="-10px" top="-10px" xsize='Circle' xcolor='White' fillcolor='Gray3'/>
          </Flex>)
        })}
      </Flex>
      <PrimaryButton mt="100px" w="343px" h="50px" 
      mx="16px"btntype='Solid' btnstate='Primary' btnshape='Round'>작성하기</PrimaryButton>
    </Flex>
  );
}

export default MypageOrderhistoryWritereviewPage;
