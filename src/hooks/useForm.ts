import {
  FormErrorsType,
  FormRulesType,
  FormValuesType,
  validate,
} from "@/utils/validate";
import { useState } from "react";

export const useForm = (rules: FormRulesType) => {
  const [values, setValues] = useState<FormValuesType>({});
  const [errors, setErrors] = useState<FormErrorsType>({});

  const register = (name: string) => ({
    error: errors[name],
    value: values[name] || "",
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) =>
      setValues({ ...values, [name]: ev.target.value }),
  });

  const _validate = () => {
    const errorsObject = validate(rules, values);
    setErrors(errorsObject);
    return Object.keys(errorsObject).length === 0;
  };

  return {
    values,
    errors,
    register,
    validate: _validate,
  };
};
