import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export default function useGetOurSolutions() {
    return useQuery({
        queryKey: ["our-solutions"],
        queryFn: async () => {
            try {
                const response: AxiosResponse<OurSolutions[]> = await axios.get(`${import.meta.env.VITE_BACK_END_URL}/ourSolutions`)

                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })
}

type OurSolutions = {
    name: string,
    text: string,
    number: string
}