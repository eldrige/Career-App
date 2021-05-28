const COUNTRY_LIST = [
  { name: "United States of America", code: "us" },
  { name: "United Kingdoms", code: "gb" },
  { name: "India", code: "in" },
];

const DATA_STEP_1 = {
  firstName: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "First Name",
  },
  lastName: {
    type: "text",
    validations: {},
    errors: {},
    placeholder: "Last Name",
  },
  dateOfBirth: {
    type: "date",
    validations: {},
    errors: {},
    placeholder: "Date of Birth",
  },
};

const DATA_STEP_2 = {
  address: {
    type: "textarea",
    validations: {},
    errors: {},
    placeholder: "Full Address",
  },
  country: {
    type: "select",
    options: COUNTRY_LIST,
    validations: {},
    errors: {},
    placeholder: "Country",
  },
};

const DATA_STEP_3 = {
  phone: {
    type: "phone",
    validations: {
      pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/,
    },
    errors: {
      pattern: "Please enter a valid phone number",
    },
    placeholder: "Contact Number",
  },
  otp: {
    type: "number",
    validations: {
      required: true,
      minLength: 4,
    },
    errors: {
      required: "This field can not be left blank",
      minlength: "Minimum length should be 4 characters",
    },
    placeholder: "One Time Password",
  },
};

const STEP_ITEMS = [
  { label: "Step 1", data: DATA_STEP_1 },
  { label: "Step 2", data: DATA_STEP_2 },
  { label: "Step 3", data: DATA_STEP_3 },
  { label: "Review & Submit", data: {} },
];

export { STEP_ITEMS };
