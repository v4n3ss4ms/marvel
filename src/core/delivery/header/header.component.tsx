'use client'

import { FC } from 'react'
import styles from './header.module.scss'
import { Logo } from '../logo/logo.component'
import { useFavoriteCharacters } from '../../../features/characters/hooks/use-favorite-characters'

export const HeaderComponent: FC = () => {
  const { favoritesCounter } = useFavoriteCharacters()
  return (
    <header>
      <nav className={styles['main-nav']} aria-label="Main menu">
        <ul className={styles['main-nav__list']}>
          <li className={styles['main-nav__item']}>
            <a href="/">
              <Logo className={styles['main-nav__logo']} />
            </a>
          </li>
          <li className={styles['main-nav__item']}>
            <a href="#" className={styles.favorites}>
              <svg
                className={'fav'}
                width="15"
                height="14"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3.80348L6 0.161865L0 3.80348V11.607L12 21.8382L24 11.607V3.80348L18 0.161865L12 3.80348Z"
                  fill="#EC1D24"
                />
              </svg>
              {favoritesCounter()}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
