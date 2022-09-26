import { Icon, IconProps } from '@chakra-ui/react';

const DefaultYoutubeIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "24"
  const h = props.h? props.h : "24"
  return (
    <Icon
      width={w+"px"} height={h+"px"} viewBox={`0 0 ${w} ${h}`} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3121 7.27806C22.1917 6.72997 21.9039 6.23291 21.4886 5.85546C21.0734 5.478 20.5511 5.23887 19.994 5.17113C14.649 4.77499 9.28212 4.77499 3.93712 5.17113C3.38031 5.23898 2.85838 5.47798 2.44346 5.85546C2.02855 6.23293 1.741 6.73013 1.62095 7.27806C1.11951 10.6378 1.11951 14.0533 1.62095 17.4131C1.74106 17.9611 2.0286 18.4582 2.44371 18.8357C2.85882 19.2132 3.38111 19.4524 3.93809 19.52C9.28279 19.9155 14.6493 19.9155 19.994 19.52C20.551 19.4521 21.0732 19.2131 21.4884 18.8357C21.9036 18.4582 22.1915 17.9611 22.3121 17.4131C22.809 14.053 22.809 10.6381 22.3121 7.27806V7.27806ZM9.19615 15.678V8.58812L16.0121 12.1431L9.19615 15.677V15.678Z" fill="#F41717"/>
    </Icon>

  );
};


export default DefaultYoutubeIcon;