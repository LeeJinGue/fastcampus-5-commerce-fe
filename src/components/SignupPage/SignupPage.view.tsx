import React from 'react';
import {
  Box,
  BoxProps,
  Text
} from '@chakra-ui/react';
import PrimaryButton from '@components/common/New/PrimaryButton';
import ProfileForm from './_fragments/ProfileForm';
import AdditionalInfoForm from './_fragments/AdditionalInfoForm';
import TermsOfServiceForm from './_fragments/TermsOfServiceForm';
import { UseFormReturn } from 'react-hook-form';
import { SignupFormDataType } from './_hooks/useSignupForm';
import { usePrevDupSubmit } from 'hooks/usePrevDupClick';
import { CONFIG } from '@config';
interface SignupPageProps extends BoxProps {
  formData: UseFormReturn<SignupFormDataType>;
}
const SignupPageView = ({
  formData: {
    register,
    control,
    formState: { errors },
    setValue,
    watch,
  },
  onSubmit,
  ...basisProps
}: SignupPageProps) => {
  React.useEffect(() => {
    if(CONFIG.ENV === "development"){
      setValue("username", "테스트이름")
      setValue("nickname", "테스트닉")
      setValue("phone", "010-1234-1234")
      setValue("email", "test@test.com")
      setValue("age", {value:10, label:"10대"})
      setValue("gender", {value: "male", label: "남자"})
      setValue("tos", {service: true, privacy: true, marketing: true})
    }
  }, [])
  const {oneOnSubmit} = usePrevDupSubmit({callBack:onSubmit})
  return (
    <Box as="form" onSubmit={(e) => {
      e.preventDefault()
      oneOnSubmit()
    }} bgColor="white" px="16px" {...basisProps}>
      <Text textStyle="extraLargeBold" mt="10px">회원가입</Text>
      <ProfileForm mt="60px" errors={errors} register={register} />
      <AdditionalInfoForm control={control} errors={errors} />
      <TermsOfServiceForm watch={watch} control={control} errors={errors} register={register} setValue={setValue}/>
      <PrimaryButton btntype='Solid' btnshape='Round' btnstate='Primary' 
      w="343px" h="50px" mb="50px" type='submit'>회원가입 완료</PrimaryButton>
    </Box>
  );
};

export default SignupPageView;
