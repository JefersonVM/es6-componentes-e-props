import "./style.css";
import BadgeVeriry from "../../assets/secure.svg";

const UserCard = ({
  children,
  key,
  name,
  avatar,
  jobRole,
  following,
  color,
  verify,
}) => {
  return (
    <div className="user-card">
      {verify && <img src={BadgeVeriry} alt="verify" className="verify" />}

      {children}
      <strong>{name}</strong>
      <span>{jobRole}</span>

      <button className={`btn-card ${following ? "following" : "unfollowing"}`}>
        {following ? "Connected" : "Connect"}
      </button>
    </div>
  );
};

export default UserCard;
