import s from './Statistics.module.css';

const colors = ['#f44336', '#3f51b5', '#4caf50', '#ff9800', '#9c27b0']; 

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <div className={s.statBox}>
        <h2 className={s.title}>{title}</h2>

        <ul className={s.statList}>
          {stats.map(({ id, label, percentage }, index) => (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: colors[index] }} 
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
