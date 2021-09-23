

export const getGifs = async( category ) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=12&api_key=M6hqmV7sKXm49MA7xT5ayne2tndKJFhj`
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( (img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        
        return gifs;
}