<template>
   <vs-tabs id="tabs" alignment="fixed" color="olive">
      <vs-tab label="Sınavlar">
         <exam-list :users="users"></exam-list>
      </vs-tab>
      <vs-tab label="Sınav Ekle">
         <exam-create></exam-create>
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
   data:()=>({
      users:[
         {
         "id": 1,
         "name": "Muafiyet - 2020",
         "date": "02.05.2020"
         },
         {
         "id": 2,
         "name": "Uzaktan Eğitim Sınavı - 2020",
         "date": "12.05.2020"
         },
         {
         "id": 3,
         "name": "Uzaktan Eğitim Sınavı - 2021",
         "date": "12.05.2021"
         }
      ]
   })
}
</script>

<style>
#exams-table .vs-table--tbody-table tr {
   text-align: left;  
}
#exams-table .vs-table--header {
   margin-bottom: 15px;
}
#tabs {
   
}
</style>