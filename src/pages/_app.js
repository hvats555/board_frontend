import '@/styles/globals.scss';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
  return <AuthProvider>
      <div>
        <Toaster />
      </div>
      <Component {...pageProps} />
    </AuthProvider>
}
