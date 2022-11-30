import { useState, useEffect } from 'react';
import css from './UserCard.module.css';
function UserCard(props) {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const url = 'https://dummyjson.com/users/1';
    const resp = await fetch(url);
    const dataInJs = await resp.json();
    console.log('dataInJs ===', dataInJs);
    setUserData(dataInJs);
  }

  return (
    <div className={css.card}>
      <img src={userData.image} alt='' />
      <h2 className={css.title}>
        {userData.firstName} {userData.lastName}
      </h2>
      <h3 className={css.subtitle}>{userData.age}</h3>
      <p className={css.text}>
        Hair: {userData.hair.color} {userData.hair.type} <br />
        Height: {userData.height}
      </p>
    </div>
  );
}
export default UserCard;
