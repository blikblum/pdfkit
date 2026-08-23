import PDFDocument from './document';
import { registerStdFonts } from './font/standard_fonts';
import { registerFile } from '#fs';
import { fromBase64 } from './binary';
import { ICC_PROFILE_PATH } from './mixins/pdfa';
import iccProfileBase64 from './mixins/data/sRGB_IEC61966_2_1.icc';

registerFile(ICC_PROFILE_PATH, fromBase64(iccProfileBase64));

PDFDocument.registerFile = registerFile;

export { registerStdFonts, registerFile };
export default PDFDocument;
