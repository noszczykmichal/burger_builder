import axios from 'axios';


const instance=axios.create({
    baseURL: 'https://react-burger-builder-c365e-default-rtdb.europe-west1.firebasedatabase.app/'
})


export default instance;