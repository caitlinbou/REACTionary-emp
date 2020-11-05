import axios from "axios";

const getRandomPeople = "https://randomuser.me/api/?results=200&nat=us"

export default {
    load: function() {
        return axios.get(getRandomPeople);
        
    }
};
