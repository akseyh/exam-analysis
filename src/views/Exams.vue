<template>
   <vs-tabs id="tabs" alignment="fixed" color="olive" :value="indexTabs">
      <vs-tab label="Sınavlar" @click="indexTabs = 0">
         <exam-list :exams="exams" @clickedExam="getDetail" @deleteExam="deleteExam"></exam-list>
      </vs-tab>
      <vs-tab label="Sınav Ekle" @click="indexTabs = 1">
         <exam-create @examSaved="examSaved"></exam-create>
      </vs-tab>
   </vs-tabs>
</template>

<script>
import ExamList from './exams_tabs/ExamList'
import ExamCreate from './exams_tabs/ExamCreate'
import axios from 'axios'
export default {
   components: {
      ExamList,
      ExamCreate
   },
   data() {
      return {
         exams:[],
         indexTabs: 0
      }
   },
   methods: {
      getData() {
         axios.get('http://localhost:5000/api/exams')
            .then(res => { this.exams = res.data })
      },
      examSaved() {
         this.indexTabs = 0
         this.getData()
      },
      getDetail(exam) {
         this.$router.push({name: 'ExamDetail', params: {examID: exam._id}})
      },
      deleteExam(exam) {
         axios.delete(`http://localhost:5000/api/exams/${exam._id}`)
            .then(() => this.getData())
      }
   },
   created() {
      this.getData()
   }
}
</script>

<style>
#exams-table .vs-table--tbody-table tr {
   text-align: left;  
}
#exams-table .vs-table--header {
   margin-bottom: 15px;
}
</style>