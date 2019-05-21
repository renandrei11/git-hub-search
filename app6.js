document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data txt', true);

    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${
                this.responseText
            }</h1>`;
        }
    };
    

    xhr.onerror = function() {
        console.log('Request error....');
        
    };

    xhr.send();
    

    // ReadyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready




    // HTTP STATUS
    // 200: "OK"
    // 403: "FORBIDDEN"
    // 404: "NOT FOUND"
}