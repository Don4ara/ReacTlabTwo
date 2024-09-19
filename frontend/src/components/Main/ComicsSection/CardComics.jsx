import "./CardComics.css";

// eslint-disable-next-line react/prop-types
export default function CardComics({src, genre, title, darkmode}) {
  return (
    <section className={darkmode ? "dark" : ""}>
    <div className="card-main">
      <img src={src} alt={title} />
      <div className="card-title">
        <p className="card-genre card-font">{genre}</p>
        <p className="card-text card-font">{title}</p>
      </div>
    </div>
    </section>
  );
}
