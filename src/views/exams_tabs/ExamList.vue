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
               <a href="#">
                  
               </a>
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
}
</script>

<style>
#exams-table .vs-table--tbody-table tr {
   text-align: left;  
}
#exams-table .vs-table--header {
   margin-bottom: 20px;
}
</style>