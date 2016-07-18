import React from 'react';
import { IndexLink, Link } from 'react-router';


class Home extends React.Component {
    render() {
            return (
              <div className="page-wrapper">
                <div className="site-header fade-in">
                  <div className="row columns">
                  <h1 className="text-center site-title">Reactive Web Designs</h1>
                    <h5 className="page-sub-title text-center">Building Responsive Site</h5>
                </div>
                </div>

                <div className="row expanded">
                    <h1 className="page-sub-heading">Reactive Web Designs</h1>
                <div className="large-12 columns">


          <h5>Web Design</h5>
          <p>At Reactive Web Designs we believe time is everything. The time your web sites takes to load is the difference
          between winning a new client or make a new sale. Thats is why we build every site as a single page application using the
          same systems from the team at <strong>Facebook</strong> created ReactJS. React and Facebook have revolutionised the way Web
        data is exchanged.</p>
          <a href="#">This is a link</a>
        </div>



                </div>

              </div>

          );
        }
      }

    export default Home;
