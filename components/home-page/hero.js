import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/park.png'
          alt='An image showing Park'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm park</h1>
      <p>I blog about FrontEnd - especially frontend frameworks like React.</p>
    </section>
  );
}

export default Hero;
