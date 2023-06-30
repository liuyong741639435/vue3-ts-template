<script setup lang="ts">
import { LocationQueryValue, useRoute } from "vue-router";

const route = useRoute();

const code = (route.query.code as LocationQueryValue) ?? 401;

const config = {
  401: {
    code: "401",
    text: "未经授权",
    url: "",
  },
  403: {
    code: "403",
    text: "权限不够",
    url: "",
  },

  404: {
    code: "404",
    text: "没有该资源",
    url: "",
  },
};
</script>
<template>
  <div>
    <p>{{ config[code].code }}</p>
    <p>{{ config[code].text }}</p>
  </div>
</template>

<style scoped>
</style>
