import React from "react";
import Head from "next/head";
import Footer from '../components/Footer.js';

export default function Contato() {
  return (
    <div className="container">
      <Head>
        <title>Contato | Recode Brasil</title>
      </Head>

      <main className="flex-fill">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-8 col-lg-6">
              <form className="form-container">
                <h2>Fale conosco</h2>

                <div className="form-floating mb-3">
                  <input type="text" id="txtNomeCompleto" className="form-control" placeholder=" " autoFocus />
                  <label htmlFor="txtNomeCompleto">Nome Completo</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" id="txtEmail" className="form-control" placeholder=" " />
                  <label htmlFor="txtEmail">E-mail</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea type="email" id="txtMensagem" className="form-control" placeholder=" " style={{ height: "200px" }}></textarea>
                  <label htmlFor="txtMensagem">Mensagem</label>
                </div>

                <button type="button" onClick={() => window.location.href = './mensagemEnviada'} className="btn btn-lg btn-primary">
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
