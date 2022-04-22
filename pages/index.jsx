// import { useCallback, useEffect, useState } from 'react';
// import Button from '../components/Button';
// import ClickCount from '../components/ClickCount';
import GlobalHead from '/components/GlobalHead';

function Home() {
  return (
    <div className="home">
      <GlobalHead
        pageTitle="hi"
        description="yo"
      />

      <div className="nav">
        <nav className="nav-inner wrapper" role="navigation">
          <a className="nav-logo" href="">
            <img src="/logo-horizontal.png" srcSet="/logo-horizontal.png 1x, /logo-horizontal@2x.png 2x" alt="Mudavar, home" draggable="false" />
          </a>

          <ul className="nav-list">
            {/* <li className="nav-item">
              <a className="nav-link u-font-xs" href="">
                Asset viewer
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link u-font-xs" aria-current="page" href="">
                Tools
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="main" id="#main">
        <header className="hero" role="banner">
          <div className="hero-wrapper wrapper">
            <h1 className="hero-headline">Tools</h1>
          </div>
          <img className="hero-img" src="/hero/tools-hero.png" srcSet="/hero/tools-hero.png 1x, /hero/tools-hero@2x.png 2x" alt="" draggable="false" />
        </header>

        <div className="tools-wrapper wrapper">
          <section className="tools-section">
            <h2 className="tools-heading">Data science</h2>
            <ul className="tools-list">
              <li className="tools-item">
                <a className="tile darkglass" href="">
                  <div className="tile-icon"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><path fill="#707B89" d="M17,2.99961184 L15,5 L5,4.99961184 L5,17.9996118 L18,17.9996118 L18,8 L20,5.99961184 L20,18.1111111 C20,19.1543156 19.1543156,20 18.1111111,20 L4.88888889,20 C3.84568436,20 3,19.1543156 3,18.1111111 L3,4.88888889 C3,3.84568436 3.84568436,3 4.88888889,3 L17,2.99961184 Z M22,0 C22.4924494,0 22.9173526,0.389728312 22.9896941,0.884169186 L23,1 L22.9986383,6.74251028 C22.9807025,6.96824801 22.868143,7.18470927 22.7166201,7.33623215 C22.5398434,7.51300884 22.2923572,7.6190761 22.009514,7.61907521 C21.50065,7.60266056 21.0663708,7.23566825 21.0069272,6.73040568 L21,6.61144876 L21,3.44714556 L12.4458952,12.0208153 C12.0569865,12.409724 11.4205905,12.4097242 11.0316816,12.0208153 C10.6726887,11.6618224 10.6450741,11.0919531 10.9488372,10.7005179 L11.0316816,10.6066018 L19.5699967,2 L16.4056935,2 C15.8400082,2 15.3980665,1.57331241 15.3980661,1.00762734 C15.3980663,0.479653782 15.7830467,0.0594754938 16.2943006,0.00579827126 L16.4056935,0 L22,0 Z"/></svg></div>
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
                  <div className="tile-icon"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><path fill="#707B89" d="M17,2.99961184 L15,5 L5,4.99961184 L5,17.9996118 L18,17.9996118 L18,8 L20,5.99961184 L20,18.1111111 C20,19.1543156 19.1543156,20 18.1111111,20 L4.88888889,20 C3.84568436,20 3,19.1543156 3,18.1111111 L3,4.88888889 C3,3.84568436 3.84568436,3 4.88888889,3 L17,2.99961184 Z M22,0 C22.4924494,0 22.9173526,0.389728312 22.9896941,0.884169186 L23,1 L22.9986383,6.74251028 C22.9807025,6.96824801 22.868143,7.18470927 22.7166201,7.33623215 C22.5398434,7.51300884 22.2923572,7.6190761 22.009514,7.61907521 C21.50065,7.60266056 21.0663708,7.23566825 21.0069272,6.73040568 L21,6.61144876 L21,3.44714556 L12.4458952,12.0208153 C12.0569865,12.409724 11.4205905,12.4097242 11.0316816,12.0208153 C10.6726887,11.6618224 10.6450741,11.0919531 10.9488372,10.7005179 L11.0316816,10.6066018 L19.5699967,2 L16.4056935,2 C15.8400082,2 15.3980665,1.57331241 15.3980661,1.00762734 C15.3980663,0.479653782 15.7830467,0.0594754938 16.2943006,0.00579827126 L16.4056935,0 L22,0 Z"/></svg></div>
                  <div className="tile-inner">
                    <img className="tile-img" src="/icons/tools/business-intelligence-icon.png" srcSet="/icons/tools/business-intelligence-icon.svg" alt="" draggable="false" />
                    <span className="tile-title">Business intelligence view</span>
                  </div>
                </a>
              </li>

              <li className="tools-item">
                <a className="tile darkglass" href="">
                  <div className="tile-icon"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><path fill="#707B89" d="M17,2.99961184 L15,5 L5,4.99961184 L5,17.9996118 L18,17.9996118 L18,8 L20,5.99961184 L20,18.1111111 C20,19.1543156 19.1543156,20 18.1111111,20 L4.88888889,20 C3.84568436,20 3,19.1543156 3,18.1111111 L3,4.88888889 C3,3.84568436 3.84568436,3 4.88888889,3 L17,2.99961184 Z M22,0 C22.4924494,0 22.9173526,0.389728312 22.9896941,0.884169186 L23,1 L22.9986383,6.74251028 C22.9807025,6.96824801 22.868143,7.18470927 22.7166201,7.33623215 C22.5398434,7.51300884 22.2923572,7.6190761 22.009514,7.61907521 C21.50065,7.60266056 21.0663708,7.23566825 21.0069272,6.73040568 L21,6.61144876 L21,3.44714556 L12.4458952,12.0208153 C12.0569865,12.409724 11.4205905,12.4097242 11.0316816,12.0208153 C10.6726887,11.6618224 10.6450741,11.0919531 10.9488372,10.7005179 L11.0316816,10.6066018 L19.5699967,2 L16.4056935,2 C15.8400082,2 15.3980665,1.57331241 15.3980661,1.00762734 C15.3980663,0.479653782 15.7830467,0.0594754938 16.2943006,0.00579827126 L16.4056935,0 L22,0 Z"/></svg></div>
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
                  <div className="tile-icon"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><path fill="#707B89" d="M17,2.99961184 L15,5 L5,4.99961184 L5,17.9996118 L18,17.9996118 L18,8 L20,5.99961184 L20,18.1111111 C20,19.1543156 19.1543156,20 18.1111111,20 L4.88888889,20 C3.84568436,20 3,19.1543156 3,18.1111111 L3,4.88888889 C3,3.84568436 3.84568436,3 4.88888889,3 L17,2.99961184 Z M22,0 C22.4924494,0 22.9173526,0.389728312 22.9896941,0.884169186 L23,1 L22.9986383,6.74251028 C22.9807025,6.96824801 22.868143,7.18470927 22.7166201,7.33623215 C22.5398434,7.51300884 22.2923572,7.6190761 22.009514,7.61907521 C21.50065,7.60266056 21.0663708,7.23566825 21.0069272,6.73040568 L21,6.61144876 L21,3.44714556 L12.4458952,12.0208153 C12.0569865,12.409724 11.4205905,12.4097242 11.0316816,12.0208153 C10.6726887,11.6618224 10.6450741,11.0919531 10.9488372,10.7005179 L11.0316816,10.6066018 L19.5699967,2 L16.4056935,2 C15.8400082,2 15.3980665,1.57331241 15.3980661,1.00762734 C15.3980663,0.479653782 15.7830467,0.0594754938 16.2943006,0.00579827126 L16.4056935,0 L22,0 Z"/></svg></div>
                  <div className="tile-inner">
                    <img className="tile-img" src="/icons/tools/data-viewer-icon.png" srcSet="/icons/tools/data-viewer-icon.svg" alt="" draggable="false" />
                    <span className="tile-title">Data viewer</span>
                  </div>
                </a>
              </li>

              <li className="tools-item">
                <a className="tile darkglass" href="">
                  <div className="tile-icon"><svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><path fill="#707B89" d="M17,2.99961184 L15,5 L5,4.99961184 L5,17.9996118 L18,17.9996118 L18,8 L20,5.99961184 L20,18.1111111 C20,19.1543156 19.1543156,20 18.1111111,20 L4.88888889,20 C3.84568436,20 3,19.1543156 3,18.1111111 L3,4.88888889 C3,3.84568436 3.84568436,3 4.88888889,3 L17,2.99961184 Z M22,0 C22.4924494,0 22.9173526,0.389728312 22.9896941,0.884169186 L23,1 L22.9986383,6.74251028 C22.9807025,6.96824801 22.868143,7.18470927 22.7166201,7.33623215 C22.5398434,7.51300884 22.2923572,7.6190761 22.009514,7.61907521 C21.50065,7.60266056 21.0663708,7.23566825 21.0069272,6.73040568 L21,6.61144876 L21,3.44714556 L12.4458952,12.0208153 C12.0569865,12.409724 11.4205905,12.4097242 11.0316816,12.0208153 C10.6726887,11.6618224 10.6450741,11.0919531 10.9488372,10.7005179 L11.0316816,10.6066018 L19.5699967,2 L16.4056935,2 C15.8400082,2 15.3980665,1.57331241 15.3980661,1.00762734 C15.3980663,0.479653782 15.7830467,0.0594754938 16.2943006,0.00579827126 L16.4056935,0 L22,0 Z"/></svg></div>
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
