import React from "react";
interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <>
      <div>ProductPage: {slug?.join("/") ?? "Home"}</div>
      <div>SortOrder param: {sortOrder}</div>
    </>
  );
};

export default ProductPage;
