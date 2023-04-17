import { useNavigate, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function BookableList({ bookable, bookables, getUrl }) {
  const group = bookable?.group;

  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const groups = [...new Set(bookables.map((b) => b.group))];

  const navigate = useNavigate();

  const chnageGroup = (e) => {
    const bookablesInSelectedGroup = bookables.filter((b) => b.group === e.target.value);
    navigate(getUrl(bookablesInSelectedGroup[0].id));
  };

  const nextBookable = () => {
    const i = bookablesInGroup.indexOf(bookable);
    const nextIndex = (i + 1) % bookablesInGroup.length;
    const nextBookable = bookablesInGroup[nextIndex];
    navigate(getUrl(nextBookable.id));
  };

  return (
    <div>
      <select value={group} onChange={chnageGroup}>
        {groups.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((b) => (
          <li key={b.id} className={b.id === bookable.id ? "selected" : ""}>
            <Link to={getUrl(b.id)} className="btn" replace={true}>
              {b.title}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <button className="btn" onClick={nextBookable} autoFocus>
          <FaArrowRight />
          <span>Next</span>
        </button>
      </p>
    </div>
  );
}
