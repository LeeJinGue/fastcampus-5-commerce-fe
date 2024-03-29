import { ProductSimpleDTOType } from '@apis/product/ProductApi.type';
import { Flex, Text, Image, FlexProps } from '@chakra-ui/react';
import DrawerBuy from '@components/ProductsDetailByIdPage/_fragments/DrawerBuy';
import { productSimpleType } from '@constants/dummy';
import useOpenModalByQueryParams from 'hooks/useOpenModalByQueryParams';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import RatioStarIcon from '../New/@Icons/System/RatioStar';
import PrimaryButton from '../New/PrimaryButton';

interface productProps extends FlexProps {
  productData: ProductSimpleDTOType,
  cart_id: number,
  openCartDrawer: () => void,
}

function Product({ productData, openCartDrawer, cart_id, ...props }: productProps) {
  const { id, name, thumbnail, tag, price, capacity, avgRate, reviewCount } = productData
  const route = useRouter()
  const moveDetailPage = () => {
    route.push({
      pathname: "/products/[id]",
      query: {
        id,
      }
    })
  }
  return (
    <Flex // Card/product
      w="343px" h="528px" flexDir="column"
      bgColor="white"
      boxShadow="0px 0px 10px rgba(26, 26, 26, 0.1)"
      borderRadius="20px"
      _hover={{backgroundColor: "bgHover"}}
      {...props}>
      <Flex // 버튼을 제외한 상품 정보
        flexDir="column"
        onClick={moveDetailPage}
        cursor="pointer">
        <Image // 상품 이미지
          src={thumbnail}
          w="343px" h="250px"
        />
        <Flex // 상품명 & ml수 (부가정보?)
          ml="30px"
          mt="30px">
          <Text textStyle="title" textColor="black">{name}</Text>
          <Text textStyle="text" textColor="gray.700" ml="5px">{capacity + "ml"}</Text>
        </Flex>
        <Text // 가격
          ml="30px"
          mt="10px" textStyle="titleLarge" textColor="primary.500">{price}<Text as="span" textStyle="textLarge" textColor="black">{"원"}</Text></Text>

        <Flex // 별점 & 리뷰 개수
          alignItems="center"
          ml="30px">
          <RatioStarIcon size='16' ratio='full' />
          <Text ml="5px" textStyle="title" textColor="black">{avgRate ? avgRate : "0"}</Text>
          <Text ml="3px" textStyle="text" textColor="gray.700">{`(리뷰 ${reviewCount}개)`}</Text>
        </Flex>
        <Flex // 태그들
          ml="30px" mt="25px">
          {tag && tag.map((tags) => {
            return (
              <Text key={tags.id} ml={tags.id === 0 ? "0px" : "5px"} textStyle="text" textColor="gray.700">{`# ${tags.name}`}</Text>
            )
          })}
        </Flex>
      </Flex>
      <Flex // 버튼들
        mt="20px" justifyContent="space-around">
        <PrimaryButton btntype='Line' btnstate='Primary' btnshape='Round' mt="10px" w="150px" h="50px" onClick={openCartDrawer} variant="outline">{"장바구니"}</PrimaryButton>
        <PrimaryButton btntype='Solid' btnstate='Primary' btnshape='Round' mt="10px" w="150px" h="50px" onClick={openCartDrawer}>{"바로구매"}</PrimaryButton>
      </Flex>
    </Flex>
  )
}

export default Product;
