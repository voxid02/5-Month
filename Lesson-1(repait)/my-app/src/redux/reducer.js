const initialState = {
    menu: false,
    value: '',
    users:[]
}
 
 
 export default function reducer (state  = initialState , action){
    if(action.type === 'CHANG_TITLE'){
          return {...state, title:'hello geeks'}
    }else if (action.type === 'HANDLE_MENU') {
        return {...state, menu: !state.menu}
    }else if( action.type === 'VALUE') {
      return { ...state, value: action.payload }
    }else if (action.type === "ADD_USER"){
      return {...state, users: [...state.users, action.payload], value: ''}
    }else if( action.type === "DELET_ALL"){
      return {...state, users : [], value: ''}
    }
    return state
 }