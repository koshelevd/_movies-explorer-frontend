import './Portfolio.css';

function Portfolio() {
  return (
    <section className="section portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a href="/" className="portfolio__link link smoothly">
            <span className="portfolio__link-title">Статичный сайт</span>
            <span className="portfolio__link-icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a href="/" className="portfolio__link link smoothly">
            <span className="portfolio__link-title">Адаптивный сайт</span>
            <span className="portfolio__link-icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a href="/" className="portfolio__link link smoothly">
            <span className="portfolio__link-title">Одностраничное приложение</span>
            <span className="portfolio__link-icon">&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
