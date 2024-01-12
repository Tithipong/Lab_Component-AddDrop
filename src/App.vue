<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <v-app v>
    <v-app-bar color="green" dense dark>
      <v-spacer></v-spacer> <v-spacer></v-spacer>
      <v-btn variant="flat" elevation="24" color="" rounded="pill">
        <RouterLink to="/">หน้าแรก</RouterLink></v-btn
      > <v-spacer></v-spacer>
      <v-btn variant="flat" elevation="24" color="" rounded="pill">
        <RouterLink to="/courses">รายวิชา</RouterLink></v-btn
      > <v-spacer></v-spacer>
      <v-btn  variant="flat" elevation="24" color="" rounded="pill">
        <RouterLink to="/enrollments">ลงทะเบียนเรียน</RouterLink></v-btn
      > <v-spacer></v-spacer>
      <v-btn variant="flat" elevation="24" color="" rounded="pill">
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
bottom-element {
  background-color: #DDDDDD;
}

</style>
