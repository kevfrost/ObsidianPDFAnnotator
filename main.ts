import { Plugin } from "obsidian";

export default class PDFAnnotator extends Plugin {
  async onload() {
    console.log('loading PDF Annotator plugin')
  }
  async onunload() {
    console.log('unloading PDF Annotator plugin')
  }
}