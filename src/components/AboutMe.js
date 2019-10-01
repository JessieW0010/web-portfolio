import React from 'react';

export default function AboutMe() {
  return (
    <section id="one" className="wrapper style1 special">
      <div className="about-image">
        <img src={require('../assets/images/avatar.png')} />
      </div>
      <div className="inner">
        <header className="major">
          <h2>
            Arcu aliquet vel lobortis ata nisl
            <br />
            eget augue amet aliquet nisl cep donec
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>
  );
}
