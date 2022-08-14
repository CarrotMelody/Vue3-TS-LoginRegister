import { reactive } from "vue";

interface User {
  email: string;
  password: string;
}
interface Rules {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
}
export const loginUser = reactive<User>({
  email: "",
  password: "",
});
export const rules = reactive<Rules>({
  email: [
    {
      type: "email",
      message: "Email is invalid!",
      required: true,
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      message: "Password can't be empty!",
      trigger: "change",
    },
    {
      min: 6,
      max: 20,
      message: "Password must be 6 to 20 characters long!",
      trigger: "change",
    },
  ],
});
