import React, { use, cache } from 'react'

const Fetchuser = () => {
    // const data = use(fetchuser())
    const data = use(fetchuser())
    return (
        <>

            {
                data.map((current) => {
                    return <>
                        <p>{current.name}</p>
                    </>
                })
            }
        </>
    )
}

const fetchuser = cache(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return await res.json();
})
export default Fetchuser
