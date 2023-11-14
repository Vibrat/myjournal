import Bchat from './modules/bchat-client'

import './styles/index.scss'

function App() {

  return (
    <>
      <button onClick={() => {
        const response = Bchat.createConversation();
        console.log("response 2 ", response)
      }}>Create Conversation</button>
    </>
  )
}

export default App
