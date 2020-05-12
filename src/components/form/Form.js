import React, { Component } from 'react';
import style from './form.module.css';


const Form = ({handleChange, inputValue, handleSubmit}) => {
    return (
        <header className={style.Searchbar}>
             <form className={style.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={style.SearchFormButton}>
                  <span className={style.SearchFormButtonLabel}>Search</span>
                </button>
                <input className={style.SearchFormInput} type="text" onChange={handleChange} value={inputValue}   />
            </form>
        </header>

    );
}

export default Form;