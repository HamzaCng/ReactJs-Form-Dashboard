import api from '../auth/api';
import { toast } from 'react-toastify';

export default function Httper(method, url, data = {}, headers = {}) {
    // Eğer data bir FormData nesnesi değilse, FormData'ya dönüştür
    if (!(data instanceof FormData)) {
        const formData = new FormData();
        // data içindeki tüm anahtarları formData'ya ekle
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        data = formData;
    }

    // Eğer Content-Type header'ı varsa, FormData'nın Content-Type'ını ayarlama
    const finalHeaders = {
        ...headers,
        'Content-Type': headers['Content-Type'] || 'multipart/form-data'
    };

    return (
        api({ method, url, data, headers: finalHeaders })
            .then(function (response) {
                // console.log(response)
                // toast.success(response?.data?.message);
                return response?.data;
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
