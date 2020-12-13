function fnInitiateLists(x1) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', ''.concat('/assets/lists/', x1, '.txt'), true);
    xhr.responseType = 'text';

    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                //console.log(xhr.response);
                //console.log(xhr.responseText);
                OutputList = xhr.responseText.split('\n')
                console.log(OutputList)
                return OutputList 
            }
        }
    };

xhr.send(null);
return OutputList;

   }