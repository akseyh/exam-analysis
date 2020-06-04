<template>
   <vs-table :data="lessons" id="exams-table">
      <template slot="header">
         <h3>
            {{exam.name}}
         </h3>
      </template>
      <template slot="thead">
         <vs-th>
            Ders Adı
         </vs-th>
         <vs-th>
            İşlemler
         </vs-th>
      </template>

      <template slot-scope="{data}">
         <vs-tr v-for="(lesson, index) in data" :key="lesson.id" :style="index %  2 === 0 ? 'background: #CFD4D4' : 'background: #BEC2C2'">
            <vs-td>
               {{lesson || 'Bilgi Yok'}}
            </vs-td>
            <vs-td>
               <vs-button @click="getCorrectAnswer()"></vs-button>
            </vs-td>
            <!-- <template slot="expand">
               <div style="width: 100%; text-align: left; padding-left: 50px;" v-for="booklet in data[0].lessons" :key="booklet.id">
                  <h3>{{data[indextr].lessons.lessonAnswers.kitapcik}}</h3>
                  <h5>{{data[indextr].lessons.lessonAnswers.kitapcik}}</h5>
               </div>
            </template> -->
         </vs-tr>
      </template>
   </vs-table>
</template>

<script>
import axios from 'axios'
export default {
   data() {
      return {
         exam: {},
         lessons: []
      }
   },
   methods: {
      getDetail(el) {
         const me = this
         axios.get(`http://localhost:5000/api/exams/${el}`)
            .then(res => {
               me.exam = res.data
               me.lessons = res.data.lessonNames
            })
      },
      getCorrectAnswer() {
      }
   },
   async created() {
      await this.getDetail(this.$route.params.examID)
   }
}
</script>