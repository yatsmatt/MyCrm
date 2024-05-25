import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";

export const check=(message, setMessage)=>{
    axios.get('http://127.0.0.1:8000/api/main/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
}
