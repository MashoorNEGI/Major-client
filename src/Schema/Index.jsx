import * as Yup from 'yup'

export const studentschema = Yup.object({
    enroll_no: Yup.string().max(15).required(),
    password: Yup.string().max(15).required()
})
export const teacherschema   = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().max(15).required()
})
