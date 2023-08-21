import React from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaRocket } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <section className="py-[100px]">
      <div className="container mx-auto">

    <div className="flex justify-center gap-[40px] items-center">
    <div className="w-[25%]">
    <div className="plan-card">
        <h2>
        Book Cover<span>This package includes</span>
        </h2>
        <div className="etiquet-price">
          <p>165.99</p>
          <div></div>
        </div>
        <div className="benefits-list">
          <ul>
            <li>
              <AiOutlineCheckCircle/>
              <span>First Draft within 7 days</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>3 times revision</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>Royalty free image</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>High-resolution</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>Source File</span>
            </li>
          </ul>
        </div>
        <div className="button-get-plan">
          <a href="#">
            <FaRocket/>
            <span>START PROJECT</span>
          </a>
        </div>
      </div>
    </div>

    <div className="w-[25%]">
    <div className="plan-card">
        <h2>
        Book Interior Formatting<span>This package includes</span>
        </h2>
        <div className="etiquet-price">
          <p>175.99</p>
          <div></div>
        </div>
        <div className="benefits-list">
          <ul>
            <li>
              <AiOutlineCheckCircle/>
              <span>Formatting & Typesetting</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>Custom page design</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>First Draft within 7 days</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>Page design elements</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>3 round of revisions</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>Print-ready file</span>
            </li>
          </ul>
        </div>
        <div className="button-get-plan">
          <a href="#">
            <FaRocket/>
            <span>START PROJECT</span>
          </a>
        </div>
      </div>
    </div>

    <div className="w-[25%]">
    <div className="plan-card">
        <h2>
        eBook<span>This package includes</span>
        </h2>
        <div className="etiquet-price">
          <p>145.99</p>
          <div></div>
        </div>
        <div className="benefits-list">
          <ul>
            <li>
              <AiOutlineCheckCircle/>
              <span>Text only</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>Active table of contents</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>Embedded fonts</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>3 round of revisions</span>
            </li>
            <li>
            <AiOutlineCheckCircle/>
              <span>Final ePub files</span>
            </li>
          </ul>
        </div>
        <div className="button-get-plan">
          <a href="#">
            <FaRocket/>
            <span>START PROJECT</span>
          </a>
        </div>
      </div>
    </div>

    </div>


      
    </div>
    </section>
  );
};

export default PricingSection;





