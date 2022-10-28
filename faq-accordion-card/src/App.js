/* eslint-disable jsx-a11y/heading-has-content */
import "./App.css";

import data from "./data";

import reactLogo from "./img/illustration-woman-online-desktop.svg";
import patternDesktop from "./img/bg-pattern-desktop.svg";
import boxDesktop from "./img/illustration-box-desktop.svg";
import boxMobile from "./img/illustration-woman-online-mobile.svg";

import SingleFaq from "./SingleFaq";

const App = () => {

  return (
    <>
      <div className="App" style={{ backgroundImage: { patternDesktop } }}>
        <main className="container">
          <section className="section-accordion">
            <section className="section-center">
              <div className="accordion-left">
                <img className="reactLogo" src={reactLogo} alt="reactLogo" />
                <img className="box" src={boxDesktop} alt="box" />
                <img
                  className="reactLogoQuery"
                  src={boxMobile}
                  alt="reactLogoQuery"
                  style={{ display: "none" }}
                />
              </div>

              <div className="accordion-right">
                <div className="accordion-top">
                  <h2>FAQ</h2>
                </div>

                <div className="accordion-bottom">
                  {data.map((ele) => {
                    return (
                      <SingleFaq key={ele.id} id = {ele.id} title = {ele.title} description = {ele.description}/>
                      
                    );
                  })}
                </div>
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
