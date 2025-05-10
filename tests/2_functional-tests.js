const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {
  // Test POST request to /api/translate with valid input
  test('Translation with text and locale fields: POST request to /api/translate', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'Mangoes are my favorite fruit.',
        locale: 'american-to-british'
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        assert.equal(res.body.text, 'Mangoes are my favorite fruit.');
        assert.include(res.body.translation, '<span class="highlight">favourite</span>');
        done();
      });
  });
  
  // Test POST request with invalid locale
  test('Translation with text and invalid locale field: POST request to /api/translate', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'Mangoes are my favorite fruit.',
        locale: 'invalid-locale'
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });
  
  // Test POST request with missing text field
  test('Translation with missing text field: POST request to /api/translate', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-british'
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });
  
  // Test POST request with missing locale field
  test('Translation with missing locale field: POST request to /api/translate', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'Mangoes are my favorite fruit.'
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });
  
  // Test POST request with empty text
  test('Translation with empty text: POST request to /api/translate', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: '',
        locale: 'american-to-british'
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, 'error');
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  });
  
  // Test POST request with text that needs no translation
  test('Translation with text that needs no translation: POST request to /api/translate', function(done) {
    chai.request(server)
      .post('/api/translate')
      .send({
        text: 'This text does not need translation.',
        locale: 'american-to-british'
      })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, 'text');
        assert.property(res.body, 'translation');
        assert.equal(res.body.text, 'This text does not need translation.');
        assert.equal(res.body.translation, 'Everything looks good to me!');
        done();
      });
  });
});