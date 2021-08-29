<template>
  <ol>
    <li v-for="user in apiResponse.users" :key="user.id">
      <User :user="user" />
    </li>
  </ol>
  <PaginationNav
    id="usersPageNav"
    :paginationResponse="apiResponse.pagination"
    :current="apiResponse.pagination.current"
    :total="apiResponse.pagination.pages"
    :perPage="apiResponse.pagination.per_page"
  />
</template>

<script>
import User from "@/components/User.vue";
import PaginationNav from "@/components/PaginationNav.vue";

export default {
  name: "UsersWithPagination",
  components: {
    User,
    PaginationNav,
  },
  props: {
    apiResponse: {},
  },
};
</script>
