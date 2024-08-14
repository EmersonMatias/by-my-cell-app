import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export default function useGetResearchInstitutions() {
    return useQuery({
        queryKey: ["research-institutions"],
        queryFn: async () => {
            try {
                const response: AxiosResponse<ResearchInstitutions[]> = await axios.get(`${import.meta.env.VITE_BACK_END_URL}/researchInstituions`)

                return response.data
            } catch (error) {
                console.error(error)
            }
        }
    })
}

type ResearchInstitutions = {
    id: number,
    urlImage: string,
    altImage: string
}