
import { BrowserRouter, Routes, Route, Navigate, type RouteProps } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import { appRoutes } from './router/routes'
import './App.css'

function App(props:RouteProps) {

  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((route, index) => (
            <Route 
            key={index + route.name}
            path={route.path} 
            element={<AdminLayout {...props}>{route.element}</AdminLayout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
