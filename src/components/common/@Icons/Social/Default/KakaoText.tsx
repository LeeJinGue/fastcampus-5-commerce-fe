import { Icon, IconProps } from '@chakra-ui/react';

const DefaultKakaoTextIcon = ({ ...props }: IconProps) => {
  const w = props.w? props.w : "24px"
  const h = props.h? props.h : "24px"
  return (
    <Icon
      width={w} height={h} viewBox="0 0 24px 24px" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g clip-path="url(#clip0_5113_10854)">
<ellipse cx="12" cy="11" rx="9" ry="7" fill="#FFDE32"/>
<path d="M12.0012 2.40002C6.03597 2.40002 1.20117 6.20522 1.20117 10.8984C1.20117 13.9536 3.25077 16.632 6.32517 18.1296C6.09957 18.9696 5.50677 21.1704 5.38917 21.6408C5.24277 22.2264 5.60397 22.218 5.84157 22.0608C6.02757 21.9408 8.80077 20.0604 9.99717 19.2504C10.6607 19.348 11.3305 19.3969 12.0012 19.3968C17.9652 19.3968 22.8012 15.5916 22.8012 10.8984C22.8012 6.20522 17.964 2.40002 12.0012 2.40002ZM6.82677 9.80042V13.5684C6.82677 14.0916 5.65917 14.0952 5.65797 13.5684C5.65797 12.8484 5.65797 9.79682 5.65797 9.79682H4.52517C4.38858 9.78403 4.26168 9.72073 4.16931 9.6193C4.07693 9.51787 4.02573 9.38561 4.02573 9.24842C4.02573 9.11123 4.07693 8.97898 4.16931 8.87755C4.26168 8.77612 4.38858 8.71282 4.52517 8.70002H7.94757C8.08874 8.70663 8.22193 8.76735 8.3195 8.86958C8.41706 8.97182 8.4715 9.10771 8.4715 9.24902C8.4715 9.39034 8.41706 9.52623 8.3195 9.62846C8.22193 9.7307 8.08874 9.79142 7.94757 9.79802H6.82677V9.80042ZM11.1252 13.6884C10.8516 12.9684 10.9224 12.9372 10.9224 12.9372H8.86197L8.64117 13.722C8.40117 14.2716 7.36557 13.824 7.60557 13.2744C7.93797 12.5136 8.93877 9.64562 9.21597 9.03842C9.45597 8.50802 10.416 8.67842 10.5888 9.03842C10.788 9.46322 11.8824 12.4548 12.1992 13.2852C12.42 13.8672 11.3508 14.2704 11.13 13.6884H11.1252ZM15.306 13.9524C14.7768 13.9524 13.584 13.9524 13.0464 13.9524C12.5088 13.9524 12.5988 13.3272 12.5988 13.3272C12.5988 13.3272 12.5988 10.1868 12.5988 9.21242C12.5988 8.52842 13.8156 8.52602 13.818 9.21242C13.818 9.91802 13.818 12.8232 13.818 12.8232C13.818 12.8232 14.778 12.8232 15.312 12.8232C15.846 12.8232 15.8436 13.944 15.312 13.944L15.306 13.9524ZM18.948 13.8564L17.4528 11.8488L17.1132 12.12C17.1132 12.12 17.1132 13.1148 17.1132 13.6404C17.1132 14.0916 15.9576 14.0928 15.9576 13.6404C15.9576 13.3536 15.9828 9.48962 15.9708 9.06242C15.9588 8.60762 17.1072 8.58242 17.1204 9.03122C17.136 9.61082 17.1204 10.6596 17.1204 10.6596C17.1204 10.6596 18.8004 8.99042 19.0344 8.75522C19.2684 8.52002 20.0424 9.27482 19.7964 9.51842C19.3752 9.93602 18.3048 11.0868 18.3048 11.0868L19.8804 13.152C20.1804 13.5468 19.236 14.2572 18.9372 13.8636" fill="#1A1A1A"/>
<path d="M9.23291 11.9076H10.5385L9.91091 9.95398L9.23291 11.9076Z" fill="#1A1A1A"/>
</g>
    </Icon>

  );
};


export default DefaultKakaoTextIcon;