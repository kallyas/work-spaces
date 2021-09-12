import React from 'react'

const HowItWorks = () => {
    return (
        <section className="section section-lg bg-soft">
        <div className="container">
          <div className="row justify-content-center mb-4 mb-lg-5">
            <div className="col-12 col-md-8 text-center">
              <h2 className="h1">
                <span className="font-weight-bold">How</span> it works?
              </h2>
              <p className="lead mt-3">
                All you’ll need are the details of the building and location,
                the types of space, pricing and some good quality photographs.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-10 col-lg-6 mx-auto">
              <div className="nav-wrapper">
                <ul
                  className="
                    nav nav-pills nav-fill
                    flex-column flex-sm-row
                    mb-lg-4 mb-0
                  "
                  id="tab-32"
                  role="tablist"
                >
                  <li className="nav-item mr-0 mr-sm-2 mr-md-0 mb-3 mb-lg-0">
                    <a
                      className="nav-link flex-sm-fill text-sm-center active"
                      id="tab-find-space"
                      data-toggle="tab"
                      href="#find-space"
                      role="tab"
                      aria-controls="find-space"
                      aria-selected="true"
                      ><span className="far fa-building mr-2"></span>Find your
                      Space</a
                    >
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link flex-sm-fill text-sm-center"
                      id="tab-submit-space"
                      data-toggle="tab"
                      href="#submit-space"
                      role="tab"
                      aria-controls="submit-space"
                      aria-selected="false"
                      ><span className="far fa-money-bill-alt mr-2"></span>Submit
                      your Space</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="tab-content mt-lg-5" id="tabcontentexample-3">
                <div
                  className="tab-pane fade show active"
                  id="find-space"
                  role="tabpanel"
                  aria-labelledby="tab-find-space"
                >
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="card border-light mb-4 mb-lg-0 text-center">
                        <div className="card-body p-4 px-xl-4 py-xl-6">
                          <div
                            className="
                              icon icon-shape icon-lg icon-shape-primary
                              mb-4
                              rounded-circle
                            "
                          >
                            <span className="fas fa-map-pin"></span>
                          </div>
                          <h3 className="h5 my-3">1. Choose a workspace</h3>
                          <p>
                            It takes no longer than 15 minutes to list your
                            space on themesberg. Our user friendly process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="card border-light mb-4 mb-lg-0 text-center">
                        <div className="card-body p-4 px-xl-4 py-xl-6">
                          <div
                            className="
                              icon icon-shape icon-lg icon-shape-primary
                              mb-4
                              rounded-circle
                            "
                          >
                            <span className="far fa-calendar-check"></span>
                          </div>
                          <h3 className="h5 my-3">2. Schedule a tour</h3>
                          <p>
                            After you have uploaded your space - our website
                            makes it easy for you to keep the details up to
                            date.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                      <div className="card border-light mb-4 mb-lg-0 text-center">
                        <div className="card-body p-4 px-xl-4 py-xl-6">
                          <div
                            className="
                              icon icon-shape icon-lg icon-shape-primary
                              mb-4
                              rounded-circle
                            "
                          >
                            <span className="fas fa-mouse-pointer"></span>
                          </div>
                          <h3 className="h5 my-3">3. Book your workspace</h3>
                          <p>
                            Orders coming from themesberg are 100% prepaid. We
                            will bring you not just leads but new clients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col mt-lg-6 mt-3 text-center">
                    <a
                      href="./all-spaces.html"
                      className="btn btn-primary animate-up-2"
                      ><i className="fas fa-search-location mr-2"></i>Find a
                      Location</a
                    >
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="submit-space"
                  role="tabpanel"
                  aria-labelledby="tab-submit-space"
                >
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <div className="card border-light mb-4 mb-lg-0 text-center">
                        <div className="card-body p-3 px-xl-4 py-xl-6">
                          <div
                            className="
                              icon icon-shape icon-lg icon-shape-secondary
                              mb-4
                              rounded-circle
                            "
                          >
                            <span className="fas fa-clipboard-list"></span>
                          </div>
                          <h3 className="h5 my-3">1. List your space</h3>
                          <p>
                            It takes no longer than 15 minutes to list your
                            space on themesberg. Our user friendly onboarding
                            process.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="card border-light mb-4 mb-lg-0 text-center">
                        <div className="card-body p-3 px-xl-4 py-xl-6">
                          <div
                            className="
                              icon icon-shape icon-lg icon-shape-secondary
                              mb-4
                              rounded-circle
                            "
                          >
                            <span className="far fa-user"></span>
                          </div>
                          <h3 className="h5 my-3">2. Get ready</h3>
                          <p>
                            After you have uploaded your space - our website
                            makes it easy for you to keep the details up to
                            date.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="card border-light mb-4 mb-lg-0 text-center">
                        <div className="card-body p-3 px-xl-4 py-xl-6">
                          <div
                            className="
                              icon icon-shape icon-lg icon-shape-secondary
                              mb-4
                              rounded-circle
                            "
                          >
                            <span className="far fa-money-bill-alt"></span>
                          </div>
                          <h3 className="h5 my-3">3. Earn money</h3>
                          <p>
                            Orders coming from themesberg are 100% prepaid. We
                            will bring you not just leads but new clients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col mt-6 text-center">
                    <a
                      href="./submit-item.html"
                      className="btn btn-secondary animate-up-2"
                      ><i className="fas fa-plus mr-2"></i>List a Space</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HowItWorks
