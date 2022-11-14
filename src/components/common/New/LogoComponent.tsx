import { Flex, FlexProps, IconButton, IconButtonProps } from '@chakra-ui/react'
import { ROUTES } from '@constants/routes'
import { useRouter } from 'next/router'
import React from 'react'
import ExitIcon from '../@Icons/System/Exit'
import LogoPrimaryIcon from './@Icons/LogoPrimary'
import LogoWhiteIcon from './@Icons/LogoWhite'

const COMPONENT_WIDTH = "215px"
const COMPONENT_HEIGHT = "80px"
type LogoAlignType = "start" | "center"
interface LogoComponentProps extends IconButtonProps{
  align: LogoAlignType

}
const LogoComponent = ({ align, ...props}:LogoComponentProps) => {
  const route = useRouter()
  const handleLogoClick = () => {
    if(route.asPath === ROUTES.HOME) route.replace({pathname: ROUTES.HOME})
    else route.push({pathname: ROUTES.HOME})
  }
  return (
    <IconButton
    icon={<LogoPrimaryIcon />}
    onClick={handleLogoClick}
    bgColor="transparent"
    flexDir="column" w={COMPONENT_WIDTH} h={COMPONENT_HEIGHT} justifyContent="center"
    alignItems={align} {...props}>      
    </IconButton>
  )
}
export default LogoComponent;