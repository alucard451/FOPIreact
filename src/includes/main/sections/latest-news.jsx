import styles from '../../../css/main/latest_news.module.css'

export function LatestNews() {
  return (
    <div className={styles.latestNews}>
      <div className={styles.latestNewsHeader}>
        <div className={styles.latestNewsTitle}>Últimas Noticias</div>
        <div className="latest-news-all-link">
          <a href="/blog">Ver todo</a>
        </div>
      </div>
      <div className={styles.latestNewsList}>
        <div className={styles.latestNewsItem}>
          <h3>
            <a className="" href=" ">a</a>
          </h3>
          <div className="post-excerpt"></div>
        </div>
      </div>
    </div>
  );
}
