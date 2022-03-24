export const GetGrupos = async(cod) =>{
    const dat = {
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'grupos',
        CodSede: cod,

        }
    const url = 'https://www.php.engenius.com.co/DatabaseIE.php';
    const config =  {
        method: 'POST',
        headers:{ 'Content-Type':'application/json'},
        body: JSON.stringify(dat)
    }

    const resp = await fetch(url,config)
    const {data} = await resp.json();  

    const Grupos = data.map(city =>{
        return{'nombre':city.nombre,
                'id':city.id,
                'numeroGrupo' : city.numGrupo}
    });
    return (Grupos);
}