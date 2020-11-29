export const GET_DETAIL_USER_REQUEST = 'GET DETAIL USER REQUEST'
export const GET_DETAIL_USER_SUCCESS = 'GET DETAIL USER SUCCESS'
export const GET_DETAIL_USER_FAIL = 'GET DETAIL USER FAIL'

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: { [key: string]: string },
    phone: string,
    website: string,
    company: { [key: string]: string }
}

export type UserReducerProps = {
    isLoading: boolean,
    error: boolean,
    user: UserType | {}
}