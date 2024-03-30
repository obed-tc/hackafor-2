import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { Home } from './components/Home'
import { Registration } from './components/Registration'
import { Projects } from './components/Projects'
import { Route, Routes } from 'react-router-dom'
import { ROUTE } from './constants'

// const supabase = createClient(
// import.meta.env.VITE_PROJECT_URL,
// import.meta.env.VITE_API_KEY
// );

function App() {
  const [userSession] = useState<User | null>(null)

  useEffect(() => {
    // supabase.auth.onAuthStateChange((_event, session) => {
    // setUserSession(session?.user ?? null);
    // });
  }, [])

  console.log(userSession)

  // function signInWithDiscord() {
  //   supabase.auth.signInWithOAuth({
  //     provider: "discord",
  //   });
  // }

  // const sendMessage = () => {
  //   fetch(`${import.meta.env.VITE_BASE_API_URL}/message`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       sender: userSession,
  //       receiver: {
  //         user_metadata: {
  //           provider_id: "267695749058396183",
  //         },
  //       },
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

  {
    /* <div className="flex flex-col gap-8">
    <button className="p-4" onClick={signInWithDiscord}>
      Connect Discord
    </button>
    <button className="p-4" onClick={sendMessage}>
      Conectar
    </button>
  </div> */
  }
  return (
    <>
      <Routes>
        <Route path={ROUTE.home} element={<Home />} />
        <Route path={ROUTE.projects} element={<Projects />} />
        <Route path={ROUTE.registration} element={<Registration />} />
      </Routes>
    </>
  )
}

export default App
