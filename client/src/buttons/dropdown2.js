import {Routes, Route, useNavigate} from 'react-router-dom';
import CountryMap from '../maps/CountryMap';
import WorldMap from '../maps/WorldMap';

export default function DropDown2() {
  const navigate = useNavigate();

  const navigateToCountryMap = () => {
    // 👇️ navigate to /contacts
    navigate('/country-map');
  };

  const navigateToWorldMap = () => {
    // 👇️ navigate to /
    navigate('/world-map');
  };

  return (
    <div>
      <div>
        <button onClick={navigateToCountryMap}>CountryMap</button>
        <hr />
        <button onClick={navigateToWorldMap}>WorldMap</button>

        <Routes>
          <Route path="/country-map" element={<CountryMap />} />
          <Route path="/world-map" element={<WorldMap />} />
        </Routes>
      </div>
    </div>
  );
}

