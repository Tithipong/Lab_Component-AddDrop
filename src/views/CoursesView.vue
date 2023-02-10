<template>
  <v-app>
    <v-app-bar color="" dense dark></v-app-bar>
    <v-main style="--v-layout-left: 50px; --v-layout-right: 50px; --v-layout-top: 100px; --v-layout-bottom: 0px;">
      <v-container fluid>
        <v-row>
          <v-col cols="4" v-for="(course, index) in courses" :key="index">
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div class="text-h6 text--primary">{{ course.course_name }}</div>
                <div class="text--primary">
                  รหัสรายวิชา: {{ course.course_id }}<br />
                  ผู้สอน:
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn variant="text" color="teal-accent-4" @click="selectedCourse = index">
                  เพิ่มเติม
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <v-card
                  v-if="selectedCourse === index"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%"
                >
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">ข้อมูล</p>
                    ชื่อวิชา: <br />
                    รหัสวิชา: <br />
                    คําอธิบายรายวิชา: <br />
                    จํานวนชั่วโมง: <br />
                    บรรยายปฏิบัติ: <br />
                    ผู้สอน: <br />
                  </v-card-text>
                  <v-card-actions class="pt-0">
                    <v-btn variant="text" color="teal-accent-4" @click="selectedCourse = null">
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import courses from "../json/cs_courses.json";
 import { ref } from "vue";
 const selectedCourse = ref(false);
</script>
<style></style>
