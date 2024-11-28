
export const getVans = async () => {

        const res = await fetch("/api/vans")

        if(!res.ok) {
            throw {
                message:"failed to fetch vans",
                statusText: res.statusText,
                status: res.status
            }
        }

        const result = await res.json()
        return result.vans

}


