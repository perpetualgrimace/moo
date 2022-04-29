import DefaultLayout from '/components/DefaultLayout';
import Tile from '/components/Tile';

export default function Assets() {
  return (
    <DefaultLayout
      title="Asset viewer"
      slug="assets"
    >
      <Tile href="assets/servers">
        <h2>Servers</h2>
        <ul className="assets-tile">
          <li className="u-font-md"><strong>3</strong> local servers</li>
          <li className="u-font-md u-mb-sm"><strong>1</strong> remote server</li>
          <br />
          <li><strong>3</strong> servers fully operational</li>
          <li><strong>1</strong> warning</li>
          <li><strong>1</strong> critical error</li>
        </ul>
      </Tile>

      <Tile href="assets/data">
        <h2>Data</h2>
        <ul className="assets-tile">
          <li className="u-font-md"><strong>23.8K</strong> files</li>
          <li className="u-font-md"><strong>291</strong> tables</li>
          <li className="u-font-md u-mb-sm"><strong>39</strong> data marts</li>
          <br />
          <li><strong>19</strong> sources</li>
          <li><strong>3.9/5</strong> average data mart quality</li>
        </ul>
      </Tile>

      <Tile href="assets/engines">
        <h2>Engines</h2>
        <ul className="assets-tile">
          <li className="u-font-md"><strong>11</strong> engines</li>
          <li className="u-font-md"><strong>62%</strong> average predictiveness</li>
        </ul>
      </Tile>

      <Tile href="assets/projects">
        <h2>Projects</h2>
        <ul className="assets-tile">
          <li className="u-font-md"><strong>13</strong> completed projects</li>
          <li className="u-font-md u-mb-sm"><strong>39</strong> incomplete projects</li>
          <br />
          <li><strong>213</strong> active tasks</li>
          <li><strong>9</strong> warnings</li>
        </ul>
      </Tile>
    </DefaultLayout>
  )
}