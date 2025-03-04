import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center space-x-4 py-6">
        <a href="https://vite.dev" target="_blank" className="hover:opacity-80">
          <img src={viteLogo} className="logo w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:opacity-80">
          <img src={reactLogo} className="logo w-24 h-24 react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-center text-gray-800">Vite + React</h1>
      <div className="card mt-6 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
        <button 
          onClick={() => setCount((count) => count + 1)} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="font-mono bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-center text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
