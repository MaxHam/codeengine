document.getElementById("math-button").onclick = () => {
    // send request
    ajax({type: post, url:"/result", cache: false, dataType:"json", success: (response) => {
        alert(response)
    }, 
    error: (data) => {
        alert(`Something went wrong: ${data}`)
    }})
    
};


