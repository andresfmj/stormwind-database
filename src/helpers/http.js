import * as Constants from './constants';

class Http {
    static instance = new Http();

    request = async (uri, method) => {
        const token = localStorage.getItem('hashToken')
        if (!token) {
            throw Error('No token set')
        }

        try {
            let response = await fetch(`${Constants.API_URL}${uri}`, {
                method,
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Authorization': `Bearer ${token}` // set this first in order to get any http request
                }
            })
            if (response.status == '200') {
                return await response.json()
            } else {
                return null
            }
        } catch (err) {
            console.log('request error: ', err)
            return null
        }
    }

    getToken = async () => {
        try {
            let token = `${Constants.API_CLIENT_ID}:${Constants.API_CLIENT_SECRET}`
            let hash = btoa(token)
            
            const params = new URLSearchParams()
            params.append('grant_type', 'client_credentials')
            
            let response = await fetch(`${Constants.API_TOKEN_URL}`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Basic ${hash}`
                },
                body: params
            })
            if (response.status == '200') {
                return await response.json()
            } else {
                return null
            }
        } catch (err) {
            console.log('request error: ', err)
            return null
        }
    }

}

export default Http;
