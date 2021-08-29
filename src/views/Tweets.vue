<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Vuetter!</h1>
    <div v-if="tweetsApiResponse != null">
      <TweetsWithPagination :tweetsApiResponse="tweetsApiResponse" />
    </div>
  </div>
</template>

<script>
import { getTweets } from "@/services/tweetsService"; // @ is an alias to /src
// @ is an alias to /src
import TweetsWithPagination from "@/components/TweetsWithPagination.vue";

export default {
  name: "Tweets",
  components: {
    TweetsWithPagination,
  },
  data() {
    return {
      tweetsApiResponse: null,
    };
  },
  async created() {
    this.tweetsApiResponse = await getTweets({
      page: this.$route.query.page,
      perPage: this.$route.query.perPage,
    });
  },
};
</script>
