const DB_URI = 'mongodb+srv://mosobelulu:LxDTtWUWqxdCu4Sw@cluster0.ncs72.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const API = process.env.NODE_ENV === "production" ? "http://xxx.vercel.com/api" : "http://localhost:3000/api"

module.exports ={
    DB_URI,
    API,
}

