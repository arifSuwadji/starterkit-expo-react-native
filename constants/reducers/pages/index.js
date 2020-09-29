import pagesTypeAction from './pagesTypeAction';

const initialState = {
    nextPage: '',
    defaultPage: 'Login',
    nextAuthPage: '',
    defaultAuthPage: 'Home',
    timeoutLoading: 500,
    isLoading: true
}

const pages = ( state = initialState, action) => {
    switch(action.type){
        case pagesTypeAction.NEXT_PAGE:
            return {
                ...state,
                nextPage: action.nextPage
            }
        case pagesTypeAction.NEXT_AUTH_PAGE:
            return {
                ...state,
                nextAuthPage: action.nextAuthPage
            }
        case pagesTypeAction.TIMEOUT_LOADING:
            return {
                ...state,
                timeoutLoading: action.timeoutLoading
            }
        case pagesTypeAction.IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case pagesTypeAction.DEFAULT_PAGE:
            return {
                ...state,
                defaultPage: action.defaultPage
            }
        case pagesTypeAction.DEFAULT_AUTH_PAGE:
            return {
                ...state,
                defaultAuthPage: action.defaultAuthPage
            }
        default:
            return {
                ...state
            }
    }
}

export default pages;