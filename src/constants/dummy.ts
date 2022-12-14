export type PAYMETHODTYPE = "CARD"| "TOSSPAY"| "VIRTUAL_ACCOUNT"| "TRANSFER"| "MOBILE_PHONE"| "CULTURE_GIFT_CERTIFICATE"| "BOOK_GIFT_CERTIFICATE"| "GAME_GIFT_CERTIFICATE"
export type PAYMENTSTATUS = "READY" | "IN_PROGRESS" | "WAITING_FOR_DEPOSIT" | "DONE" | "CANCELED" | "PARTIAL_CANCELED" | "ABORTED" | "EXPIRED"
export type SHIPPINGSTATUS =  "PAID" | "WAIT" | "INPROGRESS" | "DONE" | "CANCELED"
export type orderStatus = {
  "id": number,
  "orderId": string,
  "productId":  number,
  "count": number,
  "shippingStatus": SHIPPINGSTATUS,
  "created": Date,
}
export type orderDetailType = {
  "id": number,
  "price": number,
  "shippingPrice": number,
  "amount": number,
  "paymentKey": string,
  "method": PAYMETHODTYPE,   // 결제수단
  "status": PAYMENTSTATUS,  // 결제상태
  "userName": string,
  "userPhone": string,
  "userAddr": string,
  "shipName": string,
  "shipPhone": string,
  "shipAddr": string,
  "orderMessage": string,
  "created": Date,
}
export type productSimpleType = {
  "id": number,
  "name": string,
  "description": string,
  "price": number,
  "capacity": number,
  "tags": string,
  "avgRate": string,
  "reviewCount": string,
  "created": Date
}
export type productDetialType = {
  "id": number,
  "name": string,
  "description": string,
  "price": number,           
  "capacity": number,        // 용량(ml단위?)
  "detail": string,
  "reviewList": string,
  "avgRate": string,
  "reviewCount": string
}
export type reviewDataType = {
    "id": number,
    "user": number,
    "product": number,
    "rate": number,
    "content": string,
    "reviewimageSet": [
      {
        "reviewId": number,
        "url": string,
      }
    ],
    "created": Date,
}
export const review_list: reviewDataType[] = [
  {
    "id": 0,
    "user": 0,
    "product": 1,
    "rate": 5,
    "content": "순해서 아이피부에도 자극없이 사용할 수 있어요!",
    "reviewimageSet": [
      {
        "reviewId": 0,
        "url": "",
      }
    ],
    "created": new Date("2022-09-28"),
  },
  {
    "id": 1,
    "user": 0,
    "product": 1,
    "rate": 4.3,
    "content": "순해서 아이피부에도 자극없이 사용할 수 있어요!",
    "reviewimageSet": [
      {
        "reviewId": 0,
        "url": "",
      }
    ],
    "created": new Date("2022-09-28"),
  },
  {
    "id": 2,
    "user": 0,
    "product": 1,
    "rate": 3.9,
    "content": "순해서 아이피부에도 자극없이 사용할 수 있어요!",
    "reviewimageSet": [
      {
        "reviewId": 0,
        "url": "",
      }
    ],
    "created": new Date("2022-09-28"),
  },
  {
    "id": 3,
    "user": 0,
    "product": 1,
    "rate": 2,
    "content": "순해서 아이피부에도 자극없이 사용할 수 있어요!",
    "reviewimageSet": [
      {
        "reviewId": 0,
        "url": "",
      }
    ],
    "created": new Date("2022-09-28"),
  },
  {
    "id": 4,
    "user": 0,
    "product": 1,
    "rate": 0,
    "content": "순해서 아이피부에도 자극없이 사용할 수 있어요!",
    "reviewimageSet": [
      {
        "reviewId": 0,
        "url": "",
      }
    ],
    "created": new Date("2022-09-28"),
  },
]
export const product_detail_data: productDetialType[] = [
  {
    "id": 0,
    "name": "인코스런 바스 & 샴푸",
    "description": "",
    "price": 27000,           
    "capacity": 300,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 바스 & 샴푸",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  {
    "id": 1,
    "name": "인코스런 오일",
    "description": "",
    "price": 27000,           
    "capacity": 150,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 오일",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  {
    "id": 2,
    "name": "인코스런 로션",
    "description": "",
    "price": 27000,           
    "capacity": 250,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 로션",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  {
    "id": 3,
    "name": "인코스런 크림",
    "description": "",
    "price": 27000,           
    "capacity": 125,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 크림",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  {
    "id": 4,
    "name": "인코스런 파우더로션",
    "description": "",
    "price": 27000,           
    "capacity": 100,        // 용량(ml단위?)
    "detail": "순하고 마일드한 안심 처방으로 피부가 민감하고 연약한 우리 아이를 위한 고보습 파우더 로션",
    "reviewList": "",
    "avgRate": "4.3",
    "reviewCount": "125",
  },
  
]
export const product_data: productSimpleType[] = [
  {
    id: 0,
    "name": "바스 & 샴푸",
    "description": "",
    "price": 27000,
    "capacity": 300,
    "tags": "올인원,클렌저,마일드,바스앤샴푸",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  {
    id: 1,
    "name": "오일",
    "description": "",
    "price": 27000,
    "capacity": 150,
    "tags": "올인원,클렌저,마일드,오일",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  {
    id: 2,
    "name": "로션",
    "description": "",
    "price": 27000,
    "capacity": 250,
    "tags": "올인원,클렌저,마일드,로션",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  {
    id: 3,
    "name": "크림",
    "description": "",
    "price": 27000,
    "capacity": 125,
    "tags": "올인원,클렌저,마일드,크림",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  {
    id: 4,
    "name": "파우더로션",
    "description": "",
    "price": 27000,
    "capacity": 100,
    "tags": "올인원,클렌저,마일드,파우더로션",
    "avgRate": "4.3",
    "reviewCount": "125",
    "created": new Date("2022-09-27")
  },
  
]

export const order_detail_list: orderDetailType[] = [
  {
    "id": 0,
    "price": 27000,
    "shippingPrice": 2500,
    "amount": 29500,
    "paymentKey": "key",
    "method": "CARD",
    "status": "DONE",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-04-01 10:00")
  },
  {
    "id": 1,
    "price": 27000,
    "shippingPrice": 0,
    "amount": 27000,
    "paymentKey": "key",
    "method": "CARD",
    "status": "DONE",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-03-21 11:00")
  },
  {
    "id": 2,
    "price": 27000,
    "shippingPrice": 2500,
    "amount": 29500,
    "paymentKey": "key",
    "method": "CARD",
    "status": "DONE",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-03-21 12:00")
  },
  {
    "id": 3,
    "price": 27000,
    "shippingPrice": 0,
    "amount": 27000,
    "paymentKey": "key",
    "method": "CARD",
    "status": "DONE",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-03-11 11:00")
  },
  {
    "id": 4,
    "price": 27000,
    "shippingPrice": 2500,
    "amount": 29500,
    "paymentKey": "key",
    "method": "CARD",
    "status": "READY",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-04-01")
  },
  {
    "id": 5,
    "price": 27000,
    "shippingPrice": 2500,
    "amount": 29500,
    "paymentKey": "key",
    "method": "CARD",
    "status": "READY",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-04-01")
  },
  {
    "id": 6,
    "price": 27000,
    "shippingPrice": 2500,
    "amount": 29500,
    "paymentKey": "key",
    "method": "CARD",
    "status": "READY",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-04-01")
  },
  {
    "id": 7,
    "price": 27000,
    "shippingPrice": 2500,
    "amount": 29500,
    "paymentKey": "key",
    "method": "CARD",
    "status": "READY",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-04-01")
  },
  {
    "id": 8,
    "price": 27000,
    "shippingPrice": 2500,
    "amount": 29500,
    "paymentKey": "key",
    "method": "CARD",
    "status": "READY",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-04-01")
  },
  {
    "id": 9,
    "price": 27000,
    "shippingPrice": 2500,
    "amount": 29500,
    "paymentKey": "key",
    "method": "CARD",
    "status": "READY",
    "userName": "김인코스런",
    "userPhone": "010-1234-1234",
    "userAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "shipName": "김인코스런",
    "shipPhone": "010-1234-1234",
    "shipAddr": "서울특별시 마포구 성산동 123-3성산빌딩 B동 302호",
    "orderMessage": "문 앞에 두고 가주세요",
    "created": new Date("2022-04-01")
  },

]
export const order_status_list: orderStatus[] = [
  {
    "id": 0,
    "orderId": "0",
    // "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "productId": 0,
    "count": 1,
    "shippingStatus": "PAID",
    "created": new Date("2021-04-01 10:00"),
  },
  {
    "id": 1,
    "orderId": "1",
    "productId": 0,
    "count": 1,
    "shippingStatus": "WAIT",
    "created": new Date("2021-03-21 12:00"),
  },
  {
    "id": 2,
    "orderId": "2",
    "productId": 0,
    "count": 1,
    "shippingStatus": "INPROGRESS",
    "created": new Date("2021-03-21 11:00"),
  },
  {
    "id": 3,
    "orderId": "3",
    "productId": 0,
    "count": 1,
    "shippingStatus": "DONE",
    "created": new Date("2021-03-11 11:00"),
  },


]