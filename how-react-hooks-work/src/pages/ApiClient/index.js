
import useArticle from "./useArticle";
import useUser from "./useUser";
import useComments from "./useComments";

const ArticleView = ({ id }) => {
  const { data, error, loading } = useArticle(id);
  const { data: author } = useUser(data?.userId);
  const { data: comments } = useComments({ articleId: id });

  if (!data || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      {
        author && (
          <p>By {author.name}</p>
        )
      }
      <p>{data.body}</p>
      <h2>Comments</h2>
      {
        comments && comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.body}</p>
            <p>By {comment.email}</p>
          </div>
        ))
      }
    </div>
  );
};

const Demo = () => {
  return (
    <div>
      <h1>API Client</h1>
      <ArticleView id={1} />
    </div>
  );
};

export default Demo;
