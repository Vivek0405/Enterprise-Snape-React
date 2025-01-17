import * as Yup from "yup";
import * as Constants from "./constants";

const loginValidations = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.EMAIL_REQUIRED)
        .matches(Constants.EMAIL_REGEX, Constants.VALIDATIONS.INVALID_EMAIL),
    password: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.PASSWORD_REQUIRED),
});

const registerValidations = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.EMAIL_REQUIRED)
        .matches(Constants.EMAIL_REGEX, Constants.VALIDATIONS.INVALID_EMAIL),
    name: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.NAME_REQUIRED),
    registrationNumber: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.REGISTRATION_NUMBER_REQUIRED),
    userName: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.USERNAME_REQUIRED),
    password: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.PASSWORD_REQUIRED),
    confirmPassword: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.PASSWORD_REQUIRED)
        .oneOf(
            [Yup.ref("password")],
            Constants.VALIDATIONS.PASSWORD_NOT_MATCH
        )
});

const bookAgentValidations = Yup.object().shape({
    bookingDate: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.BOOKING_DATE_REQ),
    bookingStartDateTime: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.BOOKING_STIME_REQ),
    bookingEndDateTime: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.BOOKING_ETIME_REQ),
    hours: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.BOOKING_HOUR_REQ),
    address1: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.BOOKING_ADDRESS_REQ),
    speciality: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.BOOKING_SPEC_REQ)
});

const collectionValidations = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.NAME_REQUIRED),
    eventDate: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.DATE_REQUIRED)
});

const assetDeviceValidation = Yup.object().shape({
    type: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.NAME_REQUIRED),
    nickName: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.DEVICE_NAME_REQUIRED),
    deviceID: Yup.string()
        .trim()
        .required(Constants.VALIDATIONS.IMEI_NUMBER_REQUIRED),
    deviceAmount: Yup.number()
        .min(1, "Must be more than 1 ")
        .required(Constants.VALIDATIONS.AMOUNT_REQUIRED)
})

export { loginValidations, registerValidations, collectionValidations, assetDeviceValidation, bookAgentValidations }