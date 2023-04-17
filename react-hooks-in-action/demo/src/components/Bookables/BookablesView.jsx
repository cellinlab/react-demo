import { Link, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import BookableList from "./BookableList";
import BookableDetail from "./BookableDetail";
import PageSpinner from "../common/PageSpinner";

import useFetch from "../../utils/useFetch";

export default function BookablesView() {
  const { data: bookables = [], status, error } = useFetch("http://localhost:3001/bookables");

  const { id } = useParams();

  const bookable = bookables.find((b) => b.id === parseInt(id)) || bookables[0];

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  if (status === "loading") {
    return <PageSpinner />;
  }

  return (
    <main className="bookables-page">
      <div>
        <BookableList
          bookable={bookable}
          bookables={bookables}
          getUrl={(id) => `/bookables/${id}`}
        />
        <p className="controls">
          <Link to="/bookables/new" className="btn" replace={true}>
            <FaPlus />
            <span>New</span>
          </Link>
        </p>
      </div>
      <BookableDetail bookable={bookable} />
    </main>
  );
}
