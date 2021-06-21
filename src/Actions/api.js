import axios from "axios";

const baseUrl="http://localhost:21912/api/"

export default{
    area(url = baseUrl+ 'Areas'){
        return{
            fetchAll:() => axios.get(url),
            fetchById: id => axios.get(url.id),
            create: newData => axios.post(url,newData),
            update:(id,updateData) => axios.put(url+id,updateData),
            delete : id => axios.delete(url + id)
        }
    }
}