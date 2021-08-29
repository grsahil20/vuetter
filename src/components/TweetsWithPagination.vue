<template>
  <ol>
    <li v-for="tweet in tweetsApiResponse.tweets" :key="tweet.id">
      <Tweet :tweet="tweet" />
    </li>
  </ol>
</template>

<script>
import Tweet from "@/components/Tweet.vue";

export default {
  name: "Home",
  components: {
    Tweet,
  },
  props: {
    tweetsApiResponse: {},
  },
};
</script>
