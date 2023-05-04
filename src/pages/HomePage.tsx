import { useEffect } from "react"
import { useGlobalStore } from "../redux-toolkit/store"

const  HomePage = () => {

    const {getBikeList, bikeSelect} = useGlobalStore()
    const {bikeList, error, loading} = bikeSelect

    console.log('HOME', bikeList, error, loading)

    useEffect(()=>{
        getBikeList()
    }, [])

    return (
        <>
            Home
        </>
    )
}

export default HomePage
