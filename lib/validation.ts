import * as Yup from "yup";

// Indian mobile number validation regex: 10 digits starting with 6, 7, 8, or 9
const indianPhoneRegex = /^[6-9]\d{9}$/;

export const enquiryValidationSchema = Yup.object().shape({
  fullName: Yup.string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name must be less than 80 characters")
    .required("Full name is required"),
  phone: Yup.string()
    .trim()
    .matches(
      indianPhoneRegex,
      "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210)"
    )
    .required("Phone number is required"),
  email: Yup.string()
    .trim()
    .email("Please provide a valid email address")
    .optional(),
  projectInterest: Yup.string().required("Please select a project of interest"),
  preferredContact: Yup.string()
    .oneOf(["Phone Call", "WhatsApp", "Email"])
    .required("Preferred contact method is required"),
  message: Yup.string().trim().max(1000, "Message cannot exceed 1000 characters").optional(),
  privacyConsent: Yup.boolean().oneOf(
    [true],
    "You must accept the privacy policy to submit"
  ),
});

export interface EnquiryFormValues {
  fullName: string;
  phone: string;
  email?: string;
  projectInterest: string;
  preferredContact: string;
  message?: string;
  privacyConsent: boolean;
}
