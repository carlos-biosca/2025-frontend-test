import "./Title.css";

const Title = ({ title, subtitle, classes }) => {
  return (
    <div className={classes}>
      <h1 className="title">{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default Title;
