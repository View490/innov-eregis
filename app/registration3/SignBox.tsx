export async function SignBox () {

    // const [loadedData, setLoadedData] = useState<any>()

    const loadData = async ()=>{
        const data = await fetch("http://localhost:3000/api/hotels/get-registration")
        return await data.json()
    }

    const loadedData = await loadData()
    //
    // const handleClick =async ()=>{
    //     console.log("Clicked load data")
    //     const data = await loadData()
    //     setLoadedData(data)
    //     console.log("res", data)
    // }



    return <div className="border p-2 bg-red-50 text-red-500 text-lg font-bold">
    Sign in
        {/*<button onClick={handleClick} >Load data</button>*/}

        data: {JSON.stringify(loadedData)}
    </div>
}