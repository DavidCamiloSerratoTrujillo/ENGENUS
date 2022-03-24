export const GetSedes = async(cod) =>{
    const dat = {
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'sedes',
        CodInst: cod,

        }
    const url = 'https://www.php.engenius.com.co/DatabaseIE.php';
    const config =  {
        method: 'POST',
        headers:{ 'Content-Type':'application/json'},
        body: JSON.stringify(dat)
    }

    const resp = await fetch(url,config)
    const {data} = await resp.json();  

    const Sedes = data.map(city =>{
        return{'nombre':city.nombre,
                'dane':city.dane}
    });
    return (Sedes);
}