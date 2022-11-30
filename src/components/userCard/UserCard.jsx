import css from './UserCard.module.css';
function UserCard(props) {
  return (
    <div className={css.card}>
      <img src='/img/user.jpg' alt='' />
      <h2 className={css.title}>Name</h2>
      <h3 className={css.subtitle}>Age</h3>
      <p className={css.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
        consectetur.
      </p>
    </div>
  );
}
export default UserCard;
