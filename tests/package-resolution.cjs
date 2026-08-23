const assert = require('node:assert/strict');

const PDFDocument = require('pdfkit');

assert.equal(typeof PDFDocument, 'function');
assert.equal(PDFDocument.name, 'PDFDocument');
assert.equal(typeof PDFDocument.registerFile, 'function');

(async () => {
  const browserModule = await import('pdfkit');

  assert.equal(typeof browserModule.default, 'function');
  assert.equal(typeof browserModule.registerFile, 'function');
  assert.equal(browserModule.default.registerFile, browserModule.registerFile);
})();
