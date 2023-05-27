import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

export const ProductInfo = () => {
  const { state, dispatch } = useContext(PageContext);
  return (
    <div>
      {state.isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <img
            width={"200px"}
            max-height={"200px"}
            src={state?.selectedProduct?.image}
            alt={state?.selectedProduct?._id}
          />
          {state?.selectedProduct?.title}
        </>
      )}
    </div>
  );
};
