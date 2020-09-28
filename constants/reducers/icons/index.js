import iconsTypeAction from './iconsTypeAction';

const initialState = {
    iconHidePassword: 'ios-eye-off',
    iconShowPassword: 'ios-eye',
    securePassword: true,
    secureFalsePassword : false
}

const icons = (state = initialState, action) => {
    switch(action.type){
        case iconsTypeAction.HIDE_TEXT:
            return {
                ...state,
                iconHidePassword: action.hideText,
            }
        case iconsTypeAction.SHOW_TEXT:
            return {
                ...state,
                iconHidePassword: action.showText,
            }
        case iconsTypeAction.SECURE_TEXT:
            return{
                ...state,
                securePassword: action.secureText
            }
        default:
            return {
                ...state
            }
    }
}
export default icons;