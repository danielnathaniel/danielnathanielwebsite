import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Daniel Nathaniel's personal website. Los Angeles based full stack developer"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A simple, static, responsive react app.
          </p>
        </div>
      </header>
      <p> Welcome 👋🏽. Read more about me <Link to="/about">here </Link>
        or you can find more at my {' '}
        <Link to="/resume"> resume</Link>, {' '}
        <Link to="/projects"> projects</Link>, {' '}
        <Link to="/stats"> site statistics</Link> {' '}
        or <Link to="/contact">contact me.</Link>
      </p>
      <p> Source code available <a href="https://github.com/danielnathaniel/danielnathanielwebsite">here</a>.</p>
    </article>
  </Main>
);

export default Index;
