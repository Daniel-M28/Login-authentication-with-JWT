import {Routes, Route} from 'react-router-dom'
import { Login } from  '../pages/Login'
import {Register} from '../pages/Register'
import { Welcome} from '../pages/Welcome'
import { Error404 } from '../pages/Error404'
import { Profile } from '../pages/Profile'
import { ProtectedRoute } from '../components/ProtectedRoute'
import { GuestRoute } from '../components/GuestRoute'

export function AppRouter(){

    return(

        <Routes>
            <Route path='/'         element={<Welcome/>} />
            <Route path='/register' element={<GuestRoute><Register/></GuestRoute>} />
            <Route path='/login'    element={<GuestRoute><Login/></GuestRoute>} />
            <Route path='/profile'  element={<ProtectedRoute> <Profile /></ProtectedRoute>} />
            <Route path='*'        element={<Error404/>} />
        </Routes>
    )
}