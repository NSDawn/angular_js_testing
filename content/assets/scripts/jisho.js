
let test;
lookup("potato", test)

function lookup(search_query) {
    fetch("https://jisho.org/api/v1/search/words?keyword=" + search_query, {
        mode: "no-cors",
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.error("Fetch error:", error )
        })
}

