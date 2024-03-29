import React from "react";
import { Row, Col } from "react-bootstrap-v5";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container py-5">
      {/* <footer class="bg-body-tertiary text-center text-lg-start">

        <div class="text-center  p-2"  >
          <img src="img/logo/Dhanwis Logo-01.png" width={'150'} height={'auto'} alt="team-logo"  />
          Copyright © 2024 Dhanwise TechInfo Solutions All rights reserved.
          <a style={{ color: 'rgb(207, 207, 207)' }} className=' p-3  icon' href="https://www.facebook.com/dhanwisinfo"><i class="fa-brands fa-facebook-f"></i></a>
          <a style={{ color: 'rgb(207, 207, 207)' }} className=' p-3  icon' href="https://api.whatsapp.com/send?phone=8086487219"><i class="fa-brands fa-whatsapp"></i></a>
          <a style={{ color: 'rgb(207, 207, 207)' }} className=' p-3  icon' href="https://in.linkedin.com/in/dhanwis-techinfo-solutions-9505622a7"><i class="fab fa-linkedin-in"></i></a>
          <a style={{ color: 'rgb(207, 207, 207)' }} className=' p-3  icon' href="https://www.instagram.com/dhanwistechinfosolutions/"><i class="fa-brands fa-instagram"></i></a>
        </div>

      </footer> */}
      <footer class="bg-body-tertiary text-center text-lg-start">
        <div class="text-center p-3">
          Copyright © 2024 Dhanwis TechInfo Solutions All rights reserved.
          <a
            style={{ color: "rgb(207, 207, 207)" }}
            className="p-2  icon"
            href="https://www.facebook.com/dhanwisinfo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            style={{ color: "rgb(207, 207, 207)" }}
            className="p-2  icon"
            href="https://api.whatsapp.com/send?phone=8086487219"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a
            style={{ color: "rgb(207, 207, 207)" }}
            className="p-2  icon"
            href="https://in.linkedin.com/in/dhanwis-techinfo-solutions-9505622a7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            style={{ color: "rgb(207, 207, 207)" }}
            className="p-2  icon"
            href="https://www.instagram.com/dhanwistechinfosolutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
