export const trending = (req, res) => res.send("Home! Videos");
export const video = (req, res) => {
    console.log(req.params);
    return res.send(`video #${req.params.id}`);
}
export const search = (req, res) => res.send("Search")
export const edit = (req, res) => {
    console.log(req.params);
    return res.send("Edit");
}
export const remove = (req, res) => res.send("Remove Video")
export const upload = (req, res) => res.send("upload Video")