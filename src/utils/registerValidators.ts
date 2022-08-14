import { reactive } from "vue";

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  role: string;
}
interface RegisterRules {
  name: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
      }
  )[];
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
  rePassword: (
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
    | {
      validator: (rul: RegisterRules, value: string, callback: any ) => void;
      trigger: string;
    }
  )[];
}

export const registerUser = reactive<RegisterUser>({
  name: "",
  email: "",
  password: "",
  rePassword: "",
  role: "",
});

const validatePass2 = (rule: RegisterRules, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the password again"));
  } else if (value !== registerUser.password) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};

export const registerRules = reactive<RegisterRules>({
  name: [
    {
      required: true,
      message: "Usename can't be empty!",
      trigger: "change",
    },
    {
      min: 5,
      max: 25,
      message: "Usename must be 5 to 25 characters long!",
      trigger: "change",
    },
  ],
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
  rePassword: [
    {
      required: true,
      message: "Please enter the password again!",
      trigger: "blur",
    },
    {
      min: 6,
      max: 20,
      message: "Password must be 6 to 20 characters long!",
      trigger: "change",
    },
    {
      validator: validatePass2,
      trigger: "blur",
    },
  ],
});