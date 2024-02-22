import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import PrivatePath from './PrivatePath'
import Dashboard from '../dashboard'

function HandlePath() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Frontend />} />
                <Route path='/auth/*' element={<Auth />} />
                <Route path='dashboard/*' element={<PrivatePath Component={Dashboard} />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default  HandlePath;
