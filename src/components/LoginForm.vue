<template>
  <el-form
    ref="loginFormRef"
    :model="loginUser"
    label-width="120px"
    class="loginForm sign-in-form"
    status-icon
    :rules="rules"
  >
    <el-form-item label="Email" prop="email">
      <el-input placeholder="Enter Email" v-model="loginUser.email" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input
        type="password"
        placeholder="Enter Password"
        v-model="loginUser.password"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        class="submit-btn"
        @click="$emit('onSubmit', loginFormRef)"
      >
        Login
      </el-button>
    </el-form-item>
    <!-- 找回密碼 -->
    <div class="tiparea">
      <p>Forgot your password? <a>Get it back now</a></p>
    </div>
  </el-form>
</template>
<script lang="ts">
import { ref } from "vue";

export default {
  name: "LoginForm",
  props: {
    loginUser: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const loginFormRef = ref<null | object>(null);

    return { loginFormRef };
  },
};
</script>

<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p button {
  color: #409eff;
  background-color: #fff;
  border: inherit;
  cursor: pointer;
}
</style>