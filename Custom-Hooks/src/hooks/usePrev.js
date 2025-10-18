import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    const ref = useRef(); // when the value changes it holds the prev value

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current
}

// it returns first, useEffect gets called later