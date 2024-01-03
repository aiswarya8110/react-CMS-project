import client from './contentDeliveryAPI';
import { useState, useEffect } from 'react';
const useProjects = ()=>{
    const [projects, setProjects] = useState([]);

    const fetchProjects = async()=>{
        try{
            const response = await client.getEntries({content_type: 'projects'});
            const projects = response.items.map((item)=>{
                const { title, url, image } = item.fields;
                const { id } = item.sys;
                const img = image?.fields?.file?.url;

                return {title, url, img, id}
            })
            setProjects(projects);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchProjects();
    },[]);

    return projects;
}

export default useProjects;