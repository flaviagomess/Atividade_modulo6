import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { parse } from "date-fns";

export default function Reserva() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7060/api/Reservas")
      .then((response) => {
        setReservas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de reserva:", error);
      });
  }, []);

  const formatMoney = (price) => {
    return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const formatDate = (dateString) => {
    try {
      const parsedDate = parse(dateString, "dd/MM/yyyy", new Date());

      // Verificar se o parsing foi bem-sucedido
      if (isNaN(parsedDate.getTime())) {
        console.error('Data inválida após parsing:', dateString);
        return 'Data inválida';
      }

      // Formatar a data para o formato desejado
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return parsedDate.toLocaleDateString('pt-BR', options);
    } catch (error) {
      console.error('Erro ao fazer parsing da data:', error);
      return 'Data inválida';
    }
  };

  return (
    <>
      <Head>
        <title>Reservas | Recode Brasil</title>
      </Head>
      <main>
        <section className="container py-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="card border-0 shadow">
                <div className="card-header p-4 border-0 d-flex my-auto">
                  <i className="bi bi-cart-fill fs-3 me-2 iconsStyle"></i>
                  <h4>Reservas</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">Data</th>
                          <th scope="col">Total</th>
                          <th scope="col">Destino</th>
                          <th scope="col">Descrição</th>
                          <th scope="col">Usuário</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reservas.map((reserva) => (
                          <tr key={reserva.reservaId}>
                            <td>{reserva.id}</td>
                            <td>{formatDate(reserva.data_reserva)}</td>
                            <td>{formatMoney(reserva.total_reserva)}</td>
                            <td>{reserva.destino.nome}</td>
                            <td>{reserva.destino.descricao}</td>
                            <td>{reserva.usuario.nome}</td>
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
