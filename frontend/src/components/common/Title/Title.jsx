import "./Title.css";

const Title = ({ title, subtitle, classes, email, highlight }) => {
  return (
    <div className={`title__container ${classes}`}>
      <h1 className="title">
        {title}{" "}
        {highlight && (
          <>
            <span className="title__highlight">{highlight}</span>!
          </>
        )}
      </h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {email && <p className="title__email">{email}</p>}
    </div>
  );
};

export default Title;
