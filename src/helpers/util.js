import axios from 'axios'

const doRequest = async (method, url) => {
    try {
        const request = await fetch(url, {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Authorization': 'Bearer ...' // set this first in order to make any http request
            }
        })
        if (request.status == '200') {
            const response = await request.json()
            return response
        } else {
            return null
        }
    } catch (err) {
        console.log(err)
        return null
    }
}

axios.defaults.baseURL = 'https://us.api.blizzard.com/data/wow'
axios.defaults.headers.common['Authorization'] = 'Bearer ...' // set this first in order to make any http request


export { doRequest, axios }