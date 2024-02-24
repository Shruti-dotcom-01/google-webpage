const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;
    
    window.location.href = "https://www.google.com/search?q=" + input  + "&oq=" + input  + "&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMg8IARAuGCcYyQMYgAQYigUyFggCEC4YgwEYrwEYxwEYkgMYsQMYgAQyDAgDEAAYQxiABBiKBTISCAQQLhhDGMcBGNEDGIAEGIoFMg0IBRAuGIMBGLEDGIAEMhIIBhAuGEMY1AIYsQMYgAQYigUyEggHEC4YQxjUAhixAxiABBiKBTIKCAgQABixAxiABDIQCAkQLhiDARixAxiABBiKBdIBCTI3NzNqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"
}