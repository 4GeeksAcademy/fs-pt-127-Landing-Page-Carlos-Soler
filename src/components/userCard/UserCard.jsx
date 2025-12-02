import React from "react";

const UserCard = () => {
  const cards = [1, 2, 3, 4]; // Generamos 4 tarjetas

  return (
    <div className="container mb-5">
      <div className="row">
        {cards.map((item, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="card h-100">

              <img
                 src={`https://picsum.photos/500/325?random=${index}`}
                 className="card-img-top"
                 alt="placeholder"
              />



              <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>

              <div className="card-footer text-center">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
