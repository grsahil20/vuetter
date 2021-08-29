<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Welcome to Vuetter!</h1>
    <ol id="tweets">
      <li v-for="tweet in tweets" :key="tweet.id">
        <Tweet :tweet="tweet"/>
      </li>
    </ol>
  </div>
</template>

<script>
import { getTweets } from "@/services/tweetsService"; // @ is an alias to /src
// @ is an alias to /src
import Tweet from "@/components/Tweet.vue";

export default {
  name: "Home",
  components: {
    Tweet,
  },
  data() {
    return {
      tweets: [],
    };
  },
  async created() {
    const response = (await getTweets()).data;
    this.tweets = response.tweets;
  },
};
</script>
