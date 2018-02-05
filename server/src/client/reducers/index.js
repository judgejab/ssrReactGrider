import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import adminsReducer from './adminsReducer'
import authReducer from './authReducer'

export default combineReducers({
  users: userReducer,
  admins: adminsReducer,
  auth: authReducer
})
