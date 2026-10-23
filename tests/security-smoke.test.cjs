'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

for (const folder of ['', 'OLD/']) {
  const read = p => fs.readFileSync(path.join(root, folder, p), 'utf8');
  test(`${folder || 'primary/'} keeps the patched browser dependencies and navigation`, () => {
    const html = read('index.html');
    assert.match(html, /vendor\/jquery\/jquery\.min\.js/);
    assert.match(html, /vendor\/bootstrap\/js\/bootstrap\.min\.js/);
    assert.match(read('vendor/jquery/jquery.min.js'), /jQuery v3\.7\.1/);
    assert.match(read('vendor/bootstrap/js/bootstrap.js'), /Bootstrap v3\.4\.1/);
    assert.doesNotMatch(html, /magnific-popup/i);
    assert.doesNotMatch(read('js/creative.js'), /magnificPopup/);
    assert.doesNotMatch(html, /cdnjs\.cloudflare\.com\/ajax\/libs\/jquery-easing/);
    assert.match(read('js/creative.js'), /shown\.bs\.collapse/);
    assert.match(read('js/creative.min.js'), /shown\.bs\.collapse/);
    assert.match(html, /href="#about"/);
    assert.match(html, /href="#contact"/);
  });
}

test('bundled font previews do not load an obsolete mixed-content jQuery build', () => {
  for (const name of ['domus-bold-demo.html', 'lato_300-demo.html']) {
    const markup = fs.readFileSync(path.join(root, 'fonts', name), 'utf8');
    assert.match(markup, /\.\.\/vendor\/jquery\/jquery\.min\.js/);
    assert.doesNotMatch(markup, /http:\/\/ajax\.googleapis\.com/);
  }
});
