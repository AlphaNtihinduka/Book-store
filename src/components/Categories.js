import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../Redux/Categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="categories-wrapper">
      <h1>{categories}</h1>
      <button className="categories-btn" type="button" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default Categories;
