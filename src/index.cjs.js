import MainLib from './lib/main';

import {
  convertNeSwToNwSe,
  convertNwSeToNeSw,
  fitBounds,
  meters2ScreenPixels,
  tile2LatLng,
  latLng2Tile,
  getTilesIds,
} from './lib';

Object.assign(MainLib, {
  convertNeSwToNwSe,
  convertNwSeToNeSw,
  fitBounds,
  meters2ScreenPixels,
  tile2LatLng,
  latLng2Tile,
  getTilesIds,
});

export default MainLib;
