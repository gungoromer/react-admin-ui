import React from "react";
import "./ProductCategoryAdd.scss";

type Props = {
  setOpenAddModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductCategoryAdd = (props: Props) => {
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");

    props.setOpenAddModal(false);
  };

  return (
    <div className="productCategoryAdd">
      <div className="modal">
        <span className="close" onClick={() => props.setOpenAddModal(false)}>
          X
        </span>
        <div className="info">
          <h1>Product Category Add</h1>
        </div>
        <form className="formItems">
          <div className="item">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="item">
            <label>Description</label>
            <input type="text" placeholder="Description" />
          </div>
          <div className="item">
            <label>Is Active</label>
            <input type="checkbox" placeholder="IsActive" />
          </div>
          <button type="submit" onClick={handleSumbit}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCategoryAdd;
