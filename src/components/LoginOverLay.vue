<template>
  <div>
    <form action="">
      <input
        type="email"
        v-model="email"
        size="50"
        placeholder="email"
        @blur="validateFormRequiredFields"
        required
      />
      <br /><br />

      <input
        type="password"
        v-model="password"
        placeholder="password"
        @blur="validateFormRequiredFields"
        size="50"
        required
      />
      <br /><br />
      <input
        type="button"
        value="Log Me In"
        @click="submitUserLoginForm"
        size="50"
        :disabled='isDisabled'
      />
      <br />
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
      isDisabled: true,
    };
  },
  methods: {
    validateFormRequiredFields: async function () {
      if (this.email && this.password) {
        console.log("email and password present");
        this.isDisabled = false;
      } else {
        console.log("Please enter email and password");
        this.isDisabled = true;
      }
    },
    submitUserLoginForm: async function () {
      console.log("submitUserLoginForm enter email and password");
      await userLogin(this.email, this.password);
    },
  },
};
</script>

<style scoped>
form input {
  border: 2px solid blue;
}

form input:button {
  border: 2px solid green;
}
form input:disabled {
  border: 2px solid yellow;
}
</style>
