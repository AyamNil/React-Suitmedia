import axios from "axios";

export default function fetchAPI(pageNumber, pageSize) {
    return axios.get(
        `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${pageNumber}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=-published_at`
    )
    .then((res)=> {
        return res.data
    }

    )
}