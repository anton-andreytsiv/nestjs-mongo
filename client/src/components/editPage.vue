<template>
    <div class="container m-3">
    <div class="row">
      <div class="col-8">
        <div class="mb-3 p-2 row">
            <label for="tittle" class="col-form-label text-start col-3">Title</label>
            <div class="col-7">
              <input type="text" class="form-control col-5" v-model="data.title" placeholder="tittle of questions theme" />
            </div>
            <div class="col-2 d-grid">
                <button type="button" class="btn btn-info"  @click="saveTheme()">save</button>
            </div>
        </div>
        <div v-for="(question, index) in data.questions" :key="'question'+index" class="border mb-2 p-2">
          <div class="mb-3 row" >
            <label for="question" class="col-form-label text-start col-3">Question #{{incrementIndex(index)}}</label>
            <div class="col-7">
              <input type="text" v-model="question.question" class="form-control"  placeholder="Question" >
            </div>
            <div class="col-2 d-grid">
                <button type="button" class="btn btn-info" :ref="'saveQ' + index" @click="delQuestion(question.id)">Del</button>
            </div>
          </div>
          <div class="mb-3 row" v-for="(answer, aIndex) in question.answers" :key="aIndex">
             <label for="answer" class="col-form-label text-start col-3">Answer #{{incrementIndex(aIndex)}}</label>
             <div class="col-7">
               <textarea class="form-control"  rows="3" v-model="answer.answer"  ></textarea>
             </div> 
             <div class="col-2 d-grid">
              <button type="button" class="btn btn-primary" @click="delAnswer(index, answer.id)">Del</button>
             </div>         
          </div>
          <div class="mb-3 row">
            <div class="col-10"></div>
            <div class="col-2 d-grid gap-2">
              <button type="button" class="btn btn-primary" @click="addAnswer(index)">Add</button>
            </div>
          </div>
        </div>
     
    
    <div class="row py-2">
      <div class="col-7"></div>
      <div class="col-5 d-flex flex-row-reverse"><button type="button" class="btn btn-primary" @click="addQuestion()">Add question</button></div>        
    </div>
      </div>
    </div>
     </div> 
  
  </template>
  
  <script>
  import listService from '@/services/listService'
  import { incrementIndex, addAnswer, addQuestion, delAnswer, delQuestion } from '../services/modules'
  import { ref } from 'vue'
  
  export default {
    name: 'editPage',
    props: ['themeId'],

    async setup(props){
      let data = ref()
      if(props.themeId){
         data.value = await listService.getQuestionsByListId(props.themeId)
      }
    return { data, incrementIndex, addAnswer, addQuestion, delAnswer, delQuestion }
    },
  methods:{

    async saveTheme(){
        const res = await listService.updList(this.data)
        if (res){
            this.data.title = res.title
            alert('Theme is updated')
        } else {
            alert('error of update')
        }
    }
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  </style>