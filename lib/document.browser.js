import PDFDocument from './document';
import LineWrapper from './line_wrapper';
import { registerStdFonts } from './font/standard_fonts';
import { registerFile } from '#fs';
import { fromBase64 } from './binary';
import { ICC_PROFILE_PATH } from './mixins/pdfa';
import iccProfileBase64 from './mixins/data/sRGB_IEC61966_2_1.icc';

registerFile(ICC_PROFILE_PATH, fromBase64(iccProfileBase64));

export { PDFDocument, LineWrapper, registerStdFonts, registerFile };
export default PDFDocument;
