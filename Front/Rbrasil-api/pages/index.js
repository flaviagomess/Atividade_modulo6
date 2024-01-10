import React from "react";
import Footer from '../components/Footer.js';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

const Carousel = () => {
  return (
    <div className="container">
      <div id="carouselMain" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/Fernando-de-Noronha-rodamundo.jpg" className="d-block w-100" alt="Fernando de Noronha-PE" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fernando de Noronha-PE</h5>
              <p>A geografia privilegiada tem o mais belo conjunto de ilhas do Brasil.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/Porto.png" className="d-block w-100" alt="Porto de Galinhas-PE" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Porto de Galinhas-PE</h5>
              <p>Venham conhecer Pernambuco e suas belezas naturais.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/Minas gerais.jpg" className="d-block w-100" alt="Minas Gerais-MG" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Minas Gerais-MG</h5>
              <p>Oh, Minas Gerais! Quem te conhece não esquece jamais.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="container">
      <main className="flex-fill">
        <div className="container">
          <hr className="mt-3" />
          <div className="row g-3">
            <div className="col-6">
              <div className="card text-center bg-light">
                <img src="/img/joão pessoa.jpg" className="card-img-top" alt="João Pessoa" />
                <div className="card-body">
                  <div className="card-footer"><a href="./destino" className="btn btn-primary mt-2 d-block">Destino</a></div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card text-center bg-light">
                <img src="/img/jalapao.png" className="card-img-top" alt="Jalapão" />
                <div className="card-body">
                  <div className="card-footer"><a href="./promoções" className="btn btn-primary mt-2 d-block">Promoções</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <Carousel />
      <MainContent />
    </Layout>
  );
};

export default Home;
