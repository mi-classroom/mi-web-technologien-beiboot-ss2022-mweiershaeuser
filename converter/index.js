import { readFileSync } from "fs";
import "dotenv/config";
import axios from "axios";

const artworks = JSON.parse(
  readFileSync("cda-paintings-2022-04-22.de.json", "utf-8")
);

const masterpieces = [];

artworks.items.forEach((artwork) => {
  if (artwork.isBestOf) {
    let medium = artwork.medium
      .split("\\")[0]
      .split("\\n")[0]
      .split("(")[0]
      .split("[")[0];

    let masterpiece = {
      title: artwork.metadata.title,
      date: artwork.metadata.date,
      category: medium,
      owner: artwork.repository,
      preview: artwork.images.overall.images[0].sizes.medium.src,
    };
    masterpieces.push(masterpiece);
  }
});

masterpieces.forEach((masterpiece) => {
  axios.post(
    `${process.env.BASE_URL}/api/artworks`,
    { data: masterpiece },
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );
});
