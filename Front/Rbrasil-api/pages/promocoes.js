import React from "react";
import Head from "next/head";
import Footer from '../components/Footer.js';

export default function Promocoes() {
  return (
    <>
      <Head>
        <title>Promoções | Recode Brasil</title>
      </Head>

      <div className="container">
        <main className="flex-fill">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite aqui o que procura"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button className="btn btn-primary">Buscar</button>
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-7">
                <div className="d-flex flex-row-reverse justify-content-center">
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
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <br />
            <h4>
              <b>Promoções</b>
            </h4>
            <h4>Até 50% de desconto em nossos pacotes promocionais</h4>
            <hr className="mt-3" />
            <div className="row g-3">
              {/* Card 1 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card text-center bg-light">
                  <img src="/img/gramado.jpg" className="card-img-top" alt="Gramado-RS" />
                  <div className="card-header">
                    De <strike>R$2.100,00</strike>
                    <br />
                    Por <b>R$1.400,00</b>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Gramado-RS</h5>
                    <p className="card-text">Venham conhecer as belezas de Gramado-RS.</p>
                    <div className="card-footer">
                      <a href="./reservar" className="btn btn-primary mt-2 d-block">
                        Fazer reserva
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card text-center bg-light">
                  <img src="/img/Elevador Bahia.jpeg" className="card-img-top" alt="Salvador-BA" />
                  <div className="card-header">
                    De <strike>R$1.700,00</strike>
                    <br />
                    Por <b>R$1.350,00</b>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Salvador-BA</h5>
                    <p className="card-text">Venham conhecer as belezas de Salvador-BA.</p>
                    <div className="card-footer">
                      <a href="./reservar" className="btn btn-primary mt-2 d-block">
                        Fazer reserva
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card text-center bg-light">
                  <img src="/img/canoa_quebrada.jpg" className="card-img-top" alt="Canoa quebrada-CE" />
                  <div className="card-header">
                    De <strike>R$1.600,00</strike>
                    <br />
                    Por <b>R$1.250,00</b>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Canoa quebrada-CE</h5>
                    <p className="card-text">Venham conhecer as belezas naturais de Canoa quebrada-CE.</p>
                    <div className="card-footer">
                      <a href="./reservar" className="btn btn-primary mt-2 d-block">
                        Fazer reserva
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card text-center bg-light">
                  <img src="/img/São Paulo.jpg" className="card-img-top" alt="São Paulo-SP" />
                  <div className="card-header">
                    De <strike>R$1.300,00</strike>
                    <br />
                    Por <b>R$1.000,00</b>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">São Paulo-SP</h5>
                    <p className="card-text">Venham conhecer as belezas naturais de São Paulo-SP.</p>
                    <div className="card-footer">
                      <a href="./reservar" className="btn btn-primary mt-2 d-block">
                        Fazer reserva
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card text-center bg-light">
                  <img src="/img/vista-da-cidade-de-natal.jpg" className="card-img-top" alt="Natal-RN" />
                  <div className="card-header">
                    De <strike>R$1.900,00</strike>
                    <br />
                    Por <b>R$1.650,00</b>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Natal-RN</h5>
                    <p className="card-text">Venham conhecer as belezas naturais de Natal-RN.</p>
                    <div className="card-footer">
                      <a href="./reservar" className="btn btn-primary mt-2 d-block">
                        Fazer reserva
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 6 */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card text-center bg-light">
                  <img src="/img/Chaapada.png" className="card-img-top" alt="Chapada dos veadeiros-GO" />
                  <div className="card-header">
                    De <strike>R$2.000,00</strike>
                    <br />
                    Por <b>R$1.750,00</b>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Chapada dos veadeiros-GO</h5>
                    <p className="card-text">Venham conhecer as belezas naturais de Chapada dos veadeiros-GO.</p>
                    <div className="card-footer">
                      <a href="./reservar" className="btn btn-primary mt-2 d-block">
                        Fazer reserva
                      </a>
                    </div>
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
