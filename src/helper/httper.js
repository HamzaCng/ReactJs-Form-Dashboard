import api from '../auth/api';
import { toast } from 'react-toastify';

export default function Httper(method, url, data = {}, headers = {}) {
    return (
        api({ method, url, data, headers })
            .then(function (response) {
                // console.log(response)  
                // toast.success(response?.data?.message);       
                return response?.data
            })
            .catch(function (error) {
                // console.log(error?.response);
                toast.error(`Hata oluştu: ${error?.response?.data?.message}`);
            })
            .finally(function () {
                // console.log("Done!");
            })
    );
}
