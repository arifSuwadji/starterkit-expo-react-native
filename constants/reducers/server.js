const initialState = {
    host: 'http://192.168.43.122/',
    urlPath: 'siWarga/api/',
    urlPathOtp: '/codeOtp/',
    urlPathLogin: 'pengguna/login'
}

const server = (state = initialState, action) => {
    switch(action.type){
        default:
            return {
            ...state
        }
    }
}
export default server;