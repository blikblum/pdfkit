import PDFDocument from './document';
import { registerStdFonts } from './font/standard_fonts';
import { registerFile } from '#fs';

PDFDocument.registerFile = registerFile;

export { registerStdFonts, registerFile };
export default PDFDocument;
