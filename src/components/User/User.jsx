import s from "./User.module.css";

function User({ avatar, name, position, id, onClick }) {
  function handleUserClick() {
    console.log(name);
  }

  return (
    <li
      className={s.user}
      onClick={() => {
        onClick(name);
        handleUserClick(id);
      }}
    >
      <img className={s.userAvatar} src={avatar} alt={`Avatar ${name}`} />
      <div>
        <p className={s.userName}>{name}</p>
        <p className={s.userPosition}>{position}</p>
      </div>
    </li>
  );
}

export default User;
