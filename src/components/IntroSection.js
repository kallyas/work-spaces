import React from 'react'

const IntroSection = () => {
    return (
        <section
        className="
          section section-header section-image
          bg-primary
          overlay-primary
          text-white
          pb-4 pb-md-7
        "
        data-background="../assets/img/hero-1.jpg"
      >
        <div className="container">
          <div className="row justify-content-center mb-4 mb-xl-5">
            <div className="col-12 col-xl-10 text-center">
              <h1 className="display-2">Find your space.</h1>
              <p className="lead text-muted mt-4 px-md-6">
                <span className="font-weight-bold">12,000+</span> coworking spaces
                with desks, offices & meeting rooms in
                <span className="font-weight-bold">165+</span> countries. Discover
                and reserve space today.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12">
              <div className="card p-md-2">
                <div className="card-body p-2 p-md-0">
                  <form
                    autocomplete="off"
                    className="row"
                    method="get"
                    action="./all-spaces.html"
                  >
                    <div className="col-12 col-lg-5">
                      <div className="form-group form-group-lg mb-lg-0">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"
                              ><span className="fas fa-map-marker-alt"></span
                            ></span>
                          </div>
                          <input
                            id="search-location"
                            type="text"
                            className="form-control autocomplete"
                            placeholder="Search location"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="input-group input-group-lg mb-3 mb-lg-0">
                        <div className="input-group-prepend">
                          <span className="input-group-text"
                            ><i className="far fa-calendar-alt"></i
                          ></span>
                        </div>
                        <input
                          className="form-control datepicker"
                          placeholder="Select date"
                          type="date"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-3">
                      <button
                        className="btn btn-lg btn-primary btn-block animate-up-2"
                        type="submit"
                      >
                        Find a desk
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              <ul
                className="
                  d-flex
                  flex-wrap
                  justify-content-center
                  list-unstyled
                  mb-0
                "
              >
                <li className="mx-xl-4 mx-2 mb-5 mb-md-0">
                  <img
                    className="img-fluid image-xs"
                    src="../assets/img/clients/northwestern.svg"
                    alt="northwestern logo"
                  />
                </li>
                <li className="mx-xl-4 mx-2 mb-5 mb-md-0">
                  <img
                    className="img-fluid image-xs"
                    src="../assets/img/clients/google.svg"
                    alt="google logo"
                  />
                </li>
                <li className="mx-xl-4 mx-2 mb-5 mb-md-0">
                  <img
                    className="img-fluid image-xs"
                    src="../assets/img/clients/university-of-chicago.svg"
                    alt="university logo"
                  />
                </li>
                <li className="mx-xl-4 mx-2 mb-5 mb-md-0">
                  <img
                    className="img-fluid image-xs"
                    src="../assets/img/clients/corsair.svg"
                    alt="corsair logo"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}

export default IntroSection
