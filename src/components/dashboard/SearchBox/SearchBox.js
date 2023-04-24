import React from 'react';
import styles from './SearchBox.module.scss';

function SearchBox() {
  return (
    <div className={styles.search__box}>
        <form className={styles.search__form}>
            <input type="search" placeholder="Search..."/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default SearchBox