import * as yup from "yup";

import { email, pass } from "./validSchemas";

const schema = yup.object().shape({
  ...email,
  ...pass,
});

export default schema;
