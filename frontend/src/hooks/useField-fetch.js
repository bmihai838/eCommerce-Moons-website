import { useEffect, useState } from "react";
import axios from "axios";

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const reset = () => setValue('')

    return {
        inputProps: { type, value, onChange},
        value,
        reset
    }
}

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (err) {
                setError(err.message || 'An error occured')
            } finally {
                setLoading(false)
            }
        }

    fetchData()
    }, [url])

    

    return { data, loading, error }
}