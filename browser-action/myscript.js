function changeColor(color) {
  var current_tab = null;
  var code = 'document.body.style.backgroundColor="' + color + '";'
  var details = {
    'code': code
  };
  chrome.tabs.executeScript(current_tab, details, callback);
}

function callback() {
    if (chrome.runtime.lastError) {
        console.log(chrome.runtime.lastError.message);
    } else {
        // Tab exists
    }
}


document.getElementById('red').onclick = function() {
  changeColor('red');
};

document.getElementById('yellow').onclick = function() {
  changeColor('red');
};
