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
      <section class="header">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <h1>PROOF OF SUCCESS PROGRAM</h1>
              <h2>A Never-Ending LIVE Real Estate Investing Course</h2>
              <Link className="custombtn" to="/modules">
                GO TO MODULES
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section class="about-program py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="border-green border-bottom-right">
                <img
                  src="/media/images/frontend/twomillionaires.jpg"
                  class="img-fluid"
                  alt="Two Millionaires"
                />
              </div>
            </div>
            <div class="col-md-5 offset-md-1 pt-5">
              <h1>ABOUT THE PROGRAM</h1>
              <h2 class="subtitle">Learn by DOING!</h2>
              <p class="text-grey font-18 py-3">
                Follow along two real estate multi-millionaires doing their very
                own deals in real-time. The program is broken down by each
                property project from start to finish. Some of these properties
                are still in the works, so check back later for the end results!
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
            <div class="col-md-6 mt-3">
              <div class="border-green border-top-left">
                <img
                  src="/media/images/frontend/jt.jpg"
                  class="img-fluid"
                  alt="JT Foxx"
                />
                <div class="about-speaker">
                  <div class="inner">
                    <h2>JT Foxx</h2>
                    <p>
                      Becoming a top real estate investor or entrepreneur
                      requires persistence, ambition, effort, loyalty,
                      commitment and a strong work ethic. JT started with
                      nothing and grew his real estate empire over time. Now, he
                      teaches people like you exactly what he did with buying
                      properties below-market. There's no such thing as "get
                      rich quick", but if you follow his steps, we assure you
                      that you'll get there soon.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-3">
              <div class="border-green border-bottom-right">
                <img
                  src="/media/images/frontend/paulie.jpg"
                  class="img-fluid"
                  alt="Paulie"
                />
                <div class="about-speaker">
                  <div class="inner">
                    <h2>Paulie K.</h2>
                    <p>
                      Paulie K. is one of the top real estate investors in the
                      U.S. as well as a highly successful entrepreneur, author,
                      speaker, and TV personality. He is the owner and CEO of
                      Rev Homes, LLC. He has been featured on A&E’s Bid, Build
                      and Design and he was also the subject of a documentary
                      called The 24-hour Entrepreneur.
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
