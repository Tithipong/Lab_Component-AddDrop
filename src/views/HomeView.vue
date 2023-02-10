<template>
  <v-app>
    <v-app-bar color="" dense dark />
    
    <v-main style="--v-layout-left: 50px; --v-layout-right: 50px; --v-layout-top: 100px; --v-layout-bottom: 0px;">
      
      <v-container><v-toolbar-title class="title text-center display-3 text-h4">ข่าวสาร</v-toolbar-title><br>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="news_content in news" :key="news_content.newsId">
            <v-card class="mx-4" max-width="400" height="400">
              <v-img class="align-end text-white" height="200" :src="news_content.News_Picture" cover />
              <v-card-title>{{ news_content.News_Title }}</v-card-title>
              <v-card-subtitle class="pt-2">วันที่:
                {{ news_content.News_Date}}
              </v-card-subtitle>
              <v-card-text>
              {{truncateWords( news_content.News_Detail , 1) }}
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn color="blue"><a :href="news_content.News_links">อ่านเพิ่มเติม</a></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import news from "../json/news.json";

export default {
  data() {
    return {
      news: news.sort((a, b) => new Date(b.News_Date) - new Date(a.News_Date))
    };
  },
  methods: {
    truncateWords(text, wordLimit) {
      const words = text.split(" ");
      if (words.length <= wordLimit) {
        return text;
      }
      return words.slice(0, wordLimit).join(" ") + "....";
    }
  }
};

</script>
<style scoped>

.content {
  margin-top: 1em;
  margin-bottom: 1em;
}
.m-0 {
  margin: unset;
}
.color-gray {
  color: gray;
}

.justify-end {
  justify-content: flex-end;
}
</style>