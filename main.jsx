import ReactDOM from 'react-dom/client'
import { App } from './src/components/App'

const root = document.getElementById('app')
const reactRoot = ReactDOM.createRoot(root)

reactRoot.render(<App/>)