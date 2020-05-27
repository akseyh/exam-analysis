<template>
   <vs-tabs id="tabs" alignment="fixed" color="olive" :value="indexTabs">
      <vs-tab label="Sınavlar" @click="indexTabs = 0">
         <exam-list :exams="exams"></exam-list>
      </vs-tab>
      <vs-tab label="Sınav Ekle" @click="indexTabs = 1">
         <exam-create @examSaved="examSaved"></exam-create>
      </vs-tab>
   </vs-tabs>
</template>

<script>
import ExamList from './exams_tabs/ExamList'
import ExamCreate from './exams_tabs/ExamCreate'
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
         this.exams = [
            {
            "id": 1,
            "name": "Muafiyet - 2020",
            },
            {
            "id": 2,
            "name": "Uzaktan Eğitim Sınavı - 2020",
            },
            {
            "id": 3,
            "name": "Uzaktan Eğitim Sınavı - 2021"
            }
         ]
      },
      examSaved(exam) {
         this.exams.push(exam)
         this.indexTabs = 0
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