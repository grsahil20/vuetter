<template>
  <div class="hello">
    <span>{{tweet.id}}</span>&nbsp;
    <span>{{ tweet.body }}</span>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  props: {
    tweet: Object,
  },
};
</script>
