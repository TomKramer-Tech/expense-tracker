import React, { useContext } from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:4000/api./v1/";

const globalContext = React.createContext()

export const globalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    return (
        <globalContext.Provider value={'hello'}>
            {children}
        </globalContext.Provider>
    )
}

export const useGlobalContext= () => {
    return useContext(globalContext)
}