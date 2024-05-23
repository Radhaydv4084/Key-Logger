const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stoptBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleup);
    startBtn.disabled = true;
    stoptBtn.disabled = false;



});
stoptBtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleup);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    startBtn.disabled = true;
    stoptBtn.disabled = false;
})



function handleDown(e) {
    logDiv.textContent = `key ${e.key} pressed down`;
    stateDiv.textContent = "key is down"

}

function handleUp(e) {
    logDiv.textContent = `key ${e.key} pressed up`;
    stateDiv.textContent = "key is up"

}   