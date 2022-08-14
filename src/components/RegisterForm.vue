<template lang="">
  <el-form
    ref="registerFormRef"
    :model="registerUser"
    label-width="120px"
    class="registerForm sign-up-form"
    status-icon
    :rules="rules"
  >
    <el-form-item label="Username" prop="name">
      <el-input placeholder="Enter Username" v-model="registerUser.name" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input placeholder="Enter Email" v-model="registerUser.email" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        type="password"
        placeholder="Enter Password"
        v-model="registerUser.password"
      />
    </el-form-item>
    <el-form-item label="Repeat password" prop="rePassword">
      <el-input
        type="password"
        placeholder="Enter password again"
        v-model="registerUser.rePassword"
      />
    </el-form-item>
    <el-form-item label="Role">
      <el-select v-model="registerUser.role" placeholder="Please select a role">
        <el-option
          v-for="item in roles"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="$emit('onSubmit', registerFormRef)"
      >
        Register
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { reactive, ref } from "vue";

export default {
  name: "RegisterForm",
  props: {
    registerUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const registerFormRef = ref<null | object>(null);
    const roles = reactive([
      {
        value: "admin",
        label: "管理員",
      },
      {
        value: "user",
        label: "用戶",
      },
      {
        value: "visiter",
        label: "遊客",
      },
    ]);

    return { registerFormRef, roles };
  },
};
</script>
<style scoped>
.registerForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.submit-btn {
  width: 100%;
}
</style>