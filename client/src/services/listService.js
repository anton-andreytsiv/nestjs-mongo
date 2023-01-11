import axios from "axios";


const url = "http://localhost:3000/list/";


class listService {


static async getListOfQuestions() {

  return axios.get(url,{
    withCredentials: true
  }).then (response => { 
    if (response.status == 200) {   
      return response.data;
    }
    else {
      alert ("data fetch error");
      return null
    }    
  }).catch(error => console.log(error));
}

static async getQuestionsByListId(themeId) {

  return axios.get(url + themeId,{
    withCredentials: true
  }).then (response => { 
    if (response.status == 200) {      
      return response.data;
    }
    else {
      alert ("data fetch error");
      return null
    }    
  }).catch(error => console.log(error));
}

static async saveToList(data){
  
  return axios.post(url + "addQuestionList", data, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
    
  }).then (response => { 
    if (response.data) {
     return response.data;
    }
    else {
      console.log ("error of saving list");
      return null
    }    
  }).catch(error => console.log(error));
}

static async updList(data){
  return axios.put(url,data, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
    
  }).then (response => { 
    if (response.data) {
     return response.data;
    }
    else {
      console.log ("error of update list");
      return null
    }    
  }).catch(error => console.log(error));

}

static async delTheme(id){
  return axios.delete(url + id, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
    
  }).then (response => { 
    if (response.data._id ) {
     return response.data;
    }
    else {
      console.log ("error of update list");
      return null
    }    
  }).catch(error => console.log(error));

}

}

export default listService;
