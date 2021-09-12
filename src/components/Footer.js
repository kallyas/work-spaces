import React from 'react';

function Footer() {
  return (
    <footer class="footer pb-5 bg-primary text-white pt-9 mt-n9">
      <div class="container">
        <div class="row mt-6">
          <div class="col-xl-3 mb-3 mb-xl-0">
            <img
              src="../assets/light.svg"
              height="30"
              class="mb-3"
              alt="Spaces logo"
            />
            <p>Work space Directory Listing </p>
          </div>
          <div class="col-6 col-xl-2 mb-5 mb-xl-0">
            <span class="h5">Works Space</span>
            <ul class="footer-links mt-2">
              <li>
                <a target="_blank" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a target="_blank" href="/">
                  Products
                </a>
              </li>
              <li>
                <a target="_blank" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a target="_blank" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-xl-3 mb-5 mb-xl-0">
            <span class="h5">Other</span>
            <ul class="footer-links mt-2">
              <li>
                <a href="/">
                  Documentation
                  <span class="badge badge-sm badge-secondary ml-2">v3.0</span>
                </a>
              </li>
              <li>
                <a href="/">Changelog</a>
              </li>
              <li>
                <a target="_blank" href="/">
                  Support
                </a>
              </li>
              <li>
                <a target="_blank" href="/">
                  License
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-xl-4 mb-5 mb-xl-0">
            <span class="h5">Get the app</span>
            <p class="text-muted font-small mt-2">
              It's easy. Just select your device.
            </p>
            <button class="btn btn-sm btn-white mb-xl-0 mr-2 mr-lg-2">
              <span class="d-flex align-items-center">
                <span class="icon icon-brand mr-2">
                  <span class="fab fa-apple"></span>
                </span>
                <span class="d-inline-block text-left">
                  <small class="font-weight-normal d-block">Available on</small>
                  App Store
                </span>
              </span>
            </button>
            <button class="btn btn-sm btn-white">
              <span class="icon icon-brand mr-2">
                <span class="fab fa-google-play"></span>
              </span>
              <span class="d-inline-block text-left">
                <small class="font-weight-normal d-block">Available on</small>
                Google Play
              </span>
            </button>
          </div>
        </div>
        <hr class="my-3 my-lg-5" />
        <div class="row">
          <div class="col mb-md-0">
            <a href="/" target="_blank" class="d-flex justify-content-center">
              <img
                src="../assets/light.svg"
                height="25"
                class="mb-3"
                alt="Themesberg Logo"
              />
            </a>
            <div
              class="
                d-flex
                text-center
                justify-content-center
                align-items-center
              "
              role="contentinfo"
            >
              <p class="font-weight-normal font-small mb-0">
                Copyright © Work Spaces{' '}
                <span class="current-year">{new Date().getFullYear()}</span>.
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
