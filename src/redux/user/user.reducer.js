import { UserActionTypes } from './user-types'


const INITIAL_STATE = {

    currentUser: null
}

const userReducer = (currentState = INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        case UserActionTypes.SetCurrentUser :
            return{

                ...currentState,
                currentUser: action.payload
            }
        default:
            return currentState;
    }
}

export default userReducer