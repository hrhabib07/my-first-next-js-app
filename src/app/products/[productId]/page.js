import React from "react";

const SingleProductPage = ({ params, searchParams }) => {
  console.log("query", searchParams);
  return (
    <div>
      <h2>This is SingleProductPage - {params.productId}</h2>
    </div>
  );
};

export default SingleProductPage;
