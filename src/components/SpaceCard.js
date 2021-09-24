const SpaceCard = (props) => {
  retuen(
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card border-light mb-4 animate-up-5">
        <a href="./single-space.html" className="position-relative">
          <img
            src="../assets/image-office.jpg"
            className="card-img-top p-2 rounded-xl"
            alt="themesberg office"
          />
        </a>
        <div className="card-body">
          <a href="./single-space.html">
            <h4 className="h5">{props.title}</h4>
          </a>
          <div className="d-flex my-4">
            <span className="star fas fa-star text-warning"></span>
            <span className="star fas fa-star text-warning"></span>
            <span className="star fas fa-star text-warning"></span>
            <span className="star fas fa-star text-warning"></span>
            <span className="star fas fa-star text-warning"></span>
            <span className="badge badge-pill badge-primary ml-2">{props.rating}</span>
          </div>
          <ul className="list-group mb-3">
            <li className="list-group-item small p-0">
              <span className="fas fa-map-marker-alt mr-2"></span>{props.location.name}
            </li>
            <li className="list-group-item small p-0">
              <span className="fas fa-bullseye mr-2"></span>{props.location.address}
            </li>
            <li className="list-group-item small p-0">
              <span className="fas fa-bullseye mr-2"></span>{props.location.Street}
            </li>
          </ul>
        </div>
        <div className="card-footer bg-soft border-top">
          <div className="d-flex justify-content-between">
            <div className="col pl-0">
              <span className="text-muted font-small d-block mb-2">Monthly</span>
              <span className="h5 text-dark font-weight-bold">{props.price}</span>
            </div>
            <div className="col">
              <span className="text-muted font-small d-block mb-2">People</span>
              <span className="h5 text-dark font-weight-bold">{props.people}</span>
            </div>
            <div className="col pr-0">
              <span className="text-muted font-small d-block mb-2">Sq.Ft</span>
              <span className="h5 text-dark font-weight-bold">{props.size}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;
