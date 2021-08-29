<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Vuetter!</h1>
    <div v-if="apiResponse != null">
      <UsersWithPagination :apiResponse="apiResponse" />
    </div>
  </div>
</template>

<script>
import { getUsers } from "@/services/usersService"; // @ is an alias to /src
// @ is an alias to /src
import UsersWithPagination from "@/components/UsersWithPagination.vue";

export default {
  name: "Users",
  components: {
    UsersWithPagination,
  },
  data() {
    return {
      apiResponse: null,
    };
  },
  async created() {
    this.apiResponse = await getUsers({
      page: this.$route.query.page,
      perPage: this.$route.query.perPage,
    });
  },
};
</script>
