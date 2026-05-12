import {Routes, Route} from 'react-router-dom'

import { Login } from  '../pages/Login'
import {Register} from '../pages/Register'
import { Welcome} from '../pages/Welcome'
import { Error404 } from '../pages/Error404'

export function AppRouter(){

    return(

        <Routes>
            <Route path='/'         element={<Welcome/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login'    element={<Login/>} />
            <Route path='/*'      element={<Error404/>} />
        </Routes>
    )
}