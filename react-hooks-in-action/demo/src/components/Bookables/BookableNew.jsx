import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";

import useFormState from "./useFormState";
import { createItem } from "../../utils/api";

import BookableForm from "./BookableForm";
import PageSpinner from "../common/PageSpinner";

export default function BookableNew() {
  const navigate = useNavigate();
  const formState = useFormState();
  const queryClient = useQueryClient();

  const {
    mutate: createBookable,
    status,
    error,
  } = useMutation((item) => createItem("http://localhost:3001/bookables", item), {
    onSuccess: (bookable) => {
      queryClient.setQueryData(["bookables"], (old) => [...(old || []), bookable]);
      navigate(`/bookables/${bookable.id}`);
    },
  });

  function handleSubmit() {
    createBookable(formState.state);
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  if (status === "loading") {
    return <PageSpinner />;
  }

  return <BookableForm formState={formState} handleSubmit={handleSubmit} />;
}
