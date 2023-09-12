
let test;
lookup("potato", test)

function lookup(search_query) {
    fetch("https://jisho.org/api/v1/search/words?keyword=" + search_query)
        .then(response => {
            if (!response.ok) {
                console.log(response.status);
                console.log(response.statusText);

                throw new Error("Network response was not ok")
            }
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.error("Fetch error:", error )
        })
}

