export const initialState = {
    avatar: '',
    recents: [],
    lista: {}
};

export const UserReducer = (state , action ) => {
    switch(action.type){
        case 'setAvatar':
            return {...state, avatar: action.payload.avatar};
        break;
        case 'setList':
            return {...state, lista: action.payload.lista};
        break;
        default:
            return state;
    }
}