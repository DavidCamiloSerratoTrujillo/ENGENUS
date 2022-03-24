import React, { useState, useEffect } from "react";
import { useFetchCitys } from "../hooks/useFetchCitys";
import { useFetchInst } from "../hooks/useFetchInst";
import { useFetchSedes } from "../hooks/useFetchSedes";
import { useFetchGrupos } from "../hooks/useFetchGrupos";
import { useFetchInfo } from "../hooks/useFetchInfo";
const TablaCitys = () => {
  const ciudades = useFetchCitys();

  const [infoCity, setInfoCity] = useState({ idCity: "", nombre: "" });
  const [infoInst, setInfoInst] = useState({ idInst: "", nombre: "" });
  const [infoSede, setInfoSede] = useState({ idSede: "", nombre: "" });
  const [infoGrup, setInfoGrup] = useState({ idGrup: "", nombre: "" });

  const [tablev, setTablev] = useState(true);
  const [tableINS, setTableINS] = useState(false);
  const [tableSede, setTableSede] = useState(false);
  const [tableGrup, setTableGrup] = useState(false);

  const [titulo, setTitulo] = useState("Municipios");
  const instituciones = useFetchInst(infoCity.idCity);
  const sedes = useFetchSedes(infoInst.idInst);
  const grupos = useFetchGrupos(infoSede.idSede);
  const Informacion = useFetchInfo(infoGrup.idGrup);

  return (
    <>
      <h1>{titulo}</h1>
      <div className="Container">
        {tablev ? (
          <table className="table table-striped table-dark table-hover Contend ">
            <thead>
              <tr>
                <th>Ciudad</th>
                <th>Codigo</th>
              </tr>
            </thead>
            <tbody>
              {ciudades.map(({ nombre, dane }) => {
                return (
                  <tr
                    key={dane}
                    onClick={() => {
                      setTablev(!tablev);
                      setTableINS(!tableINS);
                      setInfoCity({ idCity: dane, nombre: nombre });
                      setTitulo(`Instituciones de ${nombre}`);
                    }}
                  >
                    <td>{nombre}</td>
                    <td> {dane}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : tableINS ? (
          <table className="table table-striped table-dark table-hover Contend ">
            <thead>
              <tr>
                <th>Institucion</th>
                <th>Codigo</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {instituciones.map(({ nombre, dane }) => {
                return (
                  <tr
                    key={dane}
                    onClick={() => {
                      setTableINS(!tableINS);
                      setTableSede(!tableSede);
                      setInfoInst({ idInst: dane, nombre: nombre });
                      setTitulo(`Sedes de ${nombre}`);
                    }}
                  >
                    <td>{nombre}</td>
                    <td> {dane}</td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : tableSede ? (
          <table className="table table-striped table-dark table-hover Contend ">
            <thead>
              <tr>
                <th>Sede</th>
                <th>Codigo</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {sedes.map(({ nombre, dane }) => {
                return (
                  <tr
                    key={dane}
                    onClick={() => {
                      setTableSede(!tableSede);
                      setTableGrup(!tableGrup);
                      setInfoSede({ idSede: dane, nombre: nombre });
                      setTitulo(`Grupos de ${nombre}`);
                    }}
                  >
                    <td>{nombre}</td>
                    <td> {dane}</td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : tableGrup ? (
          <table className="table table-striped table-dark table-hover Contend ">
            <thead>
              <tr>
                <th>Grupo</th>
                <th>Codigo</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {grupos.map(({ nombre, id }) => {
                return (
                  <tr
                    key={id}
                    onClick={() => {

                      setTableGrup(!tableGrup);
                      setInfoGrup({ idGrup: id, nombre: nombre });
                      setTitulo(`Informacion del grupo ${nombre}`);
                    }}
                  >
                    <td>{nombre}</td>
                    <td> {id}</td>
                    <td>{}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <table className="table table-striped table-dark table-hover Contend ">
            <thead>
              <tr>
                <th>NumGrupo</th>
                <th>Nombre</th>
                <th>Codigo</th>
                <th>Sede</th>
                <th>Institucion</th>
                <th>Municipio</th>
                
              </tr>
            </thead>

            <tbody>
              {Informacion.map(({ numeroGrupo,nombre,id, institucion,municipio,sede }) => {
                return (
                  <tr key={id} >
                    <td>{numeroGrupo}</td>
                    <td>{nombre}</td>
                    <td> {id}</td>
                    <td> {sede}</td>
                    <td>{institucion}</td>
                    <td>{municipio}</td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        )}
      </div>
    </>
  );
};
export default TablaCitys;
