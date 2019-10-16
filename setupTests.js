//import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  cleanup,
  fireEvent,
  waitForElements,
  prettyDOM
} from "@testing-library/react";
//import "@testing-library/cleanup-after-each";
import { JSDOM } from "jsdom";
import sinon from "sinon";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

const dom = new JSDOM();

global.render = render;
global.React = React;
global.ReactDOM = ReactDOM;
global.cleanup = cleanup;
global.fireEvent = fireEvent;
global.waitForElements = waitForElements;
global.prettyDOM = prettyDOM;
global.AmCharts = {
  makeChart: () => {}
};
global.document = dom.window.document;
global.window = dom.window;
global.sinon = sinon;
