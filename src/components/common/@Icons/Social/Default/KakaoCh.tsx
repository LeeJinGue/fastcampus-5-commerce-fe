import { Icon, IconProps } from '@chakra-ui/react';

const DefaultKakaoChIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "24"
  const h = props.h? props.h : "24"
  return (
    <Icon
      width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.9824 3.45166C7.258 3.45166 3.43701 6.99432 3.43701 11.3671C3.43701 14.5948 4.78962 16.1354 6.6403 17.5393V21.3261C6.64008 21.3665 6.65109 21.4061 6.67211 21.4405C6.69313 21.475 6.72333 21.5029 6.75933 21.5211C6.79532 21.5394 6.83568 21.5473 6.8759 21.5439C6.91611 21.5405 6.95458 21.5259 6.987 21.5019L10.2318 19.0921L10.3002 19.1214C10.8551 19.2237 11.4181 19.2751 11.9824 19.2752C16.7092 19.2752 20.5277 15.7326 20.5277 11.3622C20.5277 6.99188 16.6994 3.44678 11.9824 3.44678" fill="#FFDE00"/>
      <path d="M11.9824 3C7.0212 3 3 6.72089 3 11.3012C3 14.6901 4.41853 16.3088 6.36443 17.7835V21.7607C6.36465 21.8031 6.37663 21.8447 6.39902 21.8807C6.42142 21.9167 6.45336 21.9458 6.49129 21.9648C6.52923 21.9838 6.57168 21.9918 6.61394 21.9881C6.65619 21.9844 6.6966 21.9691 6.73066 21.9438L10.1366 19.4144L10.2098 19.4462C10.7922 19.5525 11.3831 19.6056 11.9751 19.6049C16.9363 19.6049 20.9575 15.8864 20.9575 11.3036C20.9575 6.72089 16.9363 3.00244 11.9751 3.00244L11.9824 3ZM8.97199 13.4058C9.38701 13.4196 9.79487 13.2952 10.1316 13.0522C10.4683 12.8091 10.7148 12.4612 10.8324 12.063H12.1338C12.0086 12.8042 11.6196 13.4753 11.0385 13.9522C10.4574 14.4292 9.72345 14.68 8.97199 14.6583C8.52205 14.6704 8.07425 14.5923 7.65502 14.4285C7.23579 14.2646 6.85363 14.0185 6.53111 13.7045C6.20859 13.3906 5.95224 13.0152 5.7772 12.6005C5.60217 12.1859 5.51198 11.7403 5.51198 11.2902C5.51198 10.8401 5.60217 10.3946 5.7772 9.97992C5.95224 9.56525 6.20859 9.18986 6.53111 8.87591C6.85363 8.56195 7.23579 8.3158 7.65502 8.15199C8.07425 7.98817 8.52205 7.91001 8.97199 7.92213C9.73221 7.89956 10.4745 8.15565 11.059 8.6422C11.6436 9.12874 12.0302 9.81218 12.146 10.5639H10.8471C10.745 10.1495 10.5028 9.78311 10.1615 9.52682C9.82022 9.27054 9.40086 9.14008 8.97443 9.15754C8.69223 9.14602 8.41071 9.1934 8.14783 9.29666C7.88494 9.39993 7.64645 9.55682 7.44754 9.75733C7.24863 9.95785 7.09367 10.1976 6.99252 10.4613C6.89137 10.725 6.84627 11.0069 6.86006 11.289C6.85613 11.5679 6.9081 11.8447 7.01294 12.1031C7.11777 12.3616 7.27332 12.5964 7.47042 12.7937C7.66751 12.991 7.90215 13.1469 8.16047 13.252C8.41879 13.3571 8.69556 13.4094 8.97443 13.4058H8.97199ZM17.5564 14.5289H16.3601V11.8432C16.3601 11.2231 15.9987 10.891 15.4445 10.891C14.8243 10.891 14.4264 11.2695 14.4264 12.0386V14.5362H13.2325V7.9441H14.4264V10.4198C14.712 9.98522 15.1759 9.77281 15.8058 9.77281C16.0379 9.76404 16.2692 9.80479 16.4843 9.89235C16.6995 9.97991 16.8935 10.1123 17.0535 10.2806C17.2244 10.4707 17.3557 10.693 17.4395 10.9345C17.5234 11.176 17.5581 11.4319 17.5418 11.687L17.5564 14.5289Z" fill="#231815"/>

    </Icon>

  );
};

export default DefaultKakaoChIcon;