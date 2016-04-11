import test from 'ava';
import fn from '../';
import languages from './_languages.js';

test('expect a string', t => {
	t.throws(() => {
		fn([]);
	}, 'words-only expected a string');
});

test('removes non-word characters', t => {
	t.is(fn('unicorns! & sooooo Many rainbows!!! I was like ___WHoa!!!???'), 'unicorns sooooo Many rainbows I was like WHoa');
	t.is(fn('Ja, bitte/Nein, danke.'), 'Ja bitte Nein danke');
	t.is(fn('Können Sie mir behilflich sein?'), 'Können Sie mir behilflich sein');
	t.is(fn('Ich weiß nicht.'), 'Ich weiß nicht');
});

test('keeps languages in tact', t => {
	t.plan(Object.keys(languages).length);

	Object.keys(languages).forEach(phrase => {
		t.is(fn(phrase), phrase);
	});
});
