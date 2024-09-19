import axios from 'axios';

//Example : var response = await Httper("get", "https://rickandmortyapi.com/api/character");

export default function Httper(method, url, data, headers) {

    //check token expired date-time
    return (
        axios({ method, url, data, headers })        
            .then(function (response) {
                // handle success                   
                return response?.data?.results
            })
            .catch(function (error) {
                // handle error            
                console.log(error);
            })
            .finally(function () {
                // always executed
                console.log("Done!");
            })
    )
}
