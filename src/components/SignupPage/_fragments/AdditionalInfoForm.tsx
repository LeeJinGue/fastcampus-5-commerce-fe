import { Box, BoxProps, Text } from "@chakra-ui/react";
import FormHelper from "@components/common/FormHelper";
import ProfileIcon from "@components/common/New/@Icons/System/Profile";
import InputSelect from "@components/common/New/TextList/InputSelect";
import { ChakraStylesConfig } from "chakra-react-select";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FormLabelProp } from "../SignupPage.type";
import { FormDataType } from "../_hooks/useExampleForm";

const GENDER_OPTION = [
  { value: 'men', label: '남자' },
  { value: 'women', label: '여자' },
]
const AGE_OPTION = [
  { value: '10대', label: '10대' },
  { value: '20대', label: '20대' },
  { value: '30대', label: '30대' },
  { value: '40대', label: '40대' },
  { value: '50대', label: '50대' },
  { value: '60대', label: '60대' },
  { value: '70대', label: '70대' },
  { value: '80대 이상', label: '80대 이상' },
];

interface AdditionalInfoFormProps extends BoxProps {
  errors: FieldErrors<FormDataType>;
  control: Control<FormDataType, any>;
}
const AdditionalInfoForm = ({
  errors,
  control,
  ...basisProps
}: AdditionalInfoFormProps) => {
  return <>
    <Box flexDir="column"// 추가 정보 입력
    {...basisProps}
    >
      <Text mb="40px" textStyle="title">추가정보입력(선택)</Text>
      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange } }) => (
          <FormHelper
            mb="50px"
            label="성별"
            labelProps={FormLabelProp}
            errorText={errors.gender?.value?.message}
          >
            <InputSelect 
              onChange={onChange}
              selectOption={GENDER_OPTION}
              placeholder="성별을 선택하세요"
            />
          </FormHelper>
        )}
      />
      <Controller
        control={control}
        name="age"
        render={({ field: { onChange } }) => (
          <FormHelper
            mb="50px"
            label="연령대"
            labelProps={FormLabelProp}
            errorText={errors.age?.value?.message}
          >
            <InputSelect 
              onChange={onChange}
              selectOption={AGE_OPTION}
              placeholder="연령대를 선택하세요"
            />
          </FormHelper>
        )}
      />
    </Box>
  </>
}
export default AdditionalInfoForm;