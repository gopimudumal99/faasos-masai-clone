const postdata = async (url, data) => {
    try {
        console.log("hr")
        let res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        let response = await res.json();
        console.log(response)
        return response;
    } catch (err) {
        console.log("err message", err)
    }
}

export default postdata