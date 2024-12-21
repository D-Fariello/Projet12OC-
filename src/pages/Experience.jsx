import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import {
  FaUsers,
  FaChartLine,
  FaComments,
  FaUserGraduate,
} from "react-icons/fa";
import {
  FaHeadset,
  FaTruck,
  FaChartPie,
  FaTachometerAlt,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";

function Experience() {
  return (
    <section id="experience-page">
      <h1 className="experience-title">Experiences</h1>

      {/* Section 1 */}
      <section id="frontend-developer">
        <h2 className="experience-subtitle">Front-End Developer</h2>
        <p className="experience-paragraph">
          Implemented responsive and user-friendly web interfaces, ensuring
          cross-browser compatibility and seamless user experiences. Focused on
          website performance optimization and dynamic user interface
          integration during your course at OpenClassrooms.
        </p>
        <div className="experience-skills">Key Skills:</div>
        <div className="icon-skills">
          <FaHtml5 title="HTML" alt="HTML" />
          <FaCss3Alt title="CSS" />
          <FaJs title="JavaScript" />
          <FaReact title="React" />
          <MdPhoneIphone title="Responsive Design" />
          <SiRedux title="Redux" />
        </div>
      </section>

      {/* Section 2 */}
      <section id="product-support-lead">
        <h2 className="experience-subtitle">Global Product Support Lead</h2>
        <p className="experience-paragraph">
          <span>Description: </span> Led a high-performing team to streamline
          workflows, resolve customer issues, and optimize collaboration between
          product and support teams. Enhanced efficiency by instituting
          streamlined communication processes between the Product and Support
          Teams.
        </p>
        <div className="experience-skills">Key Skills:</div>
        <div className="icon-skills">
          <FaUsers title="Team Leadership" />
          <FaChartLine title="Process Improvement" />
          <FaComments title="Communication" />
          <FaUserGraduate title="Coaching" />
        </div>
      </section>

      {/* Section 3 */}
      <section id="market-manager">
        <h2 className="experience-subtitle">Italian Market Manager</h2>
        <p className="experience-paragraph">
          <span>Description: </span> Managed customer service, after-sales
          support, and marketplace performance for Italy and the UK, ensuring
          high customer satisfaction and effective logistics coordination.
          Successfully controlled revenue, expenses, and stock replenishment
          while improving marketplace performance.
        </p>
        <div className="experience-skills">Key Skills:</div>
        <div className="icon-skills">
          <FaHeadset title="Customer Service" />
          <FaTruck title="Logistics" />
          <FaChartPie title="Data Analysis" />
          <FaTachometerAlt title="Performance Management" />
        </div>
      </section>
    </section>
  );
}

export default Experience;
