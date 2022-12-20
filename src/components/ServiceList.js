import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService, clearServiceField } from '../actions/actionCreators';

export default function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(clearServiceField());
  }
  const handleEdit = (item) => {
    dispatch(editService(item.id, item.name, item.price));
  };

  return (
    <ul>
      {items.map(item => <li key={item.id}> {item.name} - {item.price}
        <button className="button" onClick={() => handleEdit(item)}>Edit</button>
        <button className="button" onClick={() => handleRemove(item.id)}>Remove</button></li>
      )}
    </ul>
  )
}