import React from "react";
import Head from "next/head";
import Footer from '../components/Footer.js';

export default function Destinos() {
  return (
    <>
      <Head>
        <title>Destinos | Recode Brasil</title>
      </Head>
      <div className="container">
        <main className="flex-fill">
        <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                  <div className="input-group  input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite aqui o que procura"
                    />
                    <button className="btn btn-primary">Buscar</button>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-7">
                <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
                  <form className="d-inline-block">
                    <select className="form-select form-select-sm">
                      <option>Ordenar pelo nome</option>
                      <option>Ordenar pelo menor preço</option>
                      <option>Ordenar pelo maior preço</option>
                    </select>
                  </form>
                  <nav className="d-inline-block me-3">
                    <ul className="pagination pagination-sm my-0">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link disabled" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          6
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Próximo
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <h4>
            <b>Destino</b>
          </h4>
          <hr className="mt-3" />
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-center bg-light">
                <img src="img/bonito-MS.JPG" className="card-img-top" />
                <div className="card-header">R$2.000,00</div>
                <div className="card-body">
                  <h5 className="card-title">Bonito-MS</h5>
                  <p className="card-text">
                    Venham Conhecer as belezas naturais de Bonito-MS.
                  </p>
                  <div className="card-footer">
                    <a
                      href="./reservar"
                      className="btn btn-primary mt-2 d-block"
                    >
                      Reservar destino
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-center bg-light">
                <img src="img/Jericoacoara.jpg" className="card-img-top" alt="Jericoacoara" />
                <div className="card-header">
                  R$1.900,00
                </div>
                <div className="card-body">
                  <h5 className="card-title">Jericoacoara-CE</h5>
                  <p className="card-text">Conheçam as belezas naturais de Jericoacoara-CE.</p>
                  <div className="card-footer">
                    <a href="./reservar" className="btn btn-primary mt-2 d-block">Reservar destino</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-center bg-light">
                <img src="img/Coritiba.jpg" className="card-img-top" alt="Coritiba" />
                <div className="card-header">
                  R$1.400,00
                </div>
                <div className="card-body">
                  <h5 className="card-title">Coritiba-PR</h5>
                  <p className="card-text">Venham Conhecer Coritiba-PR e belezas naturais.</p>
                  <div className="card-footer">
                    <a href="./reservar" className="btn btn-primary mt-2 d-block">Reservar destino</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-center bg-light">
                <img src="img/Minas gerais.jpg" className="card-img-top" alt="Minas Gerais" />
                <div className="card-header">
                  R$1.1000,00
                </div>
                <div className="card-body">
                  <h5 className="card-title">Minas Gerais-MG</h5>
                  <p className="card-text">Venham conhecer as belezas de Minas Gerais-MG.</p>
                  <div className="card-footer">
                    <a href="./reservar" className="btn btn-primary mt-2 d-block">Reservar destino</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-center bg-light">
                <img src="img/morro-careca.jpg" className="card-img-top" alt="Morro do Careca" />
                <div className="card-header">
                  R$980,00
                </div>
                <div className="card-body">
                  <h5 className="card-title">Morro do careca-RN</h5>
                  <p className="card-text">Venham conhecer o que Natal-RN tem de melhor.</p>
                  <div className="card-footer">
                    <a href="./reservar" className="btn btn-primary mt-2 d-block">Reservar destino</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card text-center bg-light">
                <img src="img/Rio de janeiro.jpg" className="card-img-top" alt="Rio de Janeiro" />
                <div className="card-header">
                  R$1.920,00
                </div>
                <div className="card-body">
                  <h5 className="card-title">Rio de Janeiro-RJ</h5>
                  <p className="card-text">Venham conhecer as belezas da cidade maravilhosa.</p>
                  <div className="card-footer">
                    <a href="./reservar" className="btn btn-primary mt-2 d-block">Reservar destino</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
      </div>
      <Footer />
    </>
  );
}