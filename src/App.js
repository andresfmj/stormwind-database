import React, { Fragment, useState } from "react";

import Toolbar from './components/UI/Toolbar'
import Search from './containers/Search'

import Http from './helpers/http'

function App() {
  const [token, setToken] = useState(null)

  const handleRefreshToken = async () => {
    const response = await Http.instance.getToken()
    if (response) {
      localStorage.setItem('hashToken', response.access_token)
      setToken(response.access_token)
    }
  }

  const handleClearToken = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <React.Fragment>
      <Toolbar 
        onRefreshToken={handleRefreshToken} 
        onClearToken={handleClearToken}
      />
      <Search />
      
    </React.Fragment>
  )
}

export default App;
