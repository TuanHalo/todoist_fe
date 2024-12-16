type RuleType = {
  [name: string]: string | number | boolean;
  message: string;
};

export type FormRulesType = {
  [name: string]: RuleType[];
};

export type FormValuesType = {
  [key: string]: string;
};

export type FormErrorsType = {
  [key: string]: string;
};

const Error_Message = {
  required: "Please fill in this field",
  regexp: "Field does not like format",
  min: "Please fill the number greater than or equal ",
  max: "Please fill the number lower than or equal ",
};

const RegexpList: { [key: string]: RegExp } = {};

export const validate = (rules: FormRulesType, data: FormValuesType) => {
  const errorsObject: FormErrorsType = {};

  for (let name in rules) {
    for (let rule of rules[name]) {
      if (rule.required) {
        if (!data[name]?.trim()) {
          errorsObject[name] = rule.message || Error_Message.required;
        }
      }

      if (rule.regexp && data[name]) {
        let regexp: any = rule.regexp.toString();

        if (regexp in RegexpList) {
          regexp = RegexpList[regexp];
        } else if (!(regexp instanceof RegExp)) {
          regexp = new RegExp("");
        }

        if (!regexp.test(data[name])) {
          errorsObject[name] = rule.message || Error_Message.regexp;
        }
      }

      if (rule.min && data[name]) {
        if (rule.min && data[name]) {
          if (parseInt(data[name], 10) < parseInt(rule.min.toString(), 10)) {
            errorsObject[name] = rule.message || Error_Message.min + rule.min;
          }
        }
      }

      if (rule.max && data[name]) {
        if (rule.max && data[name]) {
          if (parseInt(data[name], 10) > parseInt(rule.max.toString(), 10)) {
            errorsObject[name] = rule.message || Error_Message.max + rule.max;
          }
        }
      }
    }
  }

  return errorsObject;
};

export const required = (message?: string) => ({
  required: true,
  message,
});

export const regexp = (pattern: string, message?: string) => ({
  regexp: pattern,
  message,
});

export const min = (min: number, message?: string) => ({
  min,
  message,
});

export const max = (max: number, message?: string) => ({
  max,
  message,
});
