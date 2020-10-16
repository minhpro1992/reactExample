import axios, { AxiosRequestConfig, Method } from 'axios'
// import { ObjectKeyString } from './types'
export type ObjectKeyString<T> = { [key: string]: T }
export async function callApi(
  method: string,
  url: string,
  path: string,
  data?: Record<string, unknown>
) {
  const res = await fetch(`${url}${path}`, {
    method,
    headers: {
      Accept: 'application/json'
    },

    body: JSON.stringify(data)
  })

  return res.json()
}
export const urlHasQuery = (url: string): boolean => {
  // URL already a query if '?' is in URL
  return url.indexOf('?') !== -1
}

export const addQueryToURL = (
  url: string,
  queryParams: ObjectKeyString<string>
): string => {
  let urlWithQuery = url

  Object.keys(queryParams).forEach((key) => {
    // Add query initial '?', if already present add '&'
    urlWithQuery += urlHasQuery(urlWithQuery) ? '&' : '?'
    // Add query param [key=value] to url
    urlWithQuery += `${key}=${queryParams[key] ? queryParams[key] : ''}`
  })

  return urlWithQuery
}

export async function axiosCallApi(
  method: Method,
  url: string,
  path: string,
  data?: Record<string, unknown>,
  headers = 'application/json',
  customHeaders?: Record<string, string>
) {
  const config: AxiosRequestConfig = {
    method: method,
    url: url + path,
    data: data,
    headers: {
      'Content-Type': headers,
      ...customHeaders
    }
  }

  return axios(config).then(
    (response) => response,
    (error) => Promise.reject(error.response)
  )
}
