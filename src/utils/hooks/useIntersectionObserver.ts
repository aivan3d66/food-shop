import { useEffect } from 'react'

type IntersectionObserverType = {
    target: any,
    onIntersect: any,
    threshold: number,
    rootMargin: string,
}

const useIntersectionObserver = (
    {
        target,
        onIntersect,
        threshold = 0.1,
        rootMargin = '0px',
    }: IntersectionObserverType,
) => {
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, {
            rootMargin,
            threshold,
        })
        const current = target.current
        observer.observe(current)
        return () => {
            observer.unobserve(current)
        }
    })
}
export default useIntersectionObserver
