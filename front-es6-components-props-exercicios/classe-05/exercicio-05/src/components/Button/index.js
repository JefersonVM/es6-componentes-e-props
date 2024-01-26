import "./style.css";

const Button = ({ textobtn, btncolor }) => {
  return <button className={`btn-${btncolor}`}>{textobtn}</button>;
};

export default Button;
