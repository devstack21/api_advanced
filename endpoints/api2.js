import app from "../tools.api/app_tools.js";

app.get('/api/v2/user', async function(req , res){
    res.send('HELLO  user 2')
})
