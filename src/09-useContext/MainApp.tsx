import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage, HomePage, LoginPage, Navbar } from '.'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr className='mt-2 mb-2' />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } />

        {/* <Route path="/*" element={ <LoginPage /> } /> wildcard to redirect if route doesn't exists or just redirect like below*/}
        <Route path='/*' element={ <Navigate to='/about' /> } />
      </Routes>
    </UserProvider>
  )
}
