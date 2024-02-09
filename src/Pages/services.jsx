import React from "react";
import "./services.css";
import { NavLink } from "react-router-dom";

export default function Services() {
  return (
    <div className="container  py-5" id="services">


      <div class="line-long-area" data-aos="fade-up-right">
        <div class="line-long"></div>
      </div>

      <div className="row mt-3">
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-globe"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href="http://127.0.0.1:5173/webDevelopment"
              className="h4"
            >
              Web Design &amp; Development
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                  We specialize in creating unique and impactful websites that incorporate cutting-edge design techniques. Our websites are crafted with the finest elements that help businesses establish a strong online presence and enhance their brand identity in the digital world.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>
        {/* col */}
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-computer"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href=""
              className="h4"
            >
              Software Development
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                Our team specializes in providing tailored software development solutions using the latest technologies and industry best practices. We understand that every project has unique requirements and we strive to meet those needs while keeping in mind your business objectives.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>
        {/* col */}
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-mobile-screen"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href="http://127.0.0.1:5173/appDevelopment"
              className="h4"
            >
              Mobile App Development
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                Our team specializes in creating mobile apps that seamlessly work across various mobile devices and online platforms. We offer end-to-end solutions, from designing and integrating the app to managing its entire lifecycle.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>
        {/* col */}
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-bullhorn"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href=""
              className="h4"
            >
              Digital Marketing
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                Our company offers digital marketing services that can help you expand your business and reach a global audience in a cost-effective manner. Our team specializes in converting potential leads into loyal customers, ensuring a high return on investment for your marketing efforts.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>
        {/* col */}
        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">

              <span className="services-icon">
                <i class="fa-solid fa-gear"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href=""
              className="h4"
            >
              ERP Development
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                The development of ERP (Enterprise Resource Planning) involves designing, adapting and managing software systems that merge different business operations and procedures into a cohesive and centralized framework.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-xl-4 col-md-6"
          data-aos="zoom-out-up"
          data-aos-duration={500}
          data-aos-delay={300}
        >
          <div className="colbox">
            <div className="boxicon">
              <span className="services-icon">
                {/* <i class="fa-solid fa-gear"></i> */}
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
            {/* boxicon */}
            <a
              href=""
              className="h4"
            >
              Search Engine Optimisation
            </a>
            <div className="boxcont">
              <div className="boxdesc">
                <p style={{textAlign: "justify", marginTop:"5px"}}>
                Boost your business's online presence and increase your search engine visibility. We'll assist you in optimizing your website's content to improve your organic keyword ranking and drive more traffic to your site.
                </p>
              </div>
            </div>
            {/* boxcont */}
          </div>
          {/* colbox */}
        </div>

        <div className="col-12 btngroup mt-4">
          <NavLink to={'/comming-soon'}><button className="btn btn-outline-warning" >Explore More</button></NavLink>

          <NavLink to={'/comming-soon'}><button className="btn btn-warning">Get a Quote</button></NavLink>

        </div>
      </div>
    </div>
  );
}
