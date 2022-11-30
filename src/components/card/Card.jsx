import css from './Card.module.css';
function Card(props) {
  return (
    <div className={css.card}>
      <h2 className={css.title}>James Bond</h2>
      <h3 className={css.subtitle}>Title: 007</h3>
      <p className={css.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        fugit asperiores soluta doloremque quia eligendi dignissimos eos non
        nobis blanditiis!
      </p>
    </div>
  );
}
export default Card;
