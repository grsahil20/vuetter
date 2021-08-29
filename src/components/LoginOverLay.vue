<template>
  <div>
    <form action="">
      <input type="text" v-model="email" placeholder="email" />
      <input type="password" v-model="password" placeholder="password" />
      <input type="button" value="Log Me In" @click="submitUserLoginForm" />
    </form>
  </div>
</template>

<script>
import { userLogin } from "@/services/usersService"; // @ is an alias to /src

export default {
  name: "LoginOverLay",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    submitUserLoginForm: async function () {
      await userLogin(this.email, this.password);
    },
  },
};
</script>

<style scoped>
form input {
  border: 2px solid red;
}
</style>
