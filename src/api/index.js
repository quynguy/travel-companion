import axios from 'axios'; 


export const getPlacesData = async (type,sw, ne) => {
    try {
        
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': 'bd0981fec2msh35b7903a8f3d194p1624b5jsnddd8403f853c',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        });

        return data;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};