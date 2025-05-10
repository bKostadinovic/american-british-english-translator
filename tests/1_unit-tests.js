const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  // American to British tests
  test('Translate "Mangoes are my favorite fruit." to British English', function() {
    const text = 'Mangoes are my favorite fruit.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">favourite</span>');
  });
  
  test('Translate "I ate yogurt for breakfast." to British English', function() {
    const text = 'I ate yogurt for breakfast.';
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">yoghurt</span>');
  });
  
  test('Translate "We had a party at my friend\'s condo." to British English', function() {
    const text = "We had a party at my friend's condo.";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">flat</span>');
  });
  
  test('Translate "Can you toss this in the trashcan for me?" to British English', function() {
    const text = "Can you toss this in the trashcan for me?";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">bin</span>');
  });
  
  test('Translate "The parking lot was full." to British English', function() {
    const text = "The parking lot was full.";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">car park</span>');
  });
  
  test('Translate "Like a high tech Rube Goldberg machine." to British English', function() {
    const text = "Like a high tech Rube Goldberg machine.";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">Heath Robinson device</span>');
  });
  
  test('Translate "To play hooky means to skip class or work." to British English', function() {
    const text = "To play hooky means to skip class or work.";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">bunk off</span>');
  });
  
  test('Translate "No Mr. Bond, I expect you to die." to British English', function() {
    const text = "No Mr. Bond, I expect you to die.";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">Mr</span>');
  });
  
  test('Translate "Dr. Grosh will see you now." to British English', function() {
    const text = "Dr. Grosh will see you now.";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">Dr</span>');
  });
  
  test('Translate "Lunch is at 12:15 today." to British English', function() {
    const text = "Lunch is at 12:15 today.";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">12.15</span>');
  });
  
  // British to American tests
  test('Translate "We watched the footie match for a while." to American English', function() {
    const text = "We watched the footie match for a while.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">soccer</span>');
  });
  
  test('Translate "Paracetamol takes up to an hour to work." to American English', function() {
    const text = "Paracetamol takes up to an hour to work.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">Tylenol</span>');
  });
  
  test('Translate "First, caramelise the onions." to American English', function() {
    const text = "First, caramelise the onions.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">caramelize</span>');
  });
  
  test('Translate "I spent the bank holiday at the funfair." to American English', function() {
    const text = "I spent the bank holiday at the funfair.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">public holiday</span>');
    assert.include(result.translation, '<span class="highlight">carnival</span>');
  });
  
  test('Translate "I had a bicky then went to the chippy." to American English', function() {
    const text = "I had a bicky then went to the chippy.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">cookie</span>');
    assert.include(result.translation, '<span class="highlight">fish-and-chip shop</span>');
  });
  
  test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', function() {
    const text = "I've just got bits and bobs in my bum bag.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">odds and ends</span>');
    assert.include(result.translation, '<span class="highlight">fanny pack</span>');
  });
  
  test('Translate "The car boot sale at Boxted Airfield was called off." to American English', function() {
    const text = "The car boot sale at Boxted Airfield was called off.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">swap meet</span>');
  });
  
  test('Translate "Have you met Mrs Kalyani?" to American English', function() {
    const text = "Have you met Mrs Kalyani?";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">Mrs.</span>');
  });
  
  test('Translate "Prof Joyner of King\'s College, London." to American English', function() {
    const text = "Prof Joyner of King's College, London.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">Prof.</span>');
  });
  
  test('Translate "Tea time is usually around 4 or 4.30." to American English', function() {
    const text = "Tea time is usually around 4 or 4.30.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.include(result.translation, '<span class="highlight">4:30</span>');
  });
  
  // Highlight tests
  test('Highlight translation in "Mangoes are my favorite fruit."', function() {
    const text = "Mangoes are my favorite fruit.";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.match(result.translation, /<span class="highlight">favourite<\/span>/);
  });
  
  test('Highlight translation in "I ate yogurt for breakfast."', function() {
    const text = "I ate yogurt for breakfast.";
    const locale = 'american-to-british';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.match(result.translation, /<span class="highlight">yoghurt<\/span>/);
  });
  
  test('Highlight translation in "We watched the footie match for a while."', function() {
    const text = "We watched the footie match for a while.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.match(result.translation, /<span class="highlight">soccer<\/span>/);
  });
  
  test('Highlight translation in "Paracetamol takes up to an hour to work."', function() {
    const text = "Paracetamol takes up to an hour to work.";
    const locale = 'british-to-american';
    const result = translator.translate(text, locale);
    
    assert.isObject(result);
    assert.property(result, 'text');
    assert.property(result, 'translation');
    assert.match(result.translation, /<span class="highlight">Tylenol<\/span>/);
  });
});