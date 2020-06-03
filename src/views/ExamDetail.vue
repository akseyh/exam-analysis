<template>
   <vs-table :data="exam" id="exams-table">
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
         <vs-tr :key="indextr" v-for="(tr, indextr) in data[0].lessons.lessonNames" :style="indextr %  2 === 0 ? 'background: #CFD4D4' : 'background: #BEC2C2'">
            <vs-td>{{tr || 'Bilgi Yok'}}</vs-td>
            <vs-td>
               <a href="#">
                  <vs-button @click="getCorrectAnswer(tr)"></vs-button>
               </a>
            </vs-td>
            <template slot="expand">
               <div style="width: 100%; text-align: left; padding-left: 50px;" v-for="booklet in data[0].lessons" :key="booklet.id">
                  <h3>{{data[indextr].lessons.lessonAnswers.kitapcik}}</h3>
                  <h5>{{data[indextr].lessons.lessonAnswers.kitapcik}}</h5>
               </div>
            </template>
         </vs-tr>
      </template>
   </vs-table>
</template>

<script>
import axios from 'axios'
export default {
   data() {
      return {
         exam: []
      }
   },
   methods: {
      getDetail(el) {
         const me = this
         axios.get(`http://localhost:5000/api/exams/${el}`)
            .then(res => {
               me.exam.push(res.data)
            })
      },
      getCorrectAnswer(el) {
         console.log(el.answerKey)
      }
   },
   async created() {
      await this.getDetail(this.$route.params.examID)
   }
}
</script>