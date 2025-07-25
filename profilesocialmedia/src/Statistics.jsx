export const Statistics = ({title, stats}) =>{
    return <section class="statistics">
  <h2 class="title">{title}</h2>

  <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
</section>
}