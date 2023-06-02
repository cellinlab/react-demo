import type { LinkProps } from "react-router-dom";
import { Link, useSearchParams } from "react-router-dom";

interface BrandLinkProps extends Omit<LinkProps, "to"> {
  brand: string;
}

const BrandLink = ({ brand, children, ...props }: BrandLinkProps) => {
  const [searchParams] = useSearchParams();
  const isActive = searchParams.get("brand") === brand;
  return (
    <Link
      to={`/?brand=${brand}`}
      {...props}
      style={{
        ...props.style,
        color: isActive ? "red" : "black",
      }}
    >
      {children}
    </Link>
  );
};

export default BrandLink;
