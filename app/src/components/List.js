import "./List.css";
export default (props) => {
  const list = props.ceps;
  console.log(list);
  console.log("Desse componente ai");
  return (
    <section className="ulContainer">
      {list.map((x,index) => (
        <div className="item" key={index}>
          <h1>CEP: {x.code} </h1>
          <p>End.: {x.address} </p>
          <p>Bairro: {x.district} </p>
          <p>Cidade: {x.city} </p>
          <p>Estado: {x.state} </p>
        </div>
      ))}
    </section>
  );
};
