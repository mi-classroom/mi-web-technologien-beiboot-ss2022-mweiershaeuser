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

    let height = extractHeightFromSizeString(
      artwork.metadata.additionalInfos[1]
    );
    let width =
      height *
      (artwork.images.overall.infos.maxDimensions.width /
        artwork.images.overall.infos.maxDimensions.height);

    let masterpiece = {
      title: artwork.metadata.title,
      date: convertDateStringToDateNumber(artwork.metadata.date),
      category: medium,
      owner: artwork.repository,
      preview: artwork.images.overall.images[0].sizes.medium.src,
      sortingId: artwork.sortingNumber,
      width,
      height,
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

/* Utilities */

function convertDateStringToDateNumber(dateString) {
  let dateStringArray = dateString.split(" ");

  if (dateStringArray[0] === "um" || dateStringArray[0] === "nach") {
    return parseInt(dateStringArray[1], 10);
  } else {
    return parseInt(dateStringArray[0], 10);
  }
}

function extractHeightFromSizeString(sizeString) {
  let removedExtraInfoAtTheEndOfTheString = sizeString.split("\n")[0];

  let removedLabelForSize;
  if (
    removedExtraInfoAtTheEndOfTheString.includes("Ma\u00dfe Bildtr\u00e4ger: ")
  ) {
    removedLabelForSize = removedExtraInfoAtTheEndOfTheString.split(
      "Ma\u00dfe Bildtr\u00e4ger: "
    )[1];
  } else if (
    removedExtraInfoAtTheEndOfTheString.includes(
      "Ma\u00dfe der bemalten Fl\u00e4che: "
    )
  ) {
    removedLabelForSize = removedExtraInfoAtTheEndOfTheString.split(
      "Ma\u00dfe der bemalten Fl\u00e4che: "
    )[1];
  } else if (
    removedExtraInfoAtTheEndOfTheString.includes("Ma\u00dfe mit Rahmen: ")
  ) {
    removedLabelForSize = removedExtraInfoAtTheEndOfTheString.split(
      "Ma\u00dfe mit Rahmen: "
    )[1];
  } else {
    removedLabelForSize = removedExtraInfoAtTheEndOfTheString.split(
      "Ma\u00dfe Bildfl\u00e4che: "
    )[1];
  }

  let removedRestOfSizeInfo = removedLabelForSize.split(" ")[0].split("-")[0];

  return parseFloat(removedRestOfSizeInfo.replace(",", "."), 10);
}
