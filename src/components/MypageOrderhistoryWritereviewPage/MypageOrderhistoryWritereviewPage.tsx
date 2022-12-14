import React, { useCallback, useState } from 'react';
import { Box, ChakraProps, Button, Flex, Image, Text, Divider, Input, IconButton, Textarea, useToast } from '@chakra-ui/react';
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
import { OrderDTOType, OrderGetByIdReturnType, OrderStatusType } from '@apis/order/OrderApi.type';
import { orderItemType } from '@features/orderItem/orderItemSlice';
import { useRouter } from 'next/router';
import { usePostReviewMutation } from '@apis/review/ReviewApi.mutation';
import { ReviewPostParamType } from '@apis/review/ReviewApi.type';
import { isOverSize } from '@utils/file';
import { useUploadFileToS3Mutation } from '@apis/S3FileUploader/S3FileUploaderApi.mutation';
import { ROUTES } from '@constants/routes';

const FILE_MAX_SIZE_MB = 10;
interface MypageOrderhistoryWritereviewPageDataProps extends ChakraProps {
}
interface MypageOrderhistoryWritereviewPageProps extends MypageOrderhistoryWritereviewPageDataProps {
  orderstatusdata: OrderStatusType,
  orderdata: OrderGetByIdReturnType 
}
const initRatioList: ratioType[] = ["empty", "empty", "empty", "empty", "empty"]
function MypageOrderhistorywritereviewPageData({ ...basisProps }: MypageOrderhistoryWritereviewPageDataProps) {
  const route = useRouter()
  const orderstatusdata: OrderStatusType = {
    id: typeof route.query.id === "string" ? Number.parseInt(route.query.id) : 0,
    orderId: typeof route.query.orderId === "string" ? route.query.orderId : '',
    productId: typeof route.query.productId === "string" ? Number.parseInt(route.query.productId) : 0,
    count: typeof route.query.count === "string" ? Number.parseInt(route.query.count) : 0,
    created: typeof route.query.created === "string" ? route.query.created : ''
  }
  const { data: orderdata, isError, isLoading } = useGetOrderByIdQuery({ variables: { uuid: orderstatusdata.orderId } })
  if (isLoading) return <Text>?????? ????????? ?????????</Text>
  if (isError) return <Text>?????? ????????? ??????</Text>
  if (orderdata === undefined) return <Text>?????? ???????????? ????????????.</Text>
  return <MypageOrderhistoryWritereviewPage orderstatusdata={orderstatusdata} orderdata={orderdata} {...basisProps} />

}
function MypageOrderhistoryWritereviewPage({

  ...basisProps
}: MypageOrderhistoryWritereviewPageProps) {
  const toast = useToast()
  const route = useRouter()
  const { orderstatusdata, orderdata } = basisProps
  const { mutateAsync: postReviewMutate } = usePostReviewMutation()
  const { productId, count, created } = orderstatusdata
  const { shippingStatus } = orderdata
  const [content, setContent] = useState("")
  const [reviewimagePath, setReviewimageSet] = useState<string[]>([])
  const [ratioList, setRatioList] = useState(initRatioList)
  const [rate, setRate] = useState(0)
  const {mutateAsync:uploadFileMutate} = useUploadFileToS3Mutation()
  const handelWriteReviewButton = () => {
    postReviewMutate({
      userId: 0,
      productId: orderstatusdata.productId,
      rate,
      content,
      orderItemId: 1,
      reviewimagePath: reviewimagePath,
    }).then(res => {
      console.log("?????? ?????? ??????, ?????? ??????:",res)
      route.replace({pathname: ROUTES.MYPAGE.ORDER_HISTORY})
    }).catch(err => {
      console.log("?????? ?????? ??????:",err)
    })
  }


  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (isOverSize(file, { maxSize: FILE_MAX_SIZE_MB })) {
      toast({
        status: 'info',
        description:
          '????????? ????????? ???????????????. ??????????????? onSubmit ????????? ?????? onChange ????????? ?????? ????????????. ????????? onSubmit ?????? ????????? ??????~',
      });
      return;
    }
    uploadFileMutate({file}).then(res => {
      console.log("#url: ",res.url)
      setReviewimageSet(prev => prev.concat(res.url))
    })
  };
  const handleRatioOnclick = useCallback((index: number) => {
    setRatioList((prev) => {
      return prev.map((_, prevIndex) => {
        if (prevIndex <= index) return 'full'
        return 'empty'
      })
    })
    setRate(index+1) 
  }, [])
  const handleDeleteReviewImage = (index:number) => {
    setReviewimageSet(prev => prev.filter((_, prevIndex) => prevIndex !== index))
  }
  return (
    <Flex pt={LAYOUT.HEADER.HEIGHT} pb="30px" w="375px"
      flexDir="column" bgColor="white" {...basisProps}>
      <Text px="16px" mt="50px" textStyle="titleLarge" textColor="black">????????????</Text>
      <DateText px="16px" mt="80px" date={created} />
      <PriceCard px="16px" ispaymentcomplete={false}
        productid={productId} count={count} status={shippingStatus} />
      <Box my="20px" h="20px" bgColor="gray.100" />
      <Text px="16px" textStyle="text">??????</Text>
      <Flex h="80px" mt="20px" justifyContent="center" alignItems="center">
        {ratioList.map((value, index) => {
          return <RatioStarIcon _hover={{ cursor: "pointer" }} onClick={() => {
            handleRatioOnclick(index)
          }} ratio={value} size="36" />
        })}
      </Flex>
      <Divider mt="20px" />
      <Text px="16px" mt="20px" textStyle="text" textColor="black" >
        ??????
      </Text>
      <Flex mt="20px" px="16px">
        <Textarea resize="none" border="0"
          boxSizing='border-box' h="174px" placeholder='????????? ???????????????.'
          value={content} onChange={(e) => setContent(e.target.value)} />
      </Flex>
      <Divider mt="20px" />
      <Text px="16px" mt="20px" textStyle="text" textColor="black">{`???????????? (0/3)`}</Text>
      <Flex   // ???????????????
        px="16px" mt="30px" >
        <Button as="label" cursor="pointer"
          border="1px dashed" borderColor="gray.400" borderRadius="5px"
          w="80px" h="80px" mr="20px" aria-label='AddReviewPhoto'  >
            <UploadIcon iconcolor='Gray' />
            <input
            style={{ display: 'none' }}
            type="file"
            onChange={onChangeFile}
          />
          </Button>
        {reviewimagePath.map((value, index) => {
          return (<Flex>
            <Image w="80px" h="80px" borderRadius="5px" src={value} />
            <XIcon position="relative" left="-10px" top="-10px" xsize='Circle' xcolor='White' fillcolor='Gray3' 
            onClick={() => handleDeleteReviewImage(index)}/>
          </Flex>)
        })}
      </Flex>
      <PrimaryButton mt="100px" w="343px" h="50px"
        mx="16px" btntype='Solid' btnstate='Primary' btnshape='Round' onClick={handelWriteReviewButton}>????????????</PrimaryButton>
    </Flex>
  );
}

export default MypageOrderhistorywritereviewPageData;
