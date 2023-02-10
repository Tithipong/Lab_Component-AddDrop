<template>
  <v-app
    ><v-app-bar color="" dense dark> </v-app-bar
    ><v-main
      style="
        --v-layout-left: 50px;
        --v-layout-right: 50px;
        --v-layout-top: 100px;
        --v-layout-bottom: 0px;
      "
      ><v-card-title primary-title> ค้นหาวิชาที่ลงทะเบียน </v-card-title>

      <v-form @submit.prevent="addToBasket">
        <v-text-field
          type="text"
          v-model="courseID"
          placeholder="รหัสวิชา"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2">ลงทะเบียน</v-btn>
      </v-form>
      <br>
      <v-card
        class=""
        elevation=""
        max-width=""
        v-if="(x = courseData.find((elem) => elem.course_id == courseID))"
      >
        <v-card-text>
          <p class="">
            <b>รหัสวิชา : </b> <span>{{ x.course_id }}</span>
          </p>
          <p class="">
            <b>ชื่อวิชา : </b> <span>{{ x.course_name }}</span>
          </p>
          <p class="">
            <b>หน่วยกิต : </b><span>{{ x.credit }}</span>
          </p>
          <div class="text--primary"></div>
        </v-card-text>
      </v-card>
      <div v-else>
        <p>ไม่พบผลการค้นหา</p>
      </div>
      <br>
      <v-divider></v-divider>
      <div>
        <v-card-title primary-title>รายวิชารอยืนยัน</v-card-title>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">รหัสวิชา</th>
              <th class="text-left">ชื่อวิชา</th>
              <th class="text-left">หน่วยกิต</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(course, index) in courseInfo" :key="index">
              <td>{{ course.course_id }}</td>
              <td>{{ course.course_name }}</td>
              <td>{{ course.credit }}</td>
              <td><v-btn @click="removeFromBasket(index)">ลบ</v-btn></td>
            </tr>
          </tbody>
        </v-table>
        <v-divider></v-divider>
        <v-btn @click="enrollCourse">ยืนยันการลงทะเบียน</v-btn>
      </div>
    </v-main></v-app
  >
</template>
<script setup>
import { ref } from "vue";
import courseData from "../json/cs_courses.json";
import { useEnrollment } from "../stores/useEnrollment";
//import { inEnrollment } from "../stores/inEnrollment";

const enrollment = useEnrollment();
//const enrollmentList = inEnrollment();
//const courseInfo = enrollmentList.getState;

const courseID = ref("");
let courseInfo = ref([]);

function addToBasket() {
  const data = courseData.find((elem) => elem.course_id == courseID.value);
  //console.log(data);
  if (data) {
    courseInfo.value.push(data);
    courseID.value = "";
  } else {
    alert("โปรดกรอกรหัสวิชาที่ถูกต้อง");
  }
}

function removeFromBasket(course_key) {
  if (confirm("ต้องการลบรายวิชาหรือไม่ ?")) {
    courseInfo.value.pop(course_key);
  }
}

function enrollCourse() {
  if (courseInfo.value.length != 0) {
    courseInfo.value.forEach((subject) => {
      enrollment.storeState(subject);
    });
    console.log(enrollment.getState);
    courseInfo.value = [];
    alert("ลงทะเบียนแล้ว โปรดไปที่หน้า วิชาที่ฉันลงทะเบียน");
  } else {
    alert("โปรดเลือกวิชาก่อนทำการลงทะเบียน");
  }
}
</script>
<style scoped>
.border {
  margin: 20px auto;
  padding: 0.5em;
  border: 3px solid gray;
}
</style>
