import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ResidentCard.css'

const ResidentCard = ({ url }) => {
  const [resident, setResident] = useState();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResident(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <article className='resident-container'>
      <header className='resident-header'>
        <img className='resident-img' src={resident?.image} alt={resident?.name} />
        <div className='resident-status'>
          <div className={`resident-circle-status ${resident?.status}`}></div>
          <span className='resident-status-span'>{resident?.status}</span>
        </div>
      </header>
      <section className='resident-container-info'>
        <h1 className='resident-title'>{resident?.name}</h1>
        <hr />
        <ul className='resident-list'>
          <li className='resident-item'>
            <span className='resident-item-span'>Species: </span>
            <span className='resident-contain-span'>{resident?.species}</span>
          </li>
          <li className='resident-item'>
            <span className='resident-item-span'>Origin: </span>
            <span className='resident-contain-span'>{resident?.origin.name}</span>
          </li>
          <li className='resident-item'>
            <span className='resident-item-span'>Episodes where appear: </span>
            <span className='resident-contain-span'>{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
