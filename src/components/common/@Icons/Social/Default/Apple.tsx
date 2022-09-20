import { Icon, IconProps } from '@chakra-ui/react';

const DefaultAppleIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "24px"
  const h = props.h? props.h : "24px"
  return (
    <Icon
      width={w} height={h} viewBox="0 0 24px 24px" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.96 6.385C12.4576 6.34336 12.9419 6.20213 13.3839 5.96971C13.8259 5.73728 14.2166 5.4184 14.533 5.032C15.1566 4.28413 15.509 3.34742 15.533 2.374C15.534 2.24842 15.522 2.12307 15.497 2C14.4152 2.10593 13.4159 2.62493 12.707 3.449C12.0721 4.15984 11.7048 5.06964 11.668 6.022C11.6684 6.1356 11.6805 6.24886 11.704 6.36C11.7883 6.37672 11.8741 6.3851 11.96 6.385V6.385ZM8.94 21C10.112 21 10.631 20.215 12.093 20.215C13.579 20.215 13.905 20.976 15.209 20.976C16.49 20.976 17.347 19.792 18.156 18.633C18.7155 17.8008 19.1549 16.8939 19.461 15.939C18.7085 15.618 18.0669 15.0831 17.6159 14.4006C17.1648 13.7181 16.9242 12.9181 16.924 12.1C16.9311 11.3727 17.1221 10.6591 17.4791 10.0255C17.8361 9.39186 18.3476 8.85884 18.966 8.476C18.5422 7.87803 17.9779 7.39344 17.3227 7.0649C16.6676 6.73636 15.9417 6.57396 15.209 6.592C13.772 6.592 12.6 7.462 11.863 7.462C11.063 7.462 10.015 6.64 8.771 6.64C6.404 6.64 4 8.597 4 12.293C4.04582 14.5386 4.73776 16.7234 5.993 18.586C6.935 19.913 7.757 21 8.94 21Z" fill="#1A1A1A"/>
    </Icon>

  );
};


export default DefaultAppleIcon;