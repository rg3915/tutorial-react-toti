import React, { useState, useEffect } from 'react';

import { listRepositories } from '../api/github'
import Item from '../components/Item'

function Repositories() {
  // data: []
  const [data, setData] = useState([]);
  // const [usuario, setUsuario] = useState('');

  // useEffect é equivalente ao componentDidMount.
  useEffect(() => {
    listRepositories()
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <ul>
      {data.map(item => <Item key={item.id} {...item} />)}
    </ul>
  );
}
export default Repositories;