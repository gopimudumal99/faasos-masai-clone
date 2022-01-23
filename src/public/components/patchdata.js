const patchdata = async (url, data) => {
    try {
        let token= localStorage.getItem("token");
        let res = await fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token,
            },
            body: JSON.stringify(data),
        });

        let response = await res.json();
        return response;
    } catch (err) {
        console.log("err message", err)
    }
}

export default patchdata;