let WRAPPER = document.createElement('div');
WRAPPER.classList.add('wrapper');

let properties = {
    value: null,
    caps: false,
    shift: true,
    lang: 0, //0 - eng, 1 - rus
}
window.name = window.name === '' ? 0 : window.name;
// console.log(window.name)
properties.caps = false;
zeros();

// if (window.name == false){
//     window.name = 0;
// }
// console.log(window.name)
// window.name = properties.lang === null ? window.name : properties.lang;
// properties.lang = properties.lang === null ? window.name : properties.lang;

const TEXTAREA = document.createElement('textarea');
TEXTAREA.classList.add('text-area');
TEXTAREA.rows = '5';
TEXTAREA.cols = '50';

// console.log(TEXTAREA.value)
// let text = TEXTAREA.value;

document.body.append(TEXTAREA);

// for (let i = 0; i<5; i++){
//     let rowOfKeys = document.createElement('div');
//     rowOfKeys.classList.add('row');
//     rowOfKeys.id = i;
//     WRAPPER.append(rowOfKeys);
// }
const KEYBOARD = document.createElement('div');
KEYBOARD.classList.add('keyboard')
WRAPPER.append(KEYBOARD);
document.body.append(WRAPPER);
let cursorPosition;
const TEXT = document.createElement('p')
TEXT.innerHTML = 'OS: Windows <br> Click Ctrl+Alt to change language'
document.body.append(TEXT);
// let keys = [
// 'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
// 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
// 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
// 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 
// 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight',  'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }
function zeros(){
    let letter = document.querySelectorAll('.letter');
    for (let i of letter){
        let value = i.innerHTML;
        i.innerHTML = value.toLowerCase();
}
}
function caps(){
    let letter = document.querySelectorAll('.letter');
    for (let i of letter){
        let value = i.innerHTML;
        i.innerHTML = '';
        if (properties.caps === true){
            i.innerHTML = value.toUpperCase();
        } else {
            i.innerHTML = value.toLowerCase();
        }
    }
}
let shiftKeys = {
    '1':['!','!'],
    '2':['@','"'],
    '3':['#','№'],
    '4':['$',';'],
    '5':['%','%'],
    '6':['^',':'],
    '7':['&','?'],
    '8':['*','*'],
    '9':['(','('],
    '0':[')',')'],
    '-':['_','_'],
    '=':['+','+'],
    '[':['{','Х'],
    ']':['}','Ъ'],
    ';':[':','Ж'],
    "'":['"','Э'],
    ',':['<','Б'],
    '.':['>','Ю'],
    '/':['?',','],
    '`':['~','Ё']
};
function shift(){
    let letter = document.querySelectorAll('.letter');
    for (let i of letter){
        let value = i.innerHTML;
        i.innerHTML = '';
        if (properties.shift === true && properties.caps === false){
            i.innerHTML = value.toUpperCase();
        } else if(properties.shift === true && properties.caps === true){
            i.innerHTML = value.toLowerCase();
        } else if(properties.shift === false && properties.caps === true){
            i.innerHTML = value.toUpperCase();
        } else {
            i.innerHTML = value.toLowerCase();
        }
    }
    for (let char in shiftKeys){
        let elem = document.getElementsByClassName(char);
        // console.log(elem)
        // console.log(properties.caps);
        for(let curr of elem){
            // console.log(curr.classList[1]);
            // let currValue = curr.innerHTML;
            if (properties.shift === true ){
                
                curr.innerHTML = shiftKeys[char][properties.lang];
                // console.log(elemValue);
            } else {
                curr.innerHTML = curr.classList[1];
            }
        }
    }
}

let keys = {

    Backquote: ["`", "ё"],
    Digit1: "1",
    Digit2: "2",
    Digit3: "3",
    Digit4: "4",
    Digit5: "5",
    Digit6: "6",
    Digit7: "7",
    Digit8: "8",
    Digit9: "9",
    Digit0: "0",
    Minus: ["-","-"],
    Equal: ["=", "="],
    Backspace: "Backspace",
    
    Tab: "Tab",
    KeyQ: ["q", "й"],
    KeyW: ["w", "ц"],
    KeyE: ["e", "у"],
    KeyR: ["r", "к"],
    KeyT: ["t", "е"],
    KeyY: ["y", "н"],
    KeyU: ["u", "г"],
    KeyI: ["i", "ш"],
    KeyO: ["o", "щ"],
    KeyP: ["p", "з"],
    BracketLeft: ["[", "х"],
    BracketRight: ["]","ъ"],
    Delete: "Delete",
    
    CapsLock: "CapsLock",
    KeyA: ["a", "ф"],
    KeyS: ["s", "ы"],
    KeyD: ["d", "в"],
    KeyF: ["f", "а"],
    KeyG: ["g", "п"],
    KeyH: ["h", "р"],
    KeyJ: ["j", "о"],
    KeyK: ["k", "л"],
    KeyL: ["l", "д"],
    Semicolon: [";", "ж"],
    Quote: ["'", "э"],
    Enter: "Enter",
    
    ShiftLeft: "Shift",
    KeyZ: ["z", "я"],
    KeyX: ["x", "ч"],
    KeyC: ["c", "с"],
    KeyV: ["v", "м"],
    KeyB: ["b", "и"],
    KeyN: ["n", "т"],
    KeyM: ["m", "ь"],
    Comma: [",", "б"],
    Period: [".", "ю"],
    Slash: [" /", "."],
    ArrowUp: "▲",
    ShiftRight: "Shift",
    
    ControlLeft: "Ctrl",
    MetaLeft: "Win",
    AltLeft: "Alt",
    Space: " ",
    AltRight: "Alt",
    ArrowLeft: "◄",
    ArrowDown: "▼",
    ArrowRight: "►",
    ControlRight: "Ctrl",
    
    };
    // let num = 0;
    function createElement(){
        
        for (let key in keys) {
            const keyElement = document.createElement('div');
            
            let keydownFunc = function (event){

                // console.log(num);
                if (event.code == key){
                    TEXTAREA.value += keyElement.innerText;
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                    
                }
                
            }
            
    
        const createIconHtml = (icon_name) => {
            // if (properties.caps == false){
    
            // }
            if (isLetter(icon_name) && icon_name.length === 1){
                    return `<div class="key ${icon_name} letter inactive">${icon_name.toLowerCase()}</div>`;
    
            } else {
                return `<div class="key ${icon_name} inactive" >${icon_name}</div>`;
    
            }
        }
        
        // key = key.substring(0, key.length - 1);
    
        
        switch (key.substring(0, key.length - 1)) {
    
    
            case 'Digit':
                
                keyElement.innerHTML = createIconHtml(key.slice(-1));
    
        
    
    
                keyElement.addEventListener('mousedown', () => {
                    TEXTAREA.value += keyElement.innerText;

                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                })
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                })
    
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {
                    
                    if (event.key === keys[key]){
                        TEXTAREA.value += keyElement.innerText;
                        
                        // console.log(keyElement.innerHTML);
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                        // document.removeEventListener('keydown')
                    }
                });
                break;
    
            case 'Key':
                // q = key.slice(-1).toUpperCase();
    
                // console.log(keys[`Key ${q}` ][0])
                keyElement.innerHTML = createIconHtml(keys[`Key${key.slice(-1).toUpperCase()}`][window.name]);
                // console.log(key.slice(-1)[0])
                
                keyElement.addEventListener('mousedown', () => {
    
                    TEXTAREA.value += keyElement.innerText;
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });

                document.addEventListener('keydown', keydownFunc);
                
                break;
    
            case 'Backspac':
    
                keyElement.innerHTML = createIconHtml(key);
                
                keyElement.addEventListener('mousedown', () => {
                    cursorPosition = TEXTAREA.selectionStart;
                    if (cursorPosition <= TEXTAREA.value.length && cursorPosition > 0){
                        TEXTAREA.value = TEXTAREA.value.slice(0, cursorPosition-1) + TEXTAREA.value.slice(cursorPosition);
                    }
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {
                    // num++;
                    if (event.code == key){
                        cursorPosition = TEXTAREA.selectionStart;
                        if (cursorPosition <= TEXTAREA.value.length && cursorPosition > 0){
                            TEXTAREA.value = TEXTAREA.value.slice(0, cursorPosition-1) + TEXTAREA.value.slice(cursorPosition);
                        }
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
    
            case 'Ta':
    
                keyElement.innerHTML = createIconHtml(key);
    
    
    
                keyElement.addEventListener('mousedown', () => {
                    TEXTAREA.value += '    ';
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {
                    event.preventDefault();
    
                    if (event.code == key){
    
                        TEXTAREA.value += '    ';
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
    
            case 'Delet':
    
                keyElement.innerHTML = createIconHtml('Del');
    
                keyElement.addEventListener('mousedown', () => {
                    // TEXTAREA.value += key;
                    cursorPosition = TEXTAREA.selectionStart;
                    if (cursorPosition <= TEXTAREA.value.length && cursorPosition > 0){
    
                        TEXTAREA.value = TEXTAREA.value.slice(0, cursorPosition) + TEXTAREA.value.slice(cursorPosition+1);
                    }
                    // console.log(cursorPosition);
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {
                    event.preventDefault();
    
                    if (event.code == key){
                        cursorPosition = TEXTAREA.selectionStart;
                        if (cursorPosition <= TEXTAREA.value.length && cursorPosition > 0){
        
                            TEXTAREA.value = TEXTAREA.value.slice(0, cursorPosition) + TEXTAREA.value.slice(cursorPosition+1);
                        }
                        // console.log(cursorPosition);
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
    
            case 'CapsLoc':
    
                keyElement.innerHTML = createIconHtml(key);
    
                keyElement.addEventListener('mousedown', () => {
                        // console.log(properties.caps);
                    if (properties.caps === true){
                        properties.caps = false;
                    } else {
                        properties.caps = true;
                    }
                    // window.name = properties.caps;
                    caps();
                    if (keyElement.firstChild.classList.value.includes('inactive')){
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    } else {
                        keyElement.firstChild.classList.remove('active');
                        keyElement.firstChild.classList.add('inactive');
                    }
    
                    // console.log(keyElement.firstChild.classList.value.includes('active'));
                });
                document.addEventListener('keyup', () => {
                    // keyElement.firstChild.classList.remove('active');
                    // keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {
                    event.preventDefault();
    
                    if (event.code == key){
                        if (properties.caps === true){
                            properties.caps = false;
                        } else {
                            properties.caps = true;
        
                        }

                        // console.log(window.name);
    
                        caps();
                        if (keyElement.firstChild.classList.value.includes('inactive')){
                            keyElement.firstChild.classList.remove('inactive');
                            keyElement.firstChild.classList.add('active');
                        } else {
                            keyElement.firstChild.classList.remove('active');
                            keyElement.firstChild.classList.add('inactive');
                        }
                    }
                });
                
                break;
    
            case 'Ente':
    
                keyElement.innerHTML = createIconHtml(key);
    
                keyElement.addEventListener('mousedown', () => {
                    // console.log(properties.value);
    
                    cursorPosition = TEXTAREA.selectionStart;
                    // console.log(cursorPosition);
                    TEXTAREA.value += '\n';
                    // console.log(TEXTAREA.value);
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {
                    event.preventDefault();
    
                    if (event.code == key){
                        // console.log(properties.value);
    
                        cursorPosition = TEXTAREA.selectionStart;
                        // console.log(cursorPosition);
                        TEXTAREA.value += '\n';
                        // console.log(TEXTAREA.value);
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
    
            case 'ShiftLef':
    
                keyElement.innerHTML = createIconHtml(key.slice(0, 5));
    
              
                keyElement.addEventListener('mousedown', () => {
    
                    
    
                    properties.shift = true;
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                        shift();
                    
                });
                keyElement.addEventListener('mouseup', () => {
                        // console.log(123);
                        properties.shift = false;
                        keyElement.firstChild.classList.remove('active');
                        keyElement.firstChild.classList.add('inactive');
                        shift();    
                    
                });
                document.addEventListener('keyup', (event) => {
                    event.preventDefault();
                    if (event.code == key){
                        properties.shift = false;
                        keyElement.firstChild.classList.remove('active');
                        keyElement.firstChild.classList.add('inactive');
                        shift();    
                    }
                });
                document.addEventListener('keydown', (event) => {
                    event.preventDefault();
                    
                    if (event.code == key){
                        properties.shift = true;
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                        shift();
                    }
                    
                });
    
                
                break;
    
            case 'ShiftRigh':
    
                keyElement.innerHTML = createIconHtml(key.slice(0, 5));
    
              
                keyElement.addEventListener('mousedown', () => {
    
                    
    
                    properties.shift = true;
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                        shift();
                    
                });
                keyElement.addEventListener('mouseup', () => {
                        // console.log(123);
                        properties.shift = false;
                        keyElement.firstChild.classList.remove('active');
                        keyElement.firstChild.classList.add('inactive');
                        shift();    
                    
                });
                document.addEventListener('keyup', (event) => {
                    event.preventDefault();
                    if (event.code == key){
                        properties.shift = false;
                        keyElement.firstChild.classList.remove('active');
                        keyElement.firstChild.classList.add('inactive');
                        shift();    
                    }
                });
                document.addEventListener('keydown', (event) => {
                    event.preventDefault();
                    
                    if (event.code == key){
                        properties.shift = true;
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                        shift();
                    }
                    
                });
    
                
                break;
    
            case 'Spac':
    
                keyElement.innerHTML = createIconHtml(key);
    
                keyElement.addEventListener('mousedown', () => {
    
                    TEXTAREA.value += ' ';
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {
                    event.preventDefault();
    
                    if (event.code == key){
    
                        TEXTAREA.value += ' ';
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
                
            case "AltLef":

                keyElement.innerHTML = createIconHtml(keys[key]);
    
                keyElement.addEventListener('mousedown', () => {


                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {

                    event.preventDefault();
    
                    if (event.code == key){
    
 
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
                
            case "AltRigh":
                keyElement.innerHTML = createIconHtml(keys[key]);
    
                keyElement.addEventListener('mousedown', () => {


                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {

                    event.preventDefault();
    
                    if (event.code == key){
    
    
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
    
            case "ControlRigh":
                keyElement.innerHTML = createIconHtml(keys[key]);
    
                keyElement.addEventListener('mousedown', () => {


                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {

                    event.preventDefault();
    
                    if (event.code == key){
    
    
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
    
            case "ControlLef":
                keyElement.innerHTML = createIconHtml(keys[key]);
    
                keyElement.addEventListener('mousedown', () => {


                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {

                    event.preventDefault();
    
                    if (event.code == key){
    
    
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
    
            case "MetaLef":
                keyElement.innerHTML = createIconHtml(keys[key]);
    
                keyElement.addEventListener('mousedown', () => {


                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {

                    event.preventDefault();
    
                    if (event.code == key){
    
    
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
    
            default:
                // console.log(keys[key].length)
                if (Array.isArray(keys[key])){
                    keyElement.innerHTML = createIconHtml(keys[key][window.name]);
                } else {
                    keyElement.innerHTML = createIconHtml(keys[key])
                    // console.log(keyElement.innerHTML);
                }
    
                keyElement.addEventListener('mousedown', () => {
    
                    TEXTAREA.value += keyElement.innerText;
                    keyElement.firstChild.classList.remove('inactive');
                    keyElement.firstChild.classList.add('active');
                });
                keyElement.addEventListener('mouseup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keyup', () => {
                    keyElement.firstChild.classList.remove('active');
                    keyElement.firstChild.classList.add('inactive');
                });
                document.addEventListener('keydown', (event) => {
                    event.preventDefault();
    
                    if (event.code == key){
    
                        TEXTAREA.value += keyElement.innerText;
                        keyElement.firstChild.classList.remove('inactive');
                        keyElement.firstChild.classList.add('active');
                    }
                });
                
                break;
     
            
    
    
            
            
    
        }

        KEYBOARD.append(keyElement);
    
    
        // if (LastKeyInRow) {
        //     const BREAK = document.createElement("div")
        //     BREAK.classList.add('.br')
        //     KEYBOARD.append(BREAK);
        // }
    }
    
}
createElement();
function doc_keyUp(e) {

    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    let elems = document.querySelectorAll('.key');
    if (e.ctrlKey && e.altKey) {
        // call your function to do the thing
        properties.lang = properties.lang === 1 ? 0 : 1;

        window.name = properties.lang;
        // console.log(window.name);
        // const getKeyByValue = (obj, value) => 
        // Object.keys(obj).find(key => obj[key][0] === value);
        for (let i of elems){
            if (i.innerHTML.length === 1){
                let key = Object.keys(keys).find(key => keys[key][0] === i.innerHTML);
                // let value = i.innerHTML;
                if (keys[key] && keys[key].length === 2){
                    i.innerHTML = keys[key][window.name];
                    // console.log(keys[key]);
                }

            }
            if (i.innerHTML.length === 1){
                const key = Object.keys(keys).find(key => keys[key][1] === i.innerHTML);
                // let value = i.innerHTML;
                if (keys[key] && keys[key].length === 2){
                    i.innerHTML = keys[key][window.name];
                    // console.log(keys[key]);
                }

            }
        }
        // elems.forEach(i => console.log(i.innerHTML));
        // getKeyByValue(keys, i.innerHTML )
        // document.querySelectorAll('key').forEach((elem) => {
            
        //     elem.parentElement.removeEventListener('keydown', () => {});
        // })

        // document.querySelector('.keyboard').innerHTML = '';
        // createElement();
        // console.dir(window)
        
    }
}
// register the handler 
document.addEventListener('keydown', doc_keyUp, false);
// console.log(document.querySelectorll('.letter').innerHTML);











