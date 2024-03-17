import MainLayout from './components/layout'
import ContentItens from './components/layout/ContentItens'
import { useGetPeopleQuery } from './store/services/operation-api'
import './theme/globals.css'

// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans'

function App() {

  const {data} = useGetPeopleQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })

  console.log(data)

  return (
    <MainLayout>
      <ContentItens />
    </MainLayout>
  )
}

export default App
