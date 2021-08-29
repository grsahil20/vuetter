<template>
  <div class="headerNav">
    <router-link :to="{ name: 'Tweets' }">Home</router-link> |
    <router-link :to="{ name: 'Users' }">Users</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <a href="#" @click="loginPopUp"> Login </a>
    <div v-if="showLoginOverlay">
      LoginOverLay here
      <LoginOverLay />
    </div>
  </div>

</template>

<script>
import LoginOverLay from "@/components/LoginOverLay.vue";

export default {
  name: "HeaderNav",
  components: {
    LoginOverLay,
  },
  data() {
    return {
      showLoginOverlay: true,
    };
  },
  methods: {
    loginPopUp: function () {
      this.showLoginOverlay = true;
    },
  },
};
</script>
