import { Cache } from './cache.js'
import { mutationObserver } from './mutationObserver.js';
import { characters } from './characters.js';
import { Duolingo } from './duolingo.js';


Cache.updateLocalStorage();
Duolingo.checkForChineseCharactersOnLoad();

mutationObserver.observe(document, {
  childList: true,
  subtree: true,
  characterData: true
});
