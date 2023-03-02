export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Caracteristicas</h2>
          <p>Beneficios de adquirir tu Lote en Valle de las Orquideas</p>
        </div>
        <div className="row">
          <div className="col-4">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    {/* <i className={d.icon}></i> */}
                    <img width={120} src={d.img} alt="" />
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
