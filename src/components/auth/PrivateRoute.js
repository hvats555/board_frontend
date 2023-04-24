import React, {useEffect} from "react"
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from 'next/router';

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const { push } = useRouter();


  useEffect(() => {
    if(!currentUser) {
      console.log(currentUser)
      push('/login');
    }
  }, []);

  return (
    <div>
        { children }
    </div>
  )
}