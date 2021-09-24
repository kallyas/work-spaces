const CityCard = (props) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
      <a
        href="./all-spaces.html"
        className="card img-card fh-400 border-0 outer-bg"
        data-background-inner="../assets/newyork.jpg"
      >
        <div
          className="inner-bg overlay-dark"
          style={{ backgroundImage: "url('../assets/newyork.jpg')" }}
        ></div>
        <div className="card-img-overlay d-flex align-items-center">
          <div className="card-body text-white p-3">
            <h5 className="text-uppercase text-center">{props.name}</h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CityCard;
