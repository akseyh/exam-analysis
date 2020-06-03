<template>
   <vs-table :data="exams" id="exams-table">
      <template slot="header">
         <h3>
            Sınavlar
         </h3>
      </template>
      <template slot="thead">
         <vs-th>
            Sınav Adı
         </vs-th>
         <vs-th>
            İşlemler
         </vs-th>
      </template>

      <template slot-scope="{data}">
         <vs-tr :key="indextr" v-for="(tr, indextr) in data" :style="indextr %  2 === 0 ? 'background: #CFD4D4' : 'background: #BEC2C2'">
            <vs-td>{{tr.name || 'Bilgi Yok'}}</vs-td>
            <vs-td>
               <vs-button @click="getDetail(tr)" radius color="primary" type="border" icon="library_books"></vs-button>
               <vs-button @click="deleteExam(tr)" radius color="danger" type="gradient" icon="delete_outline" style="margin-left: 10px;"></vs-button>
            </vs-td>
         </vs-tr>
      </template>
   </vs-table>
</template>

<script>
export default {
   props: {
      exams: {
         type: Array,
         default: () => [],
      }
   },
   data() {
      return {
         selectedExam: []
      }
   },
   methods: {
      getDetail(el) {
         this.$emit('clickedExam', el)
      },
      deleteExam(el) {
         this.$emit('deleteExam', el)
      }
   }
}
</script>