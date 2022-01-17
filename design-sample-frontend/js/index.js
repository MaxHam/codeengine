document.getElementById("math-button").onclick = async() => {
    // send request
    const data = 'Request sent'
    try {
        const response = await fetch("/solve",{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)})
   
       alert(response.JSON)
    }
    catch (err) {
        alert(`Something went wrong: ${err.JSON}`)
    }
    
};


