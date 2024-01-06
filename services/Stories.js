import api from "../api";

const getAllStories = async (pageNumber) => {
    try {
        const response = await api.get(`stories?page=${pageNumber}`); 
        return response;
    } catch (err) {
        return err.response;
    }
}

export {getAllStories};