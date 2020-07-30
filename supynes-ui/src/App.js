import React, {useState} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from "./components/Menu";
import Content from "./components/Content";
import {BrowserRouter as Router} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from '@material-ui/core/styles';

const UserContext = React.createContext(null)

function App() {
  const [user, setUser] = useState(null);

  const userContextState = {
    user,
    login: (user) => setUser(user),
    logout: () => setUser(null),
    loggedIn: () => !!user
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    }
  }));
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <CssBaseline />
        <UserContext.Provider value={userContextState}>
          <Router>
            <Header/>
            <Menu/>
            <Content/>
            <Footer/>
          </Router>
        </UserContext.Provider>
      </div>
  )
}

export default App;
export {UserContext}
