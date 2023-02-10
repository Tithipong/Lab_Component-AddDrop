<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app>
    <v-app-bar color="#DDDDDD" dense dark>
      <v-spacer></v-spacer> <v-spacer></v-spacer>
      <v-btn variant="flat"
      >
        <RouterLink to="/">หน้าแรก</RouterLink></v-btn
      > <v-spacer></v-spacer>
      <v-btn variant="flat" small elevation="" color="">
        <RouterLink to="/courses">รายวิชา</RouterLink></v-btn
      > <v-spacer></v-spacer>
      <v-btn  variant="flat" small elevation="" color="">
        <RouterLink to="/enrollments">ลงทะเบียนเรียน</RouterLink></v-btn
      > <v-spacer></v-spacer>
      <v-btn variant="flat" small elevation="" color="">
        <RouterLink to="/mycourse">วิชาที่ฉันลงทะเบียน</RouterLink></v-btn
      ><v-spacer></v-spacer> <v-spacer></v-spacer>
    </v-app-bar>
    <RouterView />
  </v-app>
</template>

<style scoped>
@media (max-width: 600px) {
  v-app-bar {
    height: 56px;
  }
  nav > a {
    font-size: 0.8em;
  }
}
</style>
