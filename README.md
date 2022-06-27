# jwt-basics

# dependencies  

npm install --save body-parser
npm install --save express
npm install --save jsonwebtoken  



bodyparser provides to get data as a object. So user's send data is captured from bodyparser.
- app.use(bodyparser.json()) --> it is defined json cuz coming datas as a json 
- app.use(bodyParser.urlencoded({ extended: true })) --> it is for encoded url




# jwt token 

A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). 
It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header,
payload, signature. These three parts are separated by dots(.). JWT defines the structure of information we are sending from one 
party to the another, and it comes in two forms – Serialized, Deserialized. The Serialized approach is mainly used to transfer the data 
through the network with each request and response. While the deserialized approach is used to read and write data to the web token.
