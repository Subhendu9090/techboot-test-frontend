import axios, { AxiosRequestConfig } from 'axios'

const API_BASE_URL = "https://cc.qwegle.com/adminapi/"

const apiCall = async (
  uri: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET',
  data: any = {},
  token: string | null = null,
  contentType: string | null = null
) => {
  try {
    let config: AxiosRequestConfig = {
      method: method,
      url: API_BASE_URL + uri,
      headers: {
        'Content-Type': contentType ? contentType : 'application/json',
        Accept: 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      data: data,
      responseType: 'json',
      // withCredentials: true
    }

    // Make the API call
    const response = await axios(config)
    return {
      success: true,
      data: response.data
    }
  } catch (error: any) {
    console.error('API call error:', error)

    return {
      success: false,
      message: error.response ? error.response.data : 'An error occurred'
    }
  }
}

export const HttpClient = { apiCall }
