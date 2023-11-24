import { Route, Routes } from "react-router-dom"
import Layout from "./components/layouts/Layout"
import HomeScreen from "./features/home/HomeScreen"
import SignInScreen from "./features/auth/SignInScreen"
import SignUpScreen from "./features/auth/SignUpScreen"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CreateTopicScreen from "./features/topic/components/CreateTopicScreen"
import UpdateTopicScreen from "./features/topic/components/UpdateTopicScreen"
import TopicDetailScreen from "./features/topic/components/TopicDetailScreen"


function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/sign-in" element={<SignInScreen />} />
            <Route path="/sign-up" element={<SignUpScreen />} />
            <Route path="/topic/create" element={<CreateTopicScreen />} />
            <Route path="/topic/update/:id" element={<UpdateTopicScreen />} />
            <Route path="/topic/:id" element={<TopicDetailScreen />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  )
}

export default App
