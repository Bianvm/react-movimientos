import {
  isStringValueInformed,
  FieldValidationResult,
  buildRequiredFieldValidationFailedResponse,
  buildValidationSucceededResult,
} from "@/common/validations";

export const validateTypeField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailedResponse();
  }

  return buildValidationSucceededResult();
};
