import { useEffect } from 'react'

//custom hook must start with a name "use" that complies that it is custom made hook 
const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])
}

export default useDocumentTitle