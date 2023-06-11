import "./Card.css";

const Card = ({ title, par, lesson, index }) => {
  return (
    <div className="Card">
      <h6>{title}</h6>
      <b>{index}</b>
      <p>{par}</p>
      {lesson > 20 && index === 0 && <div>İleri Düzey</div>}
      <button>Devamı</button>
    </div>
  );
};

export default Card;
