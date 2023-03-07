import "./index.css";

const TrendItem = ({ item }) => {
  return (
    <div className="trend_item">
      <h2>{item.title}</h2>
      <h4>{item.subTitle}</h4>
      <p>{item.body}</p>
    </div>
  );
};

export default TrendItem;
