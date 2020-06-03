<template>
   <div class="examCreate" style="display: flex; flex-direction: column; text-align: left;">
      <h1>Sınav Oluştur</h1>
      <vs-input placeholder="Sınav Adı" v-model="examName" style="text-align: left; margin: 20px 0 20px 0; width: 100%"></vs-input>
      <div>
         <vs-input v-model="lessonNames[0]" placeholder="İlk Ders Adı" style="margin-bottom: 5px; width: 100%"></vs-input>
         <vs-input v-model="lessonNames[1]" placeholder="İkinci Ders Adı" style="margin-bottom: 5px; width: 100%"></vs-input>
         <vs-input v-model="lessonNames[2]" placeholder="Üçüncü Ders Adı" style="margin-bottom: 5px; width: 100%"></vs-input>
         <vs-input v-model="lessonNames[3]" placeholder="Dördüncü Ders Adı" style="margin-bottom: 5px; width: 100%"></vs-input>
      </div>
      
      <input type="file" ref="resultsInput" class="hidden" accept=".txt" @change="resultsInput" style="text-align: left; margin: 20px 0 20px 0">

      <div v-if="exam.length > 0">
         <div style="text-align: left; margin-bottom: 20px;" v-for="el in exam" :key="el.id">
            <h3>Kitapçık Türü: {{el.kitapcik}}</h3>
            <h3>Sınav Türü: {{el.sinavTuru}}</h3>
            <h3>Oturum: {{el.oturum}}</h3>
            <h4>{{(lessonNames[0] || 'İlk Ders') + ':' + el.firstLesson}}</h4>
            <h4>{{(lessonNames[1] || 'İkinci Ders') + ':' + el.secondLesson}}</h4>
            <h4>{{(lessonNames[2] || 'Üçüncü Ders') + ':' + el.thirdLesson}}</h4>
            <h4>{{(lessonNames[3] || 'Dördüncü Ders') + ':' + el.fourthLesson}}</h4>
         </div>
      </div>
      <vs-button @click="saveExam" :disabled="!isCorrect">Kaydet</vs-button>
   </div>
</template>

<script>
import axios from 'axios'
export default {
   name: 'examCreate',
   data() {
      return {
         examName: 'Muafiyet',
         exam            : {},
         lessonNames     : ["İnkılap", "Tarih", "İngilizce", "Türk Dili"],
         answers         : [],
         booklets        : [],
         answerKeys      : []
      }
   },
   computed: {
      answerKeyRe() {
         return this.$store.getters.answerKeyRe
      },
      isCorrect() {
         return JSON.stringify(this.exam) !== '{}' && this.examName !== ''
      }
   },
   methods: {
      saveExam() {
         axios.post('http://localhost:5000/api/exams', this.exam)
            .then(() => {
               this.$emit('examSaved')
            })
      },
      resultsInput(event) {
         let me = this
         var input = event.target;
         me.exam = []

         var reader = new FileReader();
         reader.onload = function(){
            var text       = reader.result.split('\n');
            let sinavTuru  = text[0].match(me.answerKeyRe)[2]
            let oturum     = text[0].match(me.answerKeyRe)[3]
            let booklets   = text.map(el => el.match(me.answerKeyRe)[1])
            let answerKeys = text.map(el => el.match(me.answerKeyRe).filter((el, index) => [4, 6, 8, 10].includes(index)))
            me.exam = {
               'name': me.examName,
               'sinavTuru': sinavTuru,
               'oturum': oturum,
               'answerKeys': answerKeys,
               'booklets': booklets,
               'lessonNames': me.lessonNames
            }
            // text.forEach(el => {
            //    me.answerKeys.push( el.match(me.answerKeyRe).filter((el, index) => [4, 6, 8, 10].includes(index)) )
            //    me.booklets.push( el.match(me.answerKeyRe)[1] )
            // });
            // // console.log(me.answerKeys)
            // // console.log('booklets:', me.booklets)
            // let lessons = me.booklets.map(el => {
            //    let book = el
            //    let answers = me.lessonNames.map((lesson, indexb) => {
            //       return {
            //          "kitapcik": book,
            //          "answerKey": me.answerKeys[indexb]
            //       }
            //    })
            //    console.log('answers: ', answers)
            //    return {
            //       // "name": lessonName,
            //       "answers": answers
            //    }
            // })

            // me.exam = {
            //    "name": me.examName,
            //    "oturum": oturum,
            //    "sinavTuru": sinavTuru,
            //    "lessons": lessons
            // }
         };
         reader.readAsText(input.files[0]);
    },
   }
}
</script>