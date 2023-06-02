import type { LinkProps } from "react-router-dom";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: true,
  });

  return (
    <div>
      <Link
        style={{
          textDecoration: match ? "underline" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match ? " \u2713" : ""}
    </div>
  );
};

export default CustomLink;
