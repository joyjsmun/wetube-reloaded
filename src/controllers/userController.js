export const join = (req, res) => res.send("Join User");
export const edit = (req, res) => res.send("Edit User");
export const login = (req, res) => res.send("Login User");
export const logout = (req, res) => res.send("Login User");
export const profile = (req, res) => {
    console.log(req.params.id);
    return res.send(`profile user #${req.params.id}`)
}
export const remove = (req, res) => res.send("Delete user");