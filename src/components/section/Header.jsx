import React from 'react'

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className='header_logo'>
          <a href='/'>
            <em aria-hidden='true'></em>
            <span>webs<br/>youtube</span>
          </a>
        </h1>
        <nav className='header_menu'>
          <ul>
            <li>
              <a href=''>웹스토리보이</a>
            </li>
            <li>
              <a href='/today'>추천 영상</a>
            </li>
            <li>
              <a href='/developer'>추천 개발자</a>
            </li>
            <li>
              <a href='/webd'>웹디자인 기능사</a>
            </li>
            <li>
              <a href='/website'>웹표준 사이트</a>
            </li>
            <li>
              <a href='/webd'>웹디자인 기능사</a>
            </li>
          </ul>
          {/* 07번 5분 14초*/}
        </nav>
        <div className='header_sns'></div>
    </header>
  )
}

export default Header