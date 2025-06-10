import "./Title.css";

const Title = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </>
  );
};

export default Title;
