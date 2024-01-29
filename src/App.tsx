import { Routes, Route } from 'react-router-dom';

import AuthLayout from '@/_auth/AuthLayout';
import SigninForm from '@/_auth/forms/SignInForm';
import SignUpForm from '@/_auth/forms/SignUpForm';
import RootLayout from '@/_root/RootLayout';
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  LikedPosts,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from '@/_root/pages';
import { Toaster } from '@/components/ui/toaster';

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
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />

          <Route path='/all-users' element={<AllUsers />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<EditPost />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/profile/:id/*' element={<Profile />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/update-profile/:id' element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
}

export default App;
