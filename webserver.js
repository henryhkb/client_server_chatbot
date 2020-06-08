const WS = new WebSocket('ws://localhost:9000');
WS.onmessage = (payload) => {
    console.log(payload.data);
}

WS.onopen = () =>{
    displayTitle=("CONNECTED TO SERVER");
}

WS.onclose = ()=>{
    displayTitle("NOT CONNECTED TO SERVER");
};

function displayTitle(title){
    document.querySelector(' h1').innerHTML = title;
}

document.forms[0].onsubmit = ()=>{
    let input = document.getElementById('message');  
    //console.log(input.value);
    WS.send(input.value);
    //Pushing the data to the server.
};