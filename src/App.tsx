import { Routes, Route } from 'react-router-dom';

import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import SigninForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';

import './globals.css';

function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout />}></Route>
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
