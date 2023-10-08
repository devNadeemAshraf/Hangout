export type TPhoneEmail = "phone" | "email";
export type TPhoneEmailMap = {
  phone: () => JSX.Element;
  email: () => JSX.Element;
};
