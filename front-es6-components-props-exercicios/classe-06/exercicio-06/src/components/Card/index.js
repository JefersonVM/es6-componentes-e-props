import "./style.css";

const Card = ({ name, username, avatar, followers, following }) => {
  return (
    <div className="card">
      <div className="img-avatar">{avatar}</div>
      <div className="name-username">
        <h1>{name}</h1>
        <span>{username}</span>
      </div>
      <div className="followers-following">
        <span>{followers} seguidores</span>
        <span>{following} seguindo</span>
      </div>
    </div>
  );
};

export default Card;
