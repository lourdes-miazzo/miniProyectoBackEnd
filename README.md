### **Orders**
examples
body post *newOrder*
{
    "business": "648f9681f3b2720f86c1d803",
    "user": "648e318b66e65926f91c753c",
    "products": [
        {"id": "648f98ee29018e22403a219d", "quantity": 3},
        {"id": "64908d2517585e7f7c6098ed", "quantity": 4}
    ]
}


### **Business**
examples
body post *newBusiness*
{
    "name": "galeria TrasTienda"
}

body post *addProdInbusiness*
{"product": "Salazar, instalacion(300x1600cms)", "price": 80000}


### **Session**
examples

body post *sign up*
{
     "name": "Lupe",
    "lastName": "Miazzo",
    "email": "LupeM@gmail.com",
    "password": "lupita",
    "role": ["isAdmin"]
 }

body post *login*
{
    "email": "LupeM@gmail.com",
    "password": "lupita"
}

### **User**
examples

body post *newUser*
{
     "name": "Lupe",
    "lastName": "Miazzo",
    "email": "LupeM@gmail.com",
    "password": "lupita",
    "role": ["isAdmin"]
 }