import {useRef, useState} from "react"

function getRefValue(ref) {
    return ref.current
}

// extension of `useState` to be able to access the state as a ref
function useStateRef(defaultValue) {
    const ref = useRef(defaultValue)
    const [state, _setState] = useState(defaultValue)
    const setState = value => {
        _setState(value)
        ref.current = value
    }

    return [state, setState, ref]
}

export {getRefValue, useStateRef}