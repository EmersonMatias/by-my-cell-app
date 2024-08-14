import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export default function useGetFaq() {
    return useQuery({
        queryKey: ["faq"],
        queryFn: async () => {
            try {
                const response: AxiosResponse<Faq[]> = await axios.get(`${import.meta.env.VITE_BACK_END_URL}/faq`)

                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })
}

type Faq = {
    id: number,
    question: string,
    answer: string
}