import css from './Grid.module.css';
function Grid(props) {
  const divStyles = props.cols
    ? {
        gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
      }
    : {};
  return (
    <div style={divStyles} className={css.grid}>
      {props.children}
    </div>
  );
}
export default Grid;
