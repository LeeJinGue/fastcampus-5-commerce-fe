import React, { useState } from 'react';
import { Box, BoxProps, Button, Flex, Image, Stack, Text, useRadioGroup } from '@chakra-ui/react';
import { LAYOUT } from '@constants/layout';
import DistributionProcess from './_fragment/DistributionProcess';
import ElipseIcon from '@components/common/New/@Icons/Elipse';
import Badge from '@components/common/New/Badge';
import LogoSpacingIcon from '@components/common/New/@Icons/LogoSpacingIcon';
import ListNumberArrowIcon from '@components/common/New/@Icons/System/ListNumberArrow';
import PrimaryButton from '@components/common/New/PrimaryButton';
import FloatingCallButton from '@components/common/New/FloatingActionButtons/Call';
import DefaultInstgramIcon from '@components/common/@Icons/Social/Default/Instagram';
import FloatingDefaultButton from '@components/common/New/FloatingActionButtons/Default';
import UploadIcon from '@components/common/New/@Icons/System/Button/Upload';
import { BADGE_NAME_LIST, INSTGRAM_URL } from '@constants/string';
import SlideCard from '@components/common/Card/Slide';
import { useGetUserMeQuery } from '@apis/user/UserApi.query';
import { getToken } from '@utils/localStorage/token';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { ROUTES } from '@constants/routes';
import { useGetReviewListQuery } from '@apis/review/ReviewApi.query';
import BadgeRadio from './_fragment/BadgeRadio';
import LoadingPage from '@components/common/New/LoadingPage';
import { ReviewDTOType } from '@apis/review/ReviewApi.type';
import CardSlider from '@components/common/CardSlider';
import BadgeSlider from '@components/common/BadgeSlider';
import { CONFIG } from '@config';
import { useGetReviewListByTagQuery, useGetTagListQuery } from '@apis/product/ProductApi.query';
import { TagDTOTType, TagReviewDTOTType, TagReviewResultsType } from '@apis/product/ProductApi.type';
import BadgeReviewSliderData from './_fragment/BadgeReviewSlider';


interface HomePageViewProps extends BoxProps {
}
const moveToTop = () => (document.documentElement.scrollTop = 0);

const HomePageContent = ({ }) => {
  const route = useRouter()
  const dispatch = useDispatch()
  const token = getToken()

  if (token) {
    const accessToken = token.access
    const {data} = useGetUserMeQuery({
      variables: {
        accessToken,
      }, options: {
        staleTime: Infinity,
      }
    })
  }

  return <HomePageView 
  />
}

const HomePageView = ({ ...basisProps }: HomePageViewProps) => {
  const route = useRouter()
  const handleProductAll = () => route.push({ pathname: ROUTES.PRODUCTS })
  const handleEventDetail = () => route.push({ pathname: ROUTES.EVENTINFO })
  const handleInquiry = () => route.push({ pathname: ROUTES.INQUIRY })
  const handleInstagram = () => window.open(INSTGRAM_URL)


  return (
    <Flex flexDir="column" bgColor="white">
      <Box pt={LAYOUT.HEADER.HEIGHT} display="flex" flexDirection="column"
        h="782px"
        mb="0"
        w={"375px"}
        px="16px"
        backgroundImage="/images/main1.png" {...basisProps}>
        <Text mt="80px" textStyle="extraLargeBold">{"지속 가능한 클린"}<br />{"클린&비건뷰티, 인코스런"}</Text>
        <Text mt="20px" textStyle="textLarge">{"자연과 사람에게"}<br />{"책임질 수 있는 지속 가능한"}<br />{"제품을 만듭니다."}</Text>
      </Box>
      <Box h="782px" w="375px" bgColor="pointSub">
        <Box position="absolute" mt="20px" ml="31px" w="244px" h="140px" bgImage={"/images/main_box1.png"} />
        <Box position="absolute" mt="160px" ml="139px" w="236px" h="180px" bgImage={"/images/main_box2.png"} />
        <Box position="absolute" mt="307px" w="175px" h="204px" bgImage={"/images/main_box3.png"} />
        <Box position="absolute" mt="481px" ml="75px" display="flex" flexDir="row" alignItems="flex-end">
          <UploadIcon iconcolor={'Primary'} />
          <Text color="black" textStyle="extraLargeBold">{"불합리한 유통구조"}<br />{"과도한 패키징"}<br />{"과장된 광고"}</Text>
        </Box>
        <Text color="black" textStyle="textLarge" position="absolute" mt="635px" ml="75px">
          {"부풀려지는 가격은 이제 그만!"}<br /><Text color={"primary.500"} as="span">{"인코스런"}</Text>{"은 가격거품을 제거한"}<br />{"착한소비를 위해 태어났습니다."}
        </Text>
      </Box>
      <Box h="430px" w="375px" bgImage="/images/main3.png">
        <Text textStyle="extraLargeBold" ml="106px" mt="180px">{"이제 합리적으로"}<br />{"지갑을 지키세요!"}</Text>
      </Box>
      <Text mt="80px" color="primary.500" textStyle="extraLargeBold" textAlign="center">{"부풀려지는 가격 이제 그만!"}</Text>
      <Text textAlign="center" mt="20px" color="black" textStyle="textLarge">
        {"불합리한 "}<Text fontWeight="700" as="span">{"중간 유통 거품을 제거"}</Text>{"한"}<br />
        {"인코스런만의 투명한 유통혁신"}
      </Text>
      <Box h="828px" mt="60px" w="375px" bg="white" >
        <DistributionProcess iconType="Box" checkIconShow={true} title="STEP 1" contents={<>{"제조공장의"}<br />{"제조 및 개발비용"}</>} />
        <VerticalLine />
        <DistributionProcess iconType='Delivery' checkIconShow={false} title="STEP 2" contents={<>{"물류 및 운송비용"}</>} />
        <VerticalLine />
        <DistributionProcess iconType='Payment' checkIconShow={false} title="STEP 3" contents={<>{"결제 수수료"}</>} />
        <VerticalLine />
        <DistributionProcess iconType="Assign" checkIconShow={true} title="STEP 4" contents={<>{"소비자 가격"}</>} />
        <ElipseIcon mt="23px" />
        <Text mt="20px" textAlign="center" textStyle="title" color="primary.500">{"SAVE MONEY"}</Text>
      </Box>
      <Text textAlign="center" textStyle="text" color="black" mt="30px">
        <Text as="span" textStyle="title" color="primary.500">
          {"*온라인 직접판매"}<br />
        </Text>
        {"인코스런은 온라인으로만 직접 판매하여,"}<br />
        {"더 낮은 가격을 만들어냅니다."}
      </Text>
      <Box w="100%" h="762px"   // 이렇게 비교하세요!
      >

        <Text textAlign="center" mt="80px" color="black" textStyle="extraLarge">
          {"이렇게 "}
          <Text as="span" textStyle="extraLargeBold">{"비교하세요!"}</Text>
        </Text>
        <Text textAlign="center" textStyle="textLarge" mt="20px">
          {"인코스런은 부담스러운"}<br />
          {"영유아 화장품의"}
          <Text textDecoration="underline" textDecorationColor="primary.500" textDecorationThickness="10px" textStyle="titleLarge" as="span">
            {"가격거품을 제거해"}<br />
            {"투명한 가격"}
          </Text>
          {"을 만들어 갑니다."}
        </Text>
        <Box mt="70px" display="flex" flexDir="row" justifyContent="space-around" // 가격비교
        >
          <Box // 시중 주요 브랜드
          >
            <Box w="150px" h="360px" bg="gray.400" // 시중 주요 브랜드 가격
              display="flex" justifyContent="center"
            >
              <Badge w="fit-content" mode="off" mt="20px" textColor="white" bgColor="gray.700" children="2~30,000원" />
            </Box>
            <Text mt="10px" textAlign="center" textStyle="textLarge" color="gray.700">{"시중 주요 브랜드"}</Text>
          </Box>
          <Box alignSelf="end" // 인코스런
          >
            <Box w="150px" h="120px" bg="secondary.100" // 인코스런 가격
              display="flex" flexDir="column" alignItems="center"
            >
              <Badge w="fit-content" mode="on" mt="20px" children="9,900원" />
              <LogoSpacingIcon logoColor='#FF710B' mt="20px" />
            </Box>
            <Text mt="10px" textAlign="center" textStyle="titleLarge" color="primary.500">{"인코스런"}</Text>
          </Box>
        </Box>
      </Box>
      <Box // 가입 이벤트 박스
        bgImage={"/images/main_event_bg.png"}
        w="375px" h="450px" pl="16px"
      >
        <Text mt="100px" textStyle="extraLarge" textColor="black">
          <Text as="span" textStyle="extraLargeBold" textColor="primary.500">{"인코스런"}</Text>
          {"가입하고"}<br />
          <Text as="span" textStyle="extraLargeBold">{"전상품 1000원 혜택"}<br /></Text>
          {"받아보세요"}
        </Text>
        <Flex mt="20px" flexDir="row" alignItems="center" >
          <Text textStyle="text" textColor="black">{"이벤트 상세보기"}</Text>
          <ListNumberArrowIcon direction='Right' _hover={{ cursor: "pointer" }} onClick={handleEventDetail} colortype='Default' />
        </Flex>
      </Box>
      <Flex // 소중한 우리 아이를 위해... 배경 박스
        w="375px" h="1354px"
        bgImage="/images/main_bg5.png"
        px="16px" py="20px"
      >
        <Flex // 내용 박스
          flexDir="column"
          bgColor="white"
          alignItems="center"
          w="100%"
        >
          <Text mt="71px" textColor="black" textStyle="extraLargeBold">{"소중한 우리 아이를 위해"}</Text>
          <Text mt="20px" textColor="black" textStyle="text" textAlign="center">
            {"순수 자연유래 / 자연유래 유화제 / 자연유래"}<br />
            {"계면활성제 99.9% 타가는 EWG 그린등급"}<br />
            {"성분 100% 만을 사용한 건강한 화장품입니다"}
          </Text>
          <PrimaryButton btntype='Solid' btnshape='Round' btnstate='Primary' mt="30px" w="190px" h="50px" children="상품전체보기" onClick={handleProductAll} />
          <Image mt="80px" src="/images/cosmetics_img_with_mask.png" w="151px" h="189px" />
          <Text mt="10px" textStyle="title" textColor="black">{"바스 & 샴푸"}</Text>
          <Image mt="80px" src="/images/cosmetics_img_with_mask.png" w="151px" h="189px" />
          <Text mt="10px" textStyle="title" textColor="black">{"오일"}</Text>
          <Image mt="80px" src="/images/cosmetics_img_with_mask.png" w="151px" h="189px" />
          <Text mt="10px" textStyle="title" textColor="black">{"파우더 로션"}</Text>
        </Flex>
      </Flex>
      <Flex // 솔직한 리뷰 박스
        h="876px"
        w="375px"
        flexDir="column"
        bgColor="white"
        alignItems="center"
        position="relative"
      >
        <FloatingCallButton // 전화 Floating 버튼
          position="absolute" right="16px" bottom="20px" aria-label='call' onClick={handleInquiry} />
        <Text mt="80px" textStyle="extraLarge" textColor="black" textAlign="center">
          {"인코스런을 "}<Text as="span" textStyle="extraLargeBold">{"직접 사용해본"}</Text> <br />
          {"고객님의 솔직한 리뷰"}
        </Text>
        <BadgeReviewSliderData />
      </Flex>
      <Flex // 인코스런에 대해 더 궁금하신가요?
        flexDir="column" alignItems="center"
        bg={"linear-gradient(90deg, #FF710B 0%, #FFAB2E 100%)"}
        w="375px" h="300px"
        position="relative"
      >
        <FloatingDefaultButton // 맨 위로 Floating 버튼
          onClick={moveToTop} backgroundColor="transparent"
          position="absolute" right="16px" bottom="20px" aria-label={'up'} />
        <Text mt="83px" textStyle="titleLarge" textAlign="center" textColor="white" >
          {"인코스런에 대해 더 궁금하신가요?"}
        </Text>
        <Text mt="10px" textStyle="text" textAlign="center" textColor="white" >
          {"인스타그램을 방문하시면 더욱 다양한"}<br />
          {"인코스런의 이야기를 확인하실 수 있어요"}
        </Text>
        <Button iconSpacing="5px" backgroundColor="transparent" _hover={{backgroundColor:"primary.700"}} mt="12px" leftIcon={<DefaultInstgramIcon iconColor='White' />} textColor="white" textStyle="button" onClick={handleInstagram}>{"INCOURSE.RUN"}</Button>
      </Flex>
    </Flex>)
}
const VerticalLine = ({ ...basisProps }) => {
  return <Box ml="152px" as="span" w={0} h="40px" border="2px solid" borderColor="gray.400" />
}



export default HomePageContent;