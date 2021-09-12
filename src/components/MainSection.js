import React from 'react'

const MainSection = () => {
    return (
        <section className="section section-lg pb-lg-6 pb-5">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4"
            >
              <img
                className="img-fluid image-lg mb-4"
                src="../assets/easy-transaction.svg"
                alt="northwestern logo"
              />
              <h2 className="h4">Extraordinarily easy</h2>
              <p>
                Our search makes it verry simple to find your space. And from
                office match, we are here to help you.
              </p>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4"
            >
              <img
                className="img-fluid image-lg mb-4"
                src="../assets/support.svg"
                alt="northwestern logo"
              />
              <h2 className="h4">Truly transparent</h2>
              <p>
                We give you all this info, lifting the lid on actual offices,
                real availability, and accurate pricing.
              </p>
            </div>
            <div
              className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4"
            >
              <img
                className="img-fluid image-lg mb-4"
                src="../assets/payment.svg"
                alt="northwestern logo"
              />
              <h2 className="h4">Best prices</h2>
              <p>
                Choose Spaces and our experts will save you around 15% off the
                list price. What are you waiting for?
              </p>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-12">
              <div className="card rounded border border-light">
                <div className="card-body p-3 p-md-5">
                  <div className="progress-wrapper mb-3 mb-md-5">
                    <div className="progress-info info-xl d-block d-md-flex">
                      <div className="progress-label">
                        <h2 className="h4 text-dark">Space occupancy level</h2>
                      </div>
                      <div><span className="text-gray h4">85%</span></div>
                    </div>
                    <div className="progress progress-lg my-4 my-md-0">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: "85%"}}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="
                      d-block d-lg-flex
                      flex-column flex-lg-row
                      justify-content-between
                      align-items-center
                    "
                  >
                    <div className="mb-5 mb-lg-0">
                      <h4 className="font-weight-normal">
                        Book your tour experience today!
                      </h4>
                      <p className="lead mb-0">
                        Schedule a tour, make an appointment to rent space<br
                          className="d-none d-lg-inline"
                        />at Themesberg, or ask for more information.
                      </p>
                    </div>
                    <div className="align-content-end">
                      <button
                        type="button"
                        className="btn btn-primary animate-up-2"
                        data-toggle="modal"
                        data-target="#modal-form"
                      >
                        Schedule a tour
                      </button>
                    </div>
                    <div
                      className="modal fade"
                      id="modal-form"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="modal-form"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered modal-md"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-body p-0">
                            <div className="card bg-soft shadow-md border-0">
                              <div className="card-header bg-white py-4">
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                                <div className="text-muted text-center mb-3">
                                  <h3>Interested?</h3>
                                  <p>
                                    We would love to show you Spaces. Please let
                                    us know when you are available and we will
                                    make our best to receive you on that date
                                    and time.
                                  </p>
                                </div>
                              </div>
                              <div className="card-body">
                                <form className="mt-3">
                                  <div className="form-group">
                                    <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                        <span className="input-group-text"
                                          ><span className="far fa-user"></span
                                        ></span>
                                      </div>
                                      <input
                                        className="form-control"
                                        placeholder="Name"
                                        type="text"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                        <span className="input-group-text"
                                          ><span className="far fa-envelope"></span
                                        ></span>
                                      </div>
                                      <input
                                        className="form-control"
                                        placeholder="Email"
                                        type="email"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="input-group mb-4">
                                      <div className="input-group-prepend">
                                        <span className="input-group-text"
                                          ><span className="fas fa-mobile"></span
                                        ></span>
                                      </div>
                                      <input
                                        className="form-control"
                                        placeholder="Phone"
                                        type="number"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="input-group mb-lg-0">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"
                                        ><span
                                          className="far fa-calendar-alt"
                                        ></span
                                      ></span>
                                    </div>
                                    <input
                                      className="form-control datepicker"
                                      type="date"
                                      data-position="top"
                                    />
                                  </div>
                                  <div className="text-center">
                                    <button
                                      type="submit"
                                      className="btn btn-block btn-primary mt-4"
                                    >
                                      Send Request Quote
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-12"><h3 className="h4 mb-5">Top Cities</h3></div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <a
                href="./all-spaces.html"
                className="card img-card fh-400 border-0 outer-bg"
                data-background-inner='../assets/newyork.jpg'
                ><div className="inner-bg overlay-dark"  style={{backgroundImage: "url('../assets/newyork.jpg')"}}></div>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="card-body text-white p-3">
                    <h5 className="text-uppercase text-center">New York</h5>
                  </div>
                </div></a
              >
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <a
                href="./all-spaces.html"
                className="card img-card fh-400 border-0 outer-bg"
                data-background-inner='../assets/paris.jpg'
                ><div className="inner-bg overlay-dark" style={{backgroundImage: "url('../assets/paris.jpg')"}}></div>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="card-body text-white p-3">
                    <h5 className="text-uppercase text-center">Paris</h5>
                  </div>
                </div></a
              >
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <a
                href="./all-spaces.html"
                className="card img-card fh-400 border-0 outer-bg"
                data-background-inner='../assets/london.jpg'
                ><div className="inner-bg overlay-dark"  style={{backgroundImage: "url('../assets/london.jpg')"}}></div>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="card-body text-white p-3">
                    <h5 className="text-uppercase text-center">London</h5>
                  </div>
                </div></a
              >
            </div>
            <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
              <a
                href="./all-spaces.html"
                className="card img-card fh-400 border-0 outer-bg"
                data-background-inner='../assets/tokyo.jpg'
                ><div className="inner-bg overlay-dark"  style={{backgroundImage: "url('../assets/tokyo.jpg')"}}></div>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="card-body text-white p-3">
                    <h5 className="font-weight-normal text-uppercase text-center">
                      Tokyo
                    </h5>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-12"><h3 className="h4 mb-5">Trending Spaces</h3></div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-light mb-4 animate-up-5">
                <a href="./single-space.html" className="position-relative"
                  ><img
                    src="../assets/image-office.jpg"
                    className="card-img-top p-2 rounded-xl"
                    alt="themesberg office"
                /></a>
                <div className="card-body">
                  <a href="./single-space.html"
                    ><h4 className="h5">Collaborative Workspace</h4></a
                  >
                  <div className="d-flex my-4">
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="badge badge-pill badge-primary ml-2">5.0</span>
                  </div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item small p-0">
                      <span className="fas fa-map-marker-alt mr-2"></span>New York,
                      Manhattan, USA
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Old Street (2
                      mins walk)
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Shoreditch High
                      Street (10 mins walk)
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-soft border-top">
                  <div className="d-flex justify-content-between">
                    <div className="col pl-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Monthly</span
                      >
                      <span className="h5 text-dark font-weight-bold">2100$</span>
                    </div>
                    <div className="col">
                      <span className="text-muted font-small d-block mb-2"
                        >People</span
                      >
                      <span className="h5 text-dark font-weight-bold">12</span>
                    </div>
                    <div className="col pr-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Sq.Ft</span
                      >
                      <span className="h5 text-dark font-weight-bold">1200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-light mb-4 animate-up-5">
                <a href="./single-space.html" className="position-relative"
                  ><img
                    src="../assets/cowork-office.jpg"
                    className="card-img-top p-2 rounded-xl"
                    alt="developer desk"
                /></a>
                <div className="card-body">
                  <a href="./single-space.html"
                    ><h4 className="h5">Coworking Workspace</h4></a
                  >
                  <div className="d-flex my-4">
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-light"></span>
                    <span className="star fas fa-star text-light"></span>
                    <span className="badge badge-pill badge-primary ml-2">3.0</span>
                  </div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item small p-0">
                      <span className="fas fa-map-marker-alt mr-2"></span
                      >California, USA
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Penny Market
                      Street (15 mins walk)
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Museum Street
                      (20 mins walk)
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-soft border-top">
                  <div className="d-flex justify-content-between">
                    <div className="col pl-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Monthly</span
                      >
                      <span className="h5 text-dark font-weight-bold">300$</span>
                    </div>
                    <div className="col">
                      <span className="text-muted font-small d-block mb-2"
                        >People</span
                      >
                      <span className="h5 text-dark font-weight-bold">24</span>
                    </div>
                    <div className="col pr-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Sq.Ft</span
                      >
                      <span className="h5 text-dark font-weight-bold">2000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-light mb-4 animate-up-5">
                <a href="./single-space.html" className="position-relative"
                  ><img
                    src="../assets/meeting-office.jpg"
                    className="card-img-top p-2 rounded-xl"
                    alt="wood office"
                /></a>
                <div className="card-body">
                  <a href="./single-space.html"
                    ><h4 className="h5">Meeting Office Space</h4></a
                  >
                  <div className="d-flex my-4">
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-light"></span>
                    <span className="badge badge-pill badge-primary ml-2">4.0</span>
                  </div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item small p-0">
                      <span className="fas fa-map-marker-alt mr-2"></span>London,
                      Canary Wharf, UK
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Stamford Bridge
                      Stadium (5 mins walk)
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Bluebird Chelsea
                      Pub (15 mins walk)
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-soft border-top">
                  <div className="d-flex justify-content-between">
                    <div className="col pl-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Monthly</span
                      >
                      <span className="h5 text-dark font-weight-bold">50$</span>
                    </div>
                    <div className="col">
                      <span className="text-muted font-small d-block mb-2"
                        >People</span
                      >
                      <span className="h5 text-dark font-weight-bold">2-4</span>
                    </div>
                    <div className="col pr-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Sq.Ft</span
                      >
                      <span className="h5 text-dark font-weight-bold">400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-light mb-4 animate-up-5">
                <a href="./single-space.html" className="position-relative"
                  ><img
                    src="../assets/conference-office.jpg"
                    className="card-img-top p-2 rounded-xl"
                    alt="pixel room"
                /></a>
                <div className="card-body">
                  <a href="./single-space.html"
                    ><h4 className="h5">Conference Room</h4></a
                  >
                  <div className="d-flex my-4">
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="fas fa-star-half text-warning"></span>
                    <span className="badge badge-pill badge-primary ml-2">4.7</span>
                  </div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item small p-0">
                      <span className="fas fa-map-marker-alt mr-2"></span>Paris,
                      Île-de-France, France
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>LE BHV MARAIS (5
                      mins walk)
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Shakespeare &
                      Company (15 mins walk)
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-soft border-top">
                  <div className="d-flex justify-content-between">
                    <div className="col pl-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Monthly</span
                      >
                      <span className="h5 text-dark font-weight-bold">150$</span>
                    </div>
                    <div className="col">
                      <span className="text-muted font-small d-block mb-2"
                        >People</span
                      >
                      <span className="h5 text-dark font-weight-bold">2-10</span>
                    </div>
                    <div className="col pr-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Sq.Ft</span
                      >
                      <span className="h5 text-dark font-weight-bold">200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-light mb-4 animate-up-5">
                <a href="./single-space.html" className="position-relative"
                  ><img
                    src="../assets/lifestyle-office.jpg"
                    className="card-img-top p-2 rounded-xl"
                    alt="modern desk"
                /></a>
                <div className="card-body">
                  <a href="./single-space.html"
                    ><h4 className="h5">Lifestyle Space</h4></a
                  >
                  <div className="d-flex my-4">
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="badge badge-pill badge-primary ml-2">4.7</span>
                  </div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item small p-0">
                      <span className="fas fa-map-marker-alt mr-2"></span>Madrid,
                      Hortaleza, Spain
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Plaza Mayor (2
                      mins walk)
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>eal Casa de
                      Correos (15 mins walk)
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-soft border-top">
                  <div className="d-flex justify-content-between">
                    <div className="col pl-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Monthly</span
                      >
                      <span className="h5 text-dark font-weight-bold">200$</span>
                    </div>
                    <div className="col">
                      <span className="text-muted font-small d-block mb-2"
                        >People</span
                      >
                      <span className="h5 text-dark font-weight-bold">10-30</span>
                    </div>
                    <div className="col pr-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Sq.Ft</span
                      >
                      <span className="h5 text-dark font-weight-bold">500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card border-light mb-4 animate-up-5">
                <a href="./single-space.html" className="position-relative"
                  ><img
                    src="../assets/private-office.jpg"
                    className="card-img-top p-2 rounded-xl"
                    alt="office"
                /></a>
                <div className="card-body">
                  <a href="./single-space.html"
                    ><h4 className="h5">Private Space</h4></a
                  >
                  <div className="d-flex my-4">
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="star fas fa-star text-warning"></span>
                    <span className="badge badge-pill badge-primary ml-2">5.0</span>
                  </div>
                  <ul className="list-group mb-3">
                    <li className="list-group-item small p-0">
                      <span className="fas fa-map-marker-alt mr-2"></span>New York,
                      Manhattan, USA
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Old Street (2
                      mins walk)
                    </li>
                    <li className="list-group-item small p-0">
                      <span className="fas fa-bullseye mr-2"></span>Shoreditch High
                      Street (10 mins walk)
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-soft border-top">
                  <div className="d-flex justify-content-between">
                    <div className="col pl-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Monthly</span
                      >
                      <span className="h5 text-dark font-weight-bold">100$</span>
                    </div>
                    <div className="col">
                      <span className="text-muted font-small d-block mb-2"
                        >People</span
                      >
                      <span className="h5 text-dark font-weight-bold">1</span>
                    </div>
                    <div className="col pr-0">
                      <span className="text-muted font-small d-block mb-2"
                        >Sq.Ft</span
                      >
                      <span className="h5 text-dark font-weight-bold">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mt-lg-6 mt-3 d-flex flex-column text-center">
              <div>
                <a
                  href="./all-spaces.html"
                  className="btn btn-primary animate-up-2 mb-2"
                  >Browse All</a
                >
              </div>
              <span className="small">1422 spaces in 34 countries</span>
            </div>
          </div>
        </div>
      </section>
    )
}

export default MainSection
