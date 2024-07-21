import axios from "axios";

const URL = "http://127.0.0.1:8000/api/";

export const check=(message, setMessage)=>{
    axios.get(`${URL}home/`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
}
export const addUser=(user)=>{
  console.log("22",user)
  
  axios.post(`${URL}users/`,user).then(response=>{console.log("user been add",response.data)})
  .catch(error=>{console.log("adding falid",error)})
}
export const deleteUser=(email)=>{
  console.log(email)
  axios.delete(`${URL}users/delete-by-email/`, { data: { email: email } }).then(response=>{console.log("user deleted",response.data)})
  .catch(error=>{console.log("deleted faild 1",error)})
}

export const getAll=()=>{
  axios.get(`${URL}users/`, ).then(response=>{console.log("users list",response.data)})
  .catch(error=>{console.log("list faild",error)})
}
export const getUser=(email)=>{
  axios.get(`${URL}users/get-by-email`,{params:{email}}).then(response=>{console.log("here is user",response.data)})
  .catch(error=>{console.log("user no found",error)})
}