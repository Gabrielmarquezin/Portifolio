
export const Request = async (url)=>{
    try {
        const request = await fetch(url)
        const response = await request.json()

        return response
    } catch (error) {
        throw new Error({error: error})
    }
}