import React from "react";
import { Link } from "react-router-dom";
import Box from "./Box";

function Home(props) {
  let featuredPrograms = props.programs.map((program, i) => {
    if (i >= 3) return;
    return <Box key={i} program={program} />;
  });

  return (
    <React.Fragment>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1>PROOF OF SUCCESS PROGRAM</h1>
              <h2>Your Quickest Path to Getting Results!</h2>
              <Link className="custombtn" to="/modules">
                GO TO MODULES
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-program py-5">
        <div className="container">
              <div className="about-program__header ">
                <h1>ABOUT THE PROGRAM</h1>
              </div>              
              <h2 className="subtitle">Learn by DOING!</h2>
              <p className="text-grey font-18 py-3">
              Too many programs are horizontal in nature. They just scratch the surface of wealth building, but the “Proof of Success” program is going to change the game for online learning and content. Filled with breakthroughs and advanced real-life business strategies that will work for you instantly, it’s strategies that worked yesterday, today and will work for you tomorrow.
              </p>
        </div>
      </section>

      <section className="the-experts py-5">
        <div className="container">
            <h1>THE EXPERTS</h1>
            <p className="font-18 mb-5">
              The hosts of your program and who you'll be learning from...
            </p>

            <div className="expert-boxes">
              <div className="expert">
                <img src="/media/images/frontend/jtfoxx.jpg" alt="JT Foxx"/>
                <h6>JT Foxx</h6>
                <i>World’s #1 Wealth & Business Coach and entrepreneur of many companies and brands</i>
              </div>
              <div className="expert">
                <img src="/media/images/frontend/george-ross.jpeg" alt="George Ross"/>
                <h6>George Ross</h6>
                <i>JT Foxx’s Coach & Celebrity Apprentice Judge</i>
              </div>
              <div className="expert">
                <img src="/media/images/frontend/hugh-hilton.jpg" alt="Hugh Hilton"/>
                <h6>Hugh Hilton</h6>
                <i>JT Foxx’s Coach & Property & Business Mogul</i>
              </div>
            </div>
            <div className="expert-boxes">
              <div className="expert">
                <img src="/media/images/frontend/mike-slade.jpg" alt="Mike Slade"/>
                <h6>Mike Slade</h6>
                <i>JT Foxx’s Coach & Venture Capitalist who worked for Steve Job and Bill Gates. Created ESPN.com and sold to ABC (now Disney)</i>
              </div>
              <div className="expert">
                <img src="/media/images/frontend/tycoonx.jpg" alt="Tycoon X"/>
                <h6>Tycoon X</h6>
                <i>JT Foxx's Coach & 10-Figure Property Tycoon</i>
              </div>
            </div>

        </div>
      </section>

      <section className="featured-modules py-5">
        <div className="container">
          <div className="row">
            <h1 className="d-flex justify-content-between pb-5">
              FEATURED MODULES
              <Link className="custombtn" to="/modules">
                GO TO ALL MODULES >>
              </Link>
            </h1>
            <div className="boxes">{featuredPrograms}</div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
