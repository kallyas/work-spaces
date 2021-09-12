const Header = () => {
    return (
      <header className="header-global">
        <nav
          id="navbar-main"
          className="
            navbar navbar-main navbar-theme-primary navbar-expand-lg
            headroom
            py-lg-3
            px-lg-6
            navbar-dark navbar-transparent navbar-theme-primary
          "
        >
          <div className="container">
            <a className="navbar-brand @@logo_classNamees" href="../index.html">
              <img
                className="navbar-brand-dark common"
                src="../assets/light.svg"
                height="35"
                alt="Logo light"
              />
              <img
                className="navbar-brand-light common"
                src="../assets/dark.svg"
                height="35"
                alt="Logo dark"
              />
            </a>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="../index.html">
                      <img
                        src="../assets/dark.svg"
                        height="35"
                        alt="Logo Impact"
                      />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <a href="/" role="button" className="fas fa-times">
                      .
                    </a>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav navbar-nav-hover justify-content-center">
                <li className="nav-item dropdown">
                  <a
                    href="/"
                    id="mainPagesDropdown"
                    className="nav-link dropdown-toggle"
                    aria-expanded="false"
                    data-toggle="dropdown"
                  >
                    <span className="nav-link-inner-text mr-1">Front pages</span>
                    <i className="fas fa-angle-down nav-link-arrow"></i>.
                  </a>
                  <div
                    className="dropdown-menu dropdown-megamenu p-3 p-lg-4"
                    aria-labelledby="mainPagesDropdown"
                  >
                    <div className="row">
                      <div className="col-6 col-lg-4">
                        <h6 className="d-block mb-3 text-primary">Main pages</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/index.html"
                            >
                              Landing
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/index-2.html"
                            >
                              Landing 2
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/index-3.html"
                            >
                              Landing 3
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/about.html"
                            >
                              About
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/pricing.html"
                            >
                              Pricing
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a className="megamenu-link" href="../html/team.html">
                              Team
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/contact.html"
                            >
                              Contact
                            </a>
                          </li>
                        </ul>
                        <h6 className="d-block text-primary">Legal</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/legal.html"
                            >
                              Legal center
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/terms.html"
                            >
                              Terms & agreement
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-lg-4">
                        <h6 className="d-block mb-3 text-primary">Listing</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/all-spaces.html"
                            >
                              All spaces
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/all-spaces-map.html"
                            >
                              Map view
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/all-spaces-sidebar.html"
                            >
                              All spaces sidebar
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/single-space.html"
                            >
                              Space details
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/profile.html"
                            >
                              Profile
                            </a>
                          </li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Support</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/support.html"
                            >
                              Support center
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/support-topic.html"
                            >
                              Support topic
                            </a>
                          </li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Blog</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a className="megamenu-link" href="../html/blog.html">
                              Blog
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/blog-post.html"
                            >
                              Blog post
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-lg-4">
                        <h6 className="d-block mb-3 text-primary">User</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/sign-in.html"
                            >
                              Sign in
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/sign-up.html"
                            >
                              Sign up
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/forgot-password.html"
                            >
                              Forgot password
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/reset-password.html"
                            >
                              Reset password
                            </a>
                          </li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Special</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a className="megamenu-link" href="../html/404.html">
                              404 Not Found
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a className="megamenu-link" href="../html/500.html">
                              500 Server Error
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/maintenance.html"
                            >
                              Maintenance
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/coming-soon.html"
                            >
                              Coming soon
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/blank.html"
                            >
                              Blank page
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="/"
                    id="dashboardPagesDropdown"
                    className="nav-link dropdown-toggle"
                    aria-expanded="false"
                    data-toggle="dropdown"
                  >
                    <span className="nav-link-inner-text mr-1">Dashboard</span>
                    <i className="fas fa-angle-down nav-link-arrow"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-megamenu-sm p-3 p-lg-4"
                    aria-labelledby="dashboardPagesDropdown"
                  >
                    <div className="row">
                      <div className="col-6">
                        <h6 className="d-block mb-3 text-primary">
                          User dashboard
                        </h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/dashboard/account.html"
                            >
                              My account
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/dashboard/settings.html"
                            >
                              Settings
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/dashboard/security.html"
                            >
                              Security
                            </a>
                          </li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Items</h6>
                        <ul className="list-style-none">
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/dashboard/my-items.html"
                            >
                              My items
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/dashboard/edit-item.html"
                            >
                              Edit item
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <h6 className="d-block mb-3 text-primary">Messaging</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/dashboard/messages.html"
                            >
                              Messages
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/dashboard/single-message.html"
                            >
                              Chat
                            </a>
                          </li>
                        </ul>
                        <h6 className="d-block mb-3 text-primary">Billing</h6>
                        <ul className="list-style-none mb-4">
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/dashboard/billing.html"
                            >
                              Billing details
                            </a>
                          </li>
                          <li className="mb-2 megamenu-item">
                            <a
                              className="megamenu-link"
                              href="../html/dashboard/invoice.html"
                            >
                              Invoice
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="/"
                    id="supportDropdown"
                    className="nav-link dropdown-toggle"
                    aria-expanded="false"
                    data-toggle="dropdown"
                  >
                    <span className="nav-link-inner-text mr-1">Support</span>
                    <i className="fas fa-angle-down nav-link-arrow"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-lg"
                    aria-labelledby="supportDropdown"
                  >
                    <div className="col-auto px-0">
                      <div className="list-group list-group-flush">
                        <a
                          href="https://themesberg.com/docs/spaces/getting-started/quick-start/"
                          target="_blank"
                          rel="noreferrer"
                          className="
                            list-group-item list-group-item-action
                            d-flex
                            align-items-center
                            p-0
                            py-3
                            px-lg-4
                          "
                        >
                          <span className="icon icon-md icon-secondary">
                            <i className="fas fa-file-alt"></i>
                          </span>
                          <div className="ml-4">
                            <span className="text-dark d-block">
                              Documentation
                              <span className="badge badge-sm badge-secondary ml-2">
                                v3.0
                              </span>
                            </span>
                            <span className="small">Examples and guides</span>
                          </div>
                        </a>
                        <a
                          href="https://themesberg.com/contact"
                          target="_blank"
                          rel="noreferrer"
                          className="
                            list-group-item list-group-item-action
                            d-flex
                            align-items-center
                            p-0
                            py-3
                            px-lg-4
                          "
                        >
                          <span className="icon icon-md icon-primary">
                            <i className="fas fa-microphone-alt"></i>
                          </span>
                          <div className="ml-4">
                            <span className="text-dark d-block">Support</span>
                            <span className="small">Looking for answers?</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="d-none d-lg-block @@cta_button_classNamees">
              <a href="/signup"  className="btn btn-md btn-outline-white animate-up-2 mr-3" >
                <i className="fas fa-user-plus mr-1"></i>
                <span className="d-none d-xl-inline">Sign up</span>
              </a>
              <a href="/login" className="btn btn-md btn-secondary animate-up-2" >
                <i className="fas fa-sign-in-alt mr-2"></i> Login
              </a>
            </div>
            <div className="d-flex d-lg-none align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar_global"
                aria-controls="navbar_global"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  