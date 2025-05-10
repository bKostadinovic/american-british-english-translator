'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text, locale } = req.body;
      
      // Validate inputs
      if (text === undefined) {
        return res.json({ error: 'Required field(s) missing' });
      }
      
      if (text === '') {
        return res.json({ error: 'No text to translate' });
      }
      
      if (!locale) {
        return res.json({ error: 'Required field(s) missing' });
      }
      
      // Validate locale format
      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' });
      }
      
      // Perform translation
      const result = translator.translate(text, locale);
      
      // Return result or error
      if (result.error) {
        return res.json({ error: result.error });
      }
      
      return res.json(result);
    });
};