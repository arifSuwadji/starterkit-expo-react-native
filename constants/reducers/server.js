const initialState = {
    host: 'http://192.168.43.122/',
    urlPath: 'api',
    urlPathRegister: 'warga-register',
    urlPathLogin: 'login',
    urlPathWarga: 'warga',
    urlPathWargaEdit: 'edit',
    urlPathWargaUpdate: 'update'
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