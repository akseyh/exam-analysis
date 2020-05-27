<template>
   <div class="examCreate" style="display: flex; flex-direction: column; text-align: left;">
      <h1>Sınav Oluştur</h1>
      <vs-input placeholder="Sınav Adı" v-model="examName" style="text-align: left; margin: 20px 0 20px 0; width: 100%"></vs-input>
      
      <input type="file" ref="resultsInput" class="hidden" accept=".txt" @change="resultsInput" style="text-align: left; margin: 20px 0 20px 0">

      <div v-if="exam.length > 0">
         <div style="text-align: left; margin-bottom: 20px;" v-for="el in exam" :key="el.id">
            <h3>Kitapçık Türü: {{el.kitapcik}}</h3>
            <h3>Sınav Türü: {{el.sinavTuru}}</h3>
            <h3>Oturum: {{el.oturum}}</h3>
            <h4>İlk Ders: {{el.firstLesson}}</h4>
            <h4>İkinci Ders: {{el.secondLesson}}</h4>
            <h4>Üçüncü Ders: {{el.thirdLesson}}</h4>
            <h4>Dördüncü Ders: {{el.fourthLesson}}</h4>
         </div>
      </div>
      <vs-button @click="saveExam" :disabled="!isCorrect">Kaydet</vs-button>
   </div>
</template>

<script>
import store from '../../store/index'
export default {
   name: 'examCreate',
   data() {
      return {
         examName: '',
         exam           : []
      }
   },
   computed: {
      answerKeyRe() {
         return store.getters.answerKeyRe
      },
      isCorrect() {
         return this.exam.length > 0 && this.examName !== ''
      }
   },
   methods: {
      saveExam() {
         this.$emit('examSaved', {
            name: this.examName,
            detail: this.exam
         })
      },
      resultsInput(event) {
         let me = this
         var input = event.target;

         var reader = new FileReader();
         reader.onload = function(){
            var text         = reader.result.split('\n');
            text.forEach(el => {
               me.exam.push({
                  kitapcik      : el.match(me.answerKeyRe)[1],
                  sinavTuru     : el.match(me.answerKeyRe)[2],
                  oturum        : el.match(me.answerKeyRe)[3],
                  firstLesson   : el.match(me.answerKeyRe)[4],
                  secondLesson  : el.match(me.answerKeyRe)[6],
                  thirdLesson   : el.match(me.answerKeyRe)[8],
                  fourthLesson  : el.match(me.answerKeyRe)[10]
               })
               
            });
         };
         reader.readAsText(input.files[0]);
    },
   }
}
</script>