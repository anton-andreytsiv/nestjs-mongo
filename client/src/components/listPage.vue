<template>
    <div class="container mt-5 col-7">
        <div class="row">
        <div class="list-group">
        <div class="row" v-for="item in listOfQuestions" :key="item._id">
            <div class="col-10 text-start" >
            <a  href="#" class="list-group-item list-group-item-action">
            <router-link :to="{ name: 'themePage', params: { themeId: item._id }}">{{item.title}} </router-link></a>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-success" @click="$router.push({path:'/edit/'+item._id})" >edit</button>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-success" @click="delTheme(item._id)" >del</button>
            </div>
       </div>
        </div>
        <div class="row py-2">
            <div class="col-12"><button type="button" class="btn btn-primary" @click="$router.push({path:'/add'})">Add new theme of questions</button></div>
        </div>
    </div>

</div>
</template>

<script>
import { ref } from 'vue'
import listService from '@/services/listService'

export default {
  name: 'listPage',
    
async setup(){
    const listOfQuestions = ref([])
    listOfQuestions.value = await listService.getListOfQuestions()
    return {listOfQuestions}
    },

    methods:{

async delTheme(id){
    if(confirm('Do you rilly want to delete this theme?')){
        const res = await listService.delTheme(id)
        if (res){
            this.listOfQuestions = await listService.getListOfQuestions()
        } else {
            alert('error of delete')
        }
    }
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>