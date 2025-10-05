const OpenSeadragon = require("openseadragon");
const EXIF = require("exif-js");

let xDimesion;
let yDimesion;

const img = "https://esawebb.org/media/archives/images/original/potm2507a.tif";
// PixelXDimension PixelYDimension
EXIF.getData(img, () => {
  xDimesion = EXIF.getTag(this, "PixelXDimension");
  yDimesion = EXIF.getTag(this, "PixelYDimension");
});

var viewer = OpenSeadragon({
  id: "openseadragon1",
  prefixUrl: "/openseadragon/images/",
  tileSources: [
    {
      //required
      type: "zoomifytileservice",
      width: xDimesion,
      height: yDimesion,
      tilesUrl: "/test/data/zoomify/",
      //optional
      tileSize: 256,
      fileFormat: "jpg",
    },
  ],
});
