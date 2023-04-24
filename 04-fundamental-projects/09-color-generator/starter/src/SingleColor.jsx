const SingleColor = ({ index, color }) => {
  //   console.log(color);
  const { hex, weight } = color;
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-cvalue">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
