import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export default function useGetReviews() {
    return useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            try {
                const response: AxiosResponse<Review[]> = await axios.get(`${import.meta.env.VITE_BACK_END_URL}/reviews`)

                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })
}

type Review = {
    name: string,
    rating: number,
    comment: string,
    urlImage: string
}