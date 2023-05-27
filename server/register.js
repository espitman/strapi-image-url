"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "image",
    plugin: "image-url",
    type: "string",
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });
};
