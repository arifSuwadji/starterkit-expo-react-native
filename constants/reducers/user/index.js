import userTypeAction from './userTypeAction';

const initialState = {
    idUser: 0,
    namaUser: '',
    hpUser: '',
    emailUser: '',
    alamatUser: '',
    passwordUser: '',
    saldoUser: 0,
    tokenUser: '',
    isLoged: 0,
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case userTypeAction.ID_USER:
            return {
                ...state,
                idUser: action.idUser
            }
        case userTypeAction.NAMA_USER:
            return {
                ...state,
                namaUser: action.namaUser
            }
        case userTypeAction.HP_USER:
            return {
                ...state,
                hpUser: action.hpUser
            }
        case userTypeAction.EMAIL_USER:
            return {
                ...state,
                emailUser: action.emailUser
            }
        case userTypeAction.ALAMAT_USER:
            return {
                ...state,
                alamatUser: action.alamatUser
            }
        case userTypeAction.PASSWORD_USER:
            return {
                ...state,
                passwordUser: action.passwordUser
            }
        case userTypeAction.TOKEN_USER:
            return {
                ...state,
                tokenUser: action.tokenUser
            }
        case userTypeAction.IS_LOGED:
            return {
                ...state,
                isLoged: action.isLoged
            }
        default:
            return {
                ...state
            }
    }
}

export default user;