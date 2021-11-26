import axios from "axios"
export const Request = (props) => {
    const { method, endpoint, data  } = props
    return axios({
        method: method.toLowerCase(),
        url: `http://localhost:49381/api/${endpoint}`,
        data: data,
        // headers: {
        //     "content-type": "multipart/form-data"
        // }
    })
        .then(response => response.data) 
        .catch (error =>({ error }))
}
