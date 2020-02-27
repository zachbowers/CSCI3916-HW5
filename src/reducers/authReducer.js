import constants from '../constants/actionTypes'

var initalState={
    loggedin: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('username') ? localStorage.getItem('username'):''

}

export default (state = initalState, action)=>{
    var updated = Object.assign({},state);

    switch(action.type){
        case constants.USER_LOGGEDIN:
            updated["loggedin"]=true;
            updated['username']=action.username;
        return updated;

        case constants.USER_LOGOUT:
            updated["loggedin"]=false;
            updated['username']='';
            return updated;

        default:
            return state;


    }
}