import React from "react";
import { Link } from "react-router-dom";
import Box from "./Box";

function Home(props) {
  let featuredPrograms = props.programs.map((program, i) => {
    const ids = [2, 4, 5];
    if (ids.includes(program.id))
      return <Box key={i} program={program} />;
  });

  return (
    <React.Fragment>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
          <div class="row">
              <div class="col-md-6">
                <div className="about-program__header ">
                </div>              
              </div>
              <div class="col-md-6">
                <h1>ABOUT THE PROGRAM</h1>
                <p className="text-grey font-18 py-3">
                Too many programs are horizontal in nature. They just scratch the surface of wealth building, but the “Proof of Success” program is going to change the game for online learning and content. Filled with breakthroughs and advanced real-life business strategies that will work for you instantly, it’s strategies that worked yesterday, today and will work for you tomorrow.
                </p>
              </div>
          </div>
        </div>
      </section>

      <section class="the-experts py-5">
        <div class="container">
          <div class="row">
            <h1>THE EXPERTS</h1>
            <p class="text-grey font-18">
              The hosts of your program and who you'll be learning from...
            </p>
            <div class="col-md-4 mt-3">
              <div class="border-green border-bottom-right">
                <img
                  src="/media/images/frontend/jtfoxx.jpg"
                  class="img-fluid"
                  alt="JT Foxx"
                />
                <div class="about-speaker">
                  <div class="inner">
                    <h2>JT Foxx</h2>
                    <p>
                    World’s #1 Wealth & Business Coach and entrepreneur of many companies and brands
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-3">
              <div class="border-green border-bottom-right">
                <img
                  src="/media/images/frontend/george-ross.jpeg"
                  class="img-fluid"
                  alt="George Ross"
                />
                <div class="about-speaker">
                  <div class="inner">
                    <h2>George Ross</h2>
                    <p>
                    JT Foxx’s Coach & Celebrity Apprentice Judge
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-3">
              <div class="border-green border-bottom-right">
                <img
                  src="/media/images/frontend/hugh-hilton.jpg"
                  class="img-fluid"
                  style={{'object-position': '-50px bottom'}}
                  alt="Hugh Hilton"
                />
                <div class="about-speaker">
                  <div class="inner">
                    <h2>Hugh Hilton</h2>
                    <p>
                    JT Foxx’s Coach & Property & Business Mogul
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-3">
              <div class="border-green border-bottom-right">
                <img
                  src="/media/images/frontend/mike-slade.jpg"
                  class="img-fluid"
                  alt="Mike Slade"
                />
                <div class="about-speaker">
                  <div class="inner">
                    <h2>Mike Slade</h2>
                    <p>
                    JT Foxx’s Coach & Venture Capitalist who worked for Steve Job and Bill Gates. Created ESPN.com and sold to ABC (now Disney)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-3">
              <div class="border-green border-bottom-right">
                <img
                  src="/media/images/frontend/tycoonx.jpg"
                  class="img-fluid"
                  alt="Tycoon X"
                />
                <div class="about-speaker">
                  <div class="inner">
                    <h2>Tycoon X</h2>
                    <p>
                    JT Foxx's Coach & 10-Figure Property Tycoon
                    </p>
                  </div>
                </div>
              </div>
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
