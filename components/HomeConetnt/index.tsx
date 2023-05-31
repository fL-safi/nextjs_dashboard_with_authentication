import React from "react";
import { Container } from "./HomeElements";
import { KPIMAGE } from "./HomeElements";
import kpi1 from "../../public/assets/images/kpi1.jpg";
import kpi2 from "../../public/assets/images/kpi2.jpg";
import kpi3 from "../../public/assets/images/kpi3.png";
import kpi4 from "../../public/assets/images/kpi4.png";

type Props = {};

const HomeContent = (props: Props) => {
  return (
    <div className="dashboard-home-page">
      <div className="">
        <div className="dashboard-home-short-info">
          <div className="kpi-card-container">
            <div className="kpi-card">
              <div className="kpi-card-text">
                <div>
                  <span>Total Stock</span>
                </div>
                <div>
                  <span>$53,000</span>
                </div>
              </div>
              <div className="kpi-image">
                <KPIMAGE src={kpi1} alt="kpi1" />
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-card-text">
                <div>
                  <span>Total brands</span>
                </div>
                <div>
                  <span>53</span>
                </div>
              </div>
              <div className="kpi-image">
                <KPIMAGE src={kpi2} alt="kpi2" />
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-card-text">
                <div>
                  <span>Total Categories</span>
                </div>
                <div>
                  <span>17</span>
                </div>
              </div>
              <div className="kpi-image">
                <KPIMAGE src={kpi3} alt="kpi3" />
              </div>
            </div>
            <div className="kpi-card">
              <div className="kpi-card-text">
                <div>
                  <span>Available products</span>
                </div>
                <div>
                  <span>64</span>
                </div>
              </div>
              <div className="kpi-image">
                <KPIMAGE src={kpi4} alt="kpi4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
