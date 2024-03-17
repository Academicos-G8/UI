import MainLayout from './components/layout'
import ContentItens from './components/layout/ContentItens'
import './theme/globals.css'

// Supports weights 200-800
import '@fontsource-variable/plus-jakarta-sans'

function App() {
  return (
    <MainLayout>
      <ContentItens/>
     </MainLayout>
  )
}

export default App
