import { Link } from 'react-router';
import logo from '../../images/loginIcon.png';
import s from '../../RecipesForm/RecipesForm.module.css';
import { useState } from 'react';

function Sort({options, value, onClick}) {

  return (
    <>
        {
            options.map(option =>
                <label className={s["form__sorting-button"]} htmlFor={option.value} key={option.value}>
                        {option.name}
                    <input 
                        onClick={(event) => onClick(event.target.value)} 
                        type="radio" 
                        id={option.value} 
                        name='sort'
                        value={option.value}
                    />
                </label>
            )
        }
        
    </>
  );
}

export default Sort;