import axios from "axios";

const url = "http://localhost:8000/users/";


class loginService {

  static async login(email, password) {
    return axios.post(url + "login", {
      email,
      password
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
      
    }).then (response => { 
      if (response.data.name) {
        localStorage.setItem('user', response.data.name);
        localStorage.setItem('userId', response.data.id);

       return response.data;
      }
      else {
        console.log ("authorization error");
        return null
      }

      
    }).catch(error => console.log(error));
  }

  static async register(name, email, password){
    return axios.post(url+"register", {
      name, 
      email,
      password
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
      
    }).then (response => { 
      if (response.status == 200) {
        localStorage.setItem('user', response.data.name);
        localStorage.setItem('userId', response.data.id);
        return response.data;
      }
      else {
        console.log ("registration error");
        return null
      }

      
    }).catch(error => console.log(error));
  }

  static async logout (){
    return axios.get(url+'logout',
    { withCredentials: true })
    .then (response => { 
      if (response.status == 200) {
        localStorage.removeItem('user')
        localStorage.removeItem('role')
        localStorage.removeItem('cart')
        
      
        return response.data;
      }
      else {
        console.log(response)
        alert ("logout error");
        return null
      }      
    }).catch(error => console.log(error));
  }
  

}

export default loginService;
