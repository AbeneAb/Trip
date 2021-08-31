import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import {
  DeepMap,
  useForm,
  UseFormHandleSubmit,
  FieldError,
  UseFormRegister,
} from "react-hook-form";
import * as yup from "yup";

export interface AddDstinationForm {
  name: string;
  description: string;
  img: string;
  address: string;
}
const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  img: yup.string().required(),
  address: yup.string().required(),
});
export interface IAddDestinationReturnType {
  handleSubmit: UseFormHandleSubmit<AddDstinationForm>;
  isSubmitting: boolean;
  onValidSubmitHandler: (data: AddDstinationForm) => void;
  onInvalidSubmitHandler: (
    errors: DeepMap<AddDstinationForm, FieldError>
  ) => void;
  errors: DeepMap<AddDstinationForm, FieldError>;
  register: UseFormRegister<AddDstinationForm>;
}
export const useAddDestination = (): IAddDestinationReturnType => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddDstinationForm>({ resolver: yupResolver(schema) });

  const onValidSubmitHandler = (date: AddDstinationForm) => {
      console.log('Valid Input');
  }
  const onInvalidSubmitHandler = (
    err: DeepMap<AddDstinationForm, FieldError>
  ) => {
    console.log(err);
  };
  return {
    handleSubmit,
    isSubmitting,
    onValidSubmitHandler,
    onInvalidSubmitHandler,
    errors,
    register,
  };
};
