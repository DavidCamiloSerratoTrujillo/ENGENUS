export const GetInfo = async(cod) =>{
    const dat = {
        User: 'etraining',
        Password: 'explorandoando2020%',
        option: 'infoGrupo',
        IdGrupo: cod,

        }
    const url = 'https://www.php.engenius.com.co/DatabaseIE.php';
    const config =  {
        method: 'POST',
        headers:{ 'Content-Type':'application/json'},
        body: JSON.stringify(dat)
    }

    const resp = await fetch(url,config)
    const {data} = await resp.json();  

    const Grupo = data.map(city =>{
         return{'nombre':city.nombre,
                 'id':city.id,
                'numeroGrupo' : city.numGrupo,
                'institucion':city.institución,
                'municipio': city.municipio,
                'sede':city.sede}
    });

  
    return (Grupo);
}