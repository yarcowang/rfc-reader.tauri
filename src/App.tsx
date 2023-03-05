import { useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import reactLogo from './assets/react.svg'

function App() {
  const [rfc, setRfc] = useState<string>('')

  function fetch_rfc() {
    invoke<string>('fetch_rfc', {rfc: '2131'}).then(data => {
      setRfc(data)
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <div className="p-3">
      <div>
        <input type="text" placeholder="rfc number..." className="p-0.5 border-2 rounded-l" />
        <button onClick={() => fetch_rfc() } className="p-0.5 border-2 rounded-r">Fetch</button>
      </div>
      <pre className="p-2 text-sm">
        {rfc}
      </pre>
    </div>
  )
}

export default App
