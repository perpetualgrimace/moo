// import { useCallback, useEffect, useState } from 'react';
// import Button from '../components/Button';
// import ClickCount from '../components/ClickCount';
import GlobalHead from '/components/GlobalHead';
import GlobalNav from '/components/GlobalNav';
import GlobalHero from '/components/GlobalHero';

import OutboundIcon from '../components/icons/OutboundIcon';

function Home() {
  const title="Toolkit";

  return (
    <div className="home">
      <GlobalHead
        pageTitle={title}
        description="Data science toolkit"
      />

      <GlobalNav />

      <main className="main" id="#main">
        <GlobalHero
          pageTitle={title}
          imgSlug="tools"
        />

        <div className="tools-wrapper wrapper">
          <section className="tools-section">
            <h2 className="tools-heading">Data science</h2>
            <ul className="tools-list">
              <li className="tools-item">
                <a className="tile darkglass" href="">
                  <div className="tile-icon">
                    <OutboundIcon />
                  </div>
                  <div className="tile-inner">
                    <img className="tile-img" src="/icons/tools/jupyterhub-logo.png" srcSet="/icons/tools/jupyterhub-logo.svg" alt="Jupyter Hub" draggable="false" />
                  </div>
                </a>
              </li>
            </ul>
          </section>

          <section className="tools-section">
            <h2 className="tools-heading">Data analysis</h2>
            <ul className="tools-list">
              <li className="tools-item">
                <a className="tile darkglass" href="">
                  <div className="tile-icon">
                    <OutboundIcon />
                  </div>
                  <div className="tile-inner">
                    <img className="tile-img" src="/icons/tools/business-intelligence-icon.png" srcSet="/icons/tools/business-intelligence-icon.svg" alt="" draggable="false" />
                    <span className="tile-title">Business intelligence view</span>
                  </div>
                </a>
              </li>

              <li className="tools-item">
                <a className="tile darkglass" href="">
                  <div className="tile-icon">
                    <OutboundIcon />
                  </div>
                  <div className="tile-inner">
                    <img className="tile-img" src="/icons/tools/graph-view-icon.png" srcSet="/icons/tools/graph-view-icon.svg" alt="" draggable="false" />
                    <span className="tile-title">Graph view</span>
                  </div>
                </a>
              </li>
            </ul>
          </section>

          <section className="tools-section">
            <h2 className="tools-heading">Browse & manage <span className="u-visually-hidden">data</span></h2>
            <ul className="tools-list">
              <li className="tools-item">
                <a className="tile darkglass" href="">
                  <div className="tile-icon">
                    <OutboundIcon />
                  </div>
                  <div className="tile-inner">
                    <img className="tile-img" src="/icons/tools/data-viewer-icon.png" srcSet="/icons/tools/data-viewer-icon.svg" alt="" draggable="false" />
                    <span className="tile-title">Data viewer</span>
                  </div>
                </a>
              </li>

              <li className="tools-item">
                <a className="tile darkglass" href="">
                  <div className="tile-icon">
                    <OutboundIcon />
                  </div>
                  <div className="tile-inner">
                    <img className="tile-img" src="/icons/tools/prediction-engines-icon.png" srcSet="/icons/tools/prediction-engines-icon.svg" alt="" draggable="false" />
                    <span className="tile-title">Engines</span>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <div className="bg">
        <img className="bg-img" src="/bg.jpg" srcSet="/bg.jpg 1x, /bg@2x.jpg 2x" alt="" draggable="false" />
      </div>
      
    </div>
  )
}

export default Home;
