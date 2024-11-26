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
        setValue,
        reset: () => setValue('')
    }
}

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(url)
            setData(response.data)
        } catch (err) {
            setError(err.message || 'An error occured')
        } finally {
            setLoading(false)
        }
    }
        useEffect(() => {
            fetchData()
        }, [url])

    

    return { data, loading, error, refetch: fetchData }
}