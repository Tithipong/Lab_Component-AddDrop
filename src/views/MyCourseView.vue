<template>
  <v-app>
    <v-main
      style="
        --v-layout-left: 50px;
        --v-layout-right: 50px;
        --v-layout-top: 100px;
        --v-layout-bottom: 0px;
      "
    >
      <v-card-title primary-title> วิชาที่ฉันลงทะเบียนทั้งหมด </v-card-title>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">รหัสวิชา</th>
            <th class="text-left">ชื่อวิชา</th>
            <th class="text-left">หน่วยกิต</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(subject, index) in myEnrollment" :key="index">
            <td>{{ subject.course_id }}</td>
            <td>{{ subject.course_name }}</td>
            <td>{{ subject.credit }}</td>
            <td>
              <v-btn color="error" @click="removeFromBasket(index)">ลบ</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-main>
  </v-app>
</template>

<script setup>
import { useEnrollment } from "../stores/useEnrollment";
const enrollmentList = useEnrollment();
const myEnrollment = enrollmentList.getState;
function removeFromBasket(subject_key) {
  if (confirm("ต้องการถอนรายวิชาหรือไม่?") === true) {
    enrollmentList.removeState(subject_key);
  }
}
</script>

<style>
</style>
