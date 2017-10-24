import { createStore } from 'redux'
const initState={
  signform:[],
  loginform:[],
  data:[],
  newdata:[]
}
const rootReducer=(state=initState,action)=>{
  switch(action.type){
    case 'SIGNDATA':
      return {...state,signform:[...state.signform,action.data]}
    case 'LOGIN':
    console.log({...state,loginform:[...state.loginform,{username:action.login}]});
      return {...state,loginform:[...state.loginform,{username:action.login}]}
    case 'UPDATA_DATA':
    // console.log(action.data);
      return {...state,data:[...state.data,action.data]}
    case 'UPDATA_DATA_SUAN':
    console.log(action.path);
       return {...state,data: action.path}
    case 'DELETE_DATA':
      return {...state,data:''}
    default:
      return state
  }
}
const store = createStore(rootReducer)

export default store
