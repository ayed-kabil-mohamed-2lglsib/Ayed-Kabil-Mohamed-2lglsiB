from typing import Optional
from fastapi import FastAPI , Request
import mysql.connector
import json
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class user (BaseModel):
    fullname: str
    password: str
    address: str
    phone: int
    email: str

app = FastAPI()
origins = [ "http://localhost",
            "http://localhost:4200",

]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Product(BaseModel):
    id_product : int
    model: str
    price: str
    description : str

@app.on_event("startup")
async def startup():
    print("Connecting...")
    
@app.get("/")
async def root():
    return {"message": "Contact Applications!"}

@app.get("/delete")
def delete(id : int):
    mydb = mysql.connector.connect(host ="localhost" , user ="root" , password = "" , database = "e-commerce")
    mycursor = mydb.cursor()
    mycursor.execute(f"DELETE FROM `product` where id_product = {id}")
    mydb.commit()
    return {"done"}
    


@app.get("/allproduct")
def getS():
    mydb = mysql.connector.connect(host ="localhost" , user ="root" , password = "" , database = "e-commerce")
    mycursor = mydb.cursor()
    mycursor.execute(f"SELECT * FROM `product`")
    row_headers=[x[0] for x in mycursor.description] 
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.post("/addproduct")
async def add(request: Request):
    mydb = mysql.connector.connect(host ="localhost" , user ="root" , password = "" , database = "e-commerce")
    mycursor = mydb.cursor()
    body = json.loads(await request.body())
    requete = f"INSERT INTO `product` (`id_product`, `Model`, `Price`, `Description` , `Image`) VALUES (NULL,'{body['model']}', '{body['price']}', '{body['dsp']}','{body['img']}')"
    mycursor.execute(requete)
    mydb.commit()
    return {"true"}




@app.post("/register")
async def reg(request:Request):
    mydb = mysql.connector.connect(host ="localhost" , user ="root" , password = "" , database = "e-commerce")
    mycursor = mydb.cursor()
    body = json.loads(await request.body())
    requete = f"INSERT INTO `user` (`id_user`, `fullname`, `password`, `address` , `phone` , `email`) VALUES (NULL,'{body['fullname']}','{body['password']}','{body['address']}','{body['phone']}','{body['email']}')"
    mycursor.execute(requete)
    mydb.commit()
    return "succesfully inserted"


@app.get("/user")
def getU():
    mydb = mysql.connector.connect(host ="localhost" , user ="root" , password = "" , database = "e-commerce")
    mycursor = mydb.cursor()
    mycursor.execute(f"SELECT `fullname` FROM `user` WHERE email ='{body['email']}'")
    row_headers=[x[0] for x in mycursor.description] 
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/login")
def getL():
    mydb = mysql.connector.connect(host ="localhost" , user ="root" , password = "" , database = "e-commerce")
    mycursor = mydb.cursor()
    mycursor.execute(f"SELECT `email` , `password` FROM `user`")
    row_headers=[x[0] for x in mycursor.description] 
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data

@app.get("/admin")
def getA():
    mydb = mysql.connector.connect(host ="localhost" , user ="root" , password = "" , database = "e-commerce")
    mycursor = mydb.cursor()
    mycursor.execute(f"SELECT `email` , `password` FROM `admin`")
    row_headers=[x[0] for x in mycursor.description] 
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data


@app.post("/edit")
async def edit(id : int , request:Request):
    mydb = mysql.connector.connect(host ="localhost" , user ="root" , password = "" , database = "e-commerce")
    mycursor = mydb.cursor()
    body = json.loads(await request.body())
    requete = f"UPDATE `product` SET `Model`='{body['model']}' , `Price` = '{body['price']}' , `Description` = '{body['dsp']}' , `Image` = '{body['img']}' WHERE id_product = {id}"
    mycursor.execute(requete)
    mydb.commit()
    return "succesfully updated"

@app.get("/product")
def getS(id : int):
    mydb = mysql.connector.connect(host ="localhost" , user ="root" , password = "" , database = "e-commerce")
    mycursor = mydb.cursor()
    mycursor.execute(f"SELECT * FROM `product` WHERE id_product = {id}")
    row_headers=[x[0] for x in mycursor.description] 
    rv = mycursor.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json_data


