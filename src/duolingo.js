import { characters } from './characters.js';
export class Duolingo{
   static isLearningChinese(){
    if(location.pathname.indexOf("zs/") == -1){
      return false;
    }
    return true;
  }
  static insertCharacter(maoCharacacter, realCharacter){

    if(maoCharacacter==realCharacter){
      return;
    }
    if(maoCharacacter==undefined || maoCharacacter =="undefined"){
      return;
    }

    const element = Sizzle(`:contains(${maoCharacacter})`).slice(-1)[0];

    if(element){
      element.innerHTML = element.innerHTML.replace(maoCharacacter,realCharacter)
    }
  }

  static checkForChineseCharactersOnLoad(){
    if(Duolingo.isLearningChinese() == false){
      return;
    }
    characters.forEach((x, y) =>{
      let [simplified, traditional] = x.split('|');
      setTimeout(function(){
          Duolingo.insertCharacter(simplified,traditional);
      },1);
    });

    /*const localStorageKeysLength = Object.keys(localStorage).length;
    const localStorageKeys = Object.keys(localStorage);
    for(let index=0; index < localStorageKeysLength; index++){
      const character = (localStorageKeys[index]);

      if( character > "\u3400" && character < "\u9FBF"){
          setTimeout(function(){
            Duolingo.insertCharacter(character, localStorage[character]);
          },1)
      }
    }*/

    console.log('initial load');
  }
}
