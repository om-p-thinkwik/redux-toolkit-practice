import { Provider } from 'react-redux'
import './App.css'
import ProductDisplay from './components/ProductDisplay'
import { store } from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <ProductDisplay />
      </Provider>
    </>
  )
}

export default App
