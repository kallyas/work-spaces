const Testimonials = () => {
    return (
      <div className="section bg-white">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-9 text-center">
              <div className="nav-wrapper">
                <ul
                  className="
                      nav nav-pills nav-pill-circle
                      flex-sm-row
                      justify-content-center
                    "
                  id="tab-34"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="
                          nav-link
                          bg-white
                          text-sm-center
                          avatar-link
                          active
                        "
                      id="tab-link-example-13"
                      data-toggle="tab"
                      href="#link-example-13"
                      role="tab"
                      aria-controls="link-example-13"
                      aria-selected="true"
                    >
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/profile-picture-3.jpg"
                        alt="Bonnie avatar"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link bg-white text-sm-center avatar-link"
                      id="tab-link-example-14"
                      data-toggle="tab"
                      href="#link-example-14"
                      role="tab"
                      aria-controls="link-example-14"
                      aria-selected="false"
                    >
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/profile-picture-1.jpg"
                        alt="Neil avatar"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link bg-white text-sm-center avatar-link"
                      id="tab-link-example-15"
                      data-toggle="tab"
                      href="#link-example-15"
                      role="tab"
                      aria-controls="link-example-15"
                      aria-selected="false"
                    >
                      <img
                        className="rounded-circle"
                        src="../assets/img/team/profile-picture-4.jpg"
                        alt="Christopher avatar"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card">
                <div className="card-body p-0">
                  <div className="tab-content" id="tabcontentexample-5">
                    <div
                      className="tab-pane fade show active"
                      id="link-example-13"
                      role="tabpanel"
                      aria-labelledby="tab-link-example-13"
                    >
                      <span className="d-block my-3">
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                      </span>
                      <blockquote className="blockquote bg-white p-0 p-md-4">
                        I used Themesberg's logo creation services along with
                        their website development services. They have been a
                        pleasure to work with and have been responsive to all
                        questions asked.
                        <footer className="blockquote-footer mt-3 text-primary">
                          Bonnie Green
                        </footer>
                      </blockquote>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="link-example-14"
                      role="tabpanel"
                      aria-labelledby="tab-link-example-14"
                    >
                      <span className="d-block my-3">
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                      </span>
                      <blockquote className="blockquote bg-white p-0 p-md-4">
                        I have worked with Themesberg over the years on a number
                        of projects. I've always found them to be responsive,
                        friendly and up-to-date with all the technology - which
                        everyone knows is constantly changing.
                        <footer className="blockquote-footer mt-3 text-primary">
                          Neil Sims
                        </footer>
                      </blockquote>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="link-example-15"
                      role="tabpanel"
                      aria-labelledby="tab-link-example-15"
                    >
                      <span className="d-block my-3">
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                        <span className="star fas fa-star text-warning"></span>
                      </span>
                      <blockquote className="blockquote bg-white p-0 p-md-4">
                        Themesberg are the best in the business for website design
                        and building. They worked hard to give us exactly what we
                        wanted and more for our website and delivered on time. We
                        would definitely use them again.
                        <footer className="blockquote-footer mt-3 text-primary">
                          Christopher Wood
                        </footer>
                      </blockquote>
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
  
  export default Testimonials;
  