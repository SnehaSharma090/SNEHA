import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sneha Sharma </span>
            from <span className="purple"> Gwalior, India.</span>
            <br />
            I am currently learning Cloud and Data Science as a Student.
            <br />
            I am currently pursuing Btech-CSE from ITM Universe, Gwalior and will be completing
            2025.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(159 150 190)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SNEHA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
