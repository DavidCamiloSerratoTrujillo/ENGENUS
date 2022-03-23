export const GetCiudades = async(dat) =>{
    const url = 'https://www.php.engenius.com.co/DatabaseIE.php';
    const config =  {
        method: 'POST',
        headers:{ 'Content-Type':'application/json'},
        body: JSON.stringify(dat)
    }

    const resp = await fetch(url,config)
    const {data} = await resp.json();  
    const ciudades = data.map(city =>{
        return{'nombre':city.nombre,
                'dane':city.dane}
    });

    
    return (ciudades);
}