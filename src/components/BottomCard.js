import React from 'react';

const BottomCard = () => {
  return (
    <div className="section py-0">
      <div className="container z-2">
        <div className="row position-relative justify-content-center align-items-cente">
          <div className="col-12">
            <div className="card border-light">
              <div className="card-body text-left px-5 py-4">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <p className="lead mb-4">
                      <span className="font-weight-bold">5500</span> venues in
                      <span className="font-weight-bold">400</span> cities across
                      <span className="font-weight-bold">73</span> countries, and
                      everyday counting.
                    </p>
                    <div className="row mb-4">
                      <div className="col">
                        <ul className="list-group mb-3">
                          <li className="list-group-item text-gray p-0 mb-2">
                            <a href="/">
                              <span className="fas fa-map-marker-alt mr-2"></span>
                              New York
                            </a>
                          </li>
                          <li className="list-group-item text-gray p-0 mb-2">
                            <a href="/">
                              <span className="fas fa-map-marker-alt mr-2"></span>
                              Paris
                            </a>
                          </li>
                          <li className="list-group-item text-gray p-0 mb-2">
                            <a href="/">
                              <span className="fas fa-map-marker-alt mr-2"></span>
                              Milano
                            </a>
                          </li>
                          <li className="list-group-item text-gray p-0">
                            <a href="/">
                              <span className="fas fa-map-marker-alt mr-2"></span>
                              Rome
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="list-group mb-3">
                          <li className="list-group-item text-gray p-0 mb-2">
                            <a href="/">
                              <span className="fas fa-map-marker-alt mr-2"></span>
                              Madrid
                            </a>
                          </li>
                          <li className="list-group-item text-gray p-0 mb-2">
                            <a href="/">
                              <span className="fas fa-map-marker-alt mr-2"></span>
                              Berlin
                            </a>
                          </li>
                          <li className="list-group-item text-gray p-0 mb-2">
                            <a href="/">
                              <span className="fas fa-map-marker-alt mr-2"></span>
                              London
                            </a>
                          </li>
                          <li className="list-group-item p-0">
                            <a href="/">
                              All cities
                              <span className="fas fa-arrow-right fa-xs ml-2"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a
                      href="/"
                      className="btn btn-secondary animate-up-2"
                    >
                      <span className="fas fa-plus mr-2"></span>List a Space
                    </a>
                  </div>
                  <div
                    className="
                  col-12 col-md-7
                  mt-5 mt-md-0
                  text-md-right
                  d-none d-sm-block
                "
                  >
                    <img
                      src="/assets/world-map.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
