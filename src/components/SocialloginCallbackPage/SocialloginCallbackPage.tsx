import React from 'react';
import { Box, ChakraProps, Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { setToken } from '@utils/localStorage/token';
import { usePostUserSocialLogin } from '@apis/user/UserApi.mutation';
import { ROUTES } from '@constants/routes';
import LoadingPage from '@components/common/New/LoadingPage';
import { GetServerSideProps } from 'next';
interface SocialloginCallbackPageProps extends ChakraProps {

}
function SocialloginCallbackPage({
  ...basisProps
}: SocialloginCallbackPageProps) {
  const route = useRouter()
  const { code, state } = route.query
  const { isReady } = route
  const { mutateAsync: socialLoginMutate } = usePostUserSocialLogin()
  React.useEffect(() => {
    // Redirect URL을 통해 카카오 로그인
    if(!isReady) return
    if (typeof code === "string" && typeof state === "string") {
      // console.log("#code:", code)
      socialLoginMutate({ code: code, state: state })
        .then((res) => {
          const { isRegister } = res
          if (!isRegister) {
            // 등록이 안되어있다면 
            // socialToken을 Query로 넘기면서 
            // 회원가입 페이지로 이동합니다.
            // console.log("등록이 안되어있습니다.")
            const { socialToken } = res
            if (socialToken) {
              route.push({
                pathname: ROUTES.SIGNUP.MAIN,
                query: {
                  socialToken,
                }
              })
            }
          }
          if (isRegister) {
            // 등록이 되어있다면
            // accessToken, refreshToken을 저장하고
            // 메인 페이지로 이동합니다.
            // console.log("등록이 되어있습니다.")
            const { access, refresh } = res
            if (access && refresh) {
              setToken({ isRegister, access, refresh })
              route.replace({
                pathname: ROUTES.HOME,
              })
            }
          }
        }).catch((err) => {
          console.log("#social Login err:", err)
        })
    }
  }, [isReady])

  return (
    <LoadingPage />
  );
}


export default SocialloginCallbackPage;
