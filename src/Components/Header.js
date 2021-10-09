import React from "react";
import TypeWriter from "react-typewriter";
import Typewriter from 'typewriter-effect';



const Header = ({ data }) => {
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    /*var city = data.address.city;*/
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
      <li id="logo">&lt;AVI/&gt;</li>
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          
        
        
          <li className="current">
            <a className="smoothscroll" href="#home">
               &lt;Home&gt;
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              .About( )
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              .Resume( )
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              .Works( )
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              .Homage( )
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
            .Contact( )
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.7}>{name ? `I'm ${name} ` : null}</TypeWriter>
         </h1>
          <h2 style={{color: "white"}}>
          <Typewriter
             options={{
             strings: ["Web Developer","React Developer", "Java FullStack Developer"],
             autoStart: true,
             loop: true,
             deleteSpeed: 50
                       }}
           />
          </h2>

          <h3>
          <span> {/* &lt;{occupation}/&gt; */}
          
        
          
          </span>{occupation} {description}.
          </h3>
          
          
        
      
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
     
    </header>
  );
};

export default Header;
