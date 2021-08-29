<template>
  <ol>
    <li v-for="tweet in tweetsApiResponse.tweets" :key="tweet.id">
      <Tweet :tweet="tweet" />
    </li>
  </ol>
  <PaginationNav
    id='tweetsPageNav'
    :paginationResponse="tweetsApiResponse.pagination"
    :current="tweetsApiResponse.pagination.current"
    :total="tweetsApiResponse.pagination.pages"
    :perPage="tweetsApiResponse.pagination.per_page"
  />
</template>

<script>
import Tweet from "@/components/Tweet.vue";
import PaginationNav from "@/components/PaginationNav.vue";

export default {
  name: "TweetsWithPagination",
  components: {
    Tweet,
    PaginationNav,
  },
  props: {
    tweetsApiResponse: {},
  },
};
</script>
