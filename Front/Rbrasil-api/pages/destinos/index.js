import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Destino() {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7060/api/Destinos")
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de destinos:", error);
      });
  }, []);

  const formatMoney = (price) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <>
      <Head>
        <title>Destinos | Recode Brasil</title>
      </Head>
      <main>
        <section className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="card border-0 shadow">
                <div className="card-header p-4 border-0 d-flex my-auto">
                  <i className="bi bi-geo-alt-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Destinos</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nome</th>
                          <th>Descrição</th>
                          <th>Preço</th>
                        </tr>
                      </thead>
                      <tbody>
                        {destinos.map((destino) => (
                          <tr key={destino.destinoId}>
                            <td>{destino.id}</td>
                            <td>{destino.nome}</td>
                            <td>{destino.descricao}</td>
                            <td>{formatMoney(destino.preco)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
