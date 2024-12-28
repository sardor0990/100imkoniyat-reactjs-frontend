import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
const App: React.FC = () => {
  const defaultState = {
    center: [41.338663, 69.334790],
    zoom: 15,
  };

  return (
    <YMaps>
      <Map
        defaultState={defaultState}
        width="100%"
        height="100%"

        // onClick={(e) => console.log(e, "e")}
      >
        <Placemark geometry={[41.338663, 69.334790]} />
      </Map>
    </YMaps>
  );
};
export default App;
