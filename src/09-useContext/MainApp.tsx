import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage, HomePage, LoginPage, Navbar } from '.'

export const MainApp = () => {
  return (
    <>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } />

        {/* <Route path="/*" element={ <LoginPage /> } /> wildcard to redirect if route doesn't exists or just redirect like below*/}
        <Route path='/*' element={ <Navigate to='/about' /> } />
      </Routes>
    </>
  )
}
