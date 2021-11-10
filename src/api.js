import axios from "axios";



function query(sql){
    return axios.get(`https://us-central1-cs411-project-328717.cloudfunctions.net/forward?query=${sql}`)
        .then((response) => response.data["results"]);
    //return axios.get(`http://127.0.0.1:8000/forward?query=${sql}`);
    // return axios.get('https://pokeapi.co/api/v2/pokemon/');
    // .then((response) => {
    //     response.data;
    // });
}

//async function query(sql: string){
//     const res = await fetch(`https://us-central1-cs411-project-328717.cloudfunctions.net/forward?query=${sql}`);
    
// }

export default query;