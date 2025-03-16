import { AppContext } from './AppContext'
import { doctors } from '../assets/assets'

const AppContextProvider = ({ children }) => {

    const value = {
        doctors
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;