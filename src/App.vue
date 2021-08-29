<template>
  <div>
    <router-link :to="{ name: 'Tweets' }">Home</router-link> |
    <router-link :to="{ name: 'Users' }">Users</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view />
</template>
