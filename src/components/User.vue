<template>
  <div class="hello">
    <span>{{ user.id }}</span
    >&nbsp;
    <span>{{ user.email }}</span>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object,
  },
};
</script>
