/* eslint-disable jsx-a11y/heading-has-content */
import "./App.css";

import reactLogo from "./img/illustration-woman-online-desktop.svg";
import patternDesktop from "./img/bg-pattern-desktop.svg";
import boxDesktop from "./img/illustration-box-desktop.svg";
import boxMobile from "./img/illustration-woman-online-mobile.svg";


import Faq from "./components/Faq";
// import SingleFaq from "./SingleFaq";
import { useState } from "react";

const App = () => {

  const [faqs, setFaqs] = useState([
    {
      id: 0,
      title: "How many team members can I invite?",
      description: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
      open: false
    },
  
    {
      id: 1,
      title: "What is the maxximum file upload size?",
      description: 'No more than 2GB. All files in your account must fit your allotted storage space.',
      open: false
    },
  
    {
      id: 2,
      title: "How do I reset my password?",
      description: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
      open: false
    },
  
    {
      id: 3,
      title: "Can I cancel my subscription?",
      description: 'Yes! Send us a message and we’ll process your request no questions asked.',
      open: false
    },
  
    {
      id: 4,
      title: "Do you provide additional support?",
      description: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
      open: false
    },
  ]);

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if(i === index) {
        faq.open = !faq.open
      }else {
        faq.open = false
      }
      return faq
    }))
  }

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
                  {faqs.map((ele, i) => {
                    return (
                      // <SingleFaq
                      //   index={i}
                      //   toggleFaq={toggleFaq}
                      //   key={ele.id}
                      //   id = {ele.id}
                      //   title = {ele.title}
                      //   description = {ele.description}
                      //   />     
                      <Faq
                      toggleFaq={toggleFaq}
                      key={ele.id}
                      id = {ele.id}
                      title = {ele.title}
                      description = {ele.description}
                      open={ele.open}
                      />
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
