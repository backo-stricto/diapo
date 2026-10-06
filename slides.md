---
# try also 'default' to start simple
theme: dracula
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.comections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Backo
subtitle: ORM + API restfull
author: Bertrand Wallrich
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
# duration of the presentation
duration: 35min
layout: cover
---

# Backo

Backoffice low code

__ORM + API restfull__

<footer>

<div class="grid grid-cols-2 gap-4">
  <div>


<div>
<span>

![SED](/images/icon.png)

</span>
<span>


[https://sed-nge.inria.fr/](https://sed-nge.inria.fr/)

</span>
</div>


<Transform :scale="0.5" origin="bottom left">

![](/images/inr_logo_rouge.png)

</Transform>

  </div>
  <div origin="top center">

[https://backo-stricto.github.io/diapo](https://backo-stricto.github.io/diapo)

<Transform :scale="0.5">
  <div style="filter:invert(80%) saturate(1000%)">

![](/images/qr-code.svg)

</div>
</Transform>


  </div>
</div>

</footer>




---
layout: cover
---


## Plan


<Toc text-sm minDepth="0" maxDepth="1" columns="2"/>



---
layout: two-cols
---

## Disclaimers 

::left::



<Transform :scale="0.8" origin="bottom center">

![](/images/logo_bio_eurofeuille.png)

</Transform>


::right::

* __For developpers__, not  _idiot proof_ (A lot of callback/lambda. You can do what you want, including horrors), no __limitations__
* __Full documented__, but need to be improved (a lot of stuff linked together)
* __Choices__
  * language = python
  * reduced list of deps : flask, json, API restfull, JWT
  * __MIT Licence__


---
layout: section
---
# General


---
layout: two-cols-header
zoom : 0.7
---

## Why backo

From a scientific code to a web service

::left::

The starting point

```mermaid
---
config:
  theme: redux-dark-color
  look: neo
  layout: ELK
---
flowchart LR
  subgraph Scientific code
    process[[process]]
  end
  input([input]) --> process
  parameters([parameters]) --> process
  process --> output([output])
```

::right::

<div v-click>

The _final_ application

```mermaid
---
config:
  theme: redux-dark-color
  look: neo
  layout: ELK
---
flowchart LR
    subgraph application
      subgraph Scientific code
        process[[process]]
      end
      subgraph SI
        CRUD[[Manage]]
        parameters[("parameters
        input
        outputs
        agregates")]
      end
    end
    input([input]) --> CRUD
    CRUD -- spawn --> process
    process -- output --> CRUD
    CRUD <-. CRUD .-> parameters
    CRUD --> output([output])
    CRUD -.-> visu([visualisation])
    CRUD -.-> agregates([agregates])
```


</div>





---
layout: two-cols-header
---

## Agility

__Howto handle evolutions of needs ?__

::left::

### User point of vue

<div v-click=1>

_...just a small web app to handle ..._

</div>
<div v-click=3>

* just a proof of concept, no need auth !

</div>
<div v-click=5>

* must interact with this external stuff (openData/model) !

</div>
<div v-click=7>

* need some stats|summary|agreagation just for us.
* of course each user can only see its own results

</div>

::right::
### Dev point of vue

<div v-click=2>

_... as quick as possible..._

</div>

<div v-click=4>

* sanity / security check.
* database(s) Management,
* errors management,

</div>
<div v-click=6>

* integration,
* migrations,

</div>
<div v-click=8>

* Authentication and RBAC,
* views,

</div>



---
layout: two-cols-header
---

## backoffice


A backoffice provides a web API (restfull API) for handling datas (CRUD).
100% of operations can be executed via this api.

::left::


```mermaid
---
config:
  look: handDrawn
  theme: dark
---
sequenceDiagram
    actor client as Web app
    participant backo as Backoffice
    participant db@{ "type" : "collections" } as Database    
    participant process@{ "type" : "collections" } as Process    
    client ->>backo: http request (GET/POST/UPDATE/DELETE)
    activate backo
    backo -->>db: Get / insert / update / delete
    db -->> backo: Data
    backo -->>process: spawn
    process -->>backo: output
    backo -->>db: Get / insert / update / delete
    db -->> backo: Data
    backo->>client  : http response (Datas)
    deactivate backo
```
<div v-click=2>

### Low code

main part of the code already written. 

Less code but not zero code  

</div>


::right::

<div v-click=1>


* authentication and RBAC, <span v-if="$clicks >= 2">✅ </span> 
* views, <span v-if="$clicks >= 2">✅ </span> 
* sanity check, <span v-if="$clicks >= 2">✅ </span> 
* security check, <span v-if="$clicks >= 2">✅ </span> 
* database(s) management, <span v-if="$clicks >= 2">✅ </span> 
* errors management, <span v-if="$clicks >= 2">✅ </span> 
* workflows, <span v-if="$clicks >= 2">✅ </span> 
* integration, <span v-if="$clicks >= 2">✅ </span> 
* <span v-mark.red=2>__business logic code__</span>

</div>



---
layout: two-cols-header
---

## Goals


__A backoffice quickly available (in hours or days), entirely functional, adaptable and scalable.__

::left::

* _out of the box_ (can be used quickly)
* _short learning curve_ 
  * shortlist of (smart) concepts
  * full documented
* _scalable_ 
  * From small to complex application
  * Avoid unforse feature (__It is code, YOUR code__)


::right::

<iframe
  src="https://backo.readthedocs.io/en/latest/readme.html#"
  style="
      width: 200%;
      height: 200%;
      transform: scale(0.5);
      transform-origin: top left;
      border: none;
    "
  class="w-full h-full"
></iframe>


---
zoom: 0.7
---

## Comparative

chatgpt likes backo ;) (oct 2026)

<Transform :scale="0.9">

![](/images/comparative_chatgpt.png)

</Transform>



---
layout: section
---

# Key features


---
layout: two-cols-header
zoom: 0.9
---

## Classic

::left::

* _Standard_ description of elements :
  * `Collection` (aka Table in SQL)
  * `Item` the object in the collection
  * `Ref`erences cross collections (_Ref_ and _RefsList_)
  * standard _types_ (Int, String, Float, Bool, List, ...)
  * custom types (inheritance)
  * standard attributes (required, default, ...)
* _Standard_ API 
  * All routes for CRUD
  * All routes for select (pagination, complex filtering)
* _Connector_ to a standard Database or file (MongoDB, Sqlite3, ...)


::right::

```python {hide|all}
# Define the Item
books_item = Item(
    {
        "title": String(require=True, default="No title"),
        "pages": Int(),
        "borrow": Dict(
            {
                "user": Ref(
                    coll="users",
                    field="$.rent.books",
                ),
                "return_date": Datetime(),
                "date": Datetime(),
            },
        ),
    }
)
# define the DBHandler
connector = DBMongoConnector(
    connection_string="mongodb://...", collection="Books"
)
books = Collection("books", books_item, connector)
myapp = Backoffice("media_library") # my backo
myapp.register_collection(books)
myapp.build_routes(flask, "v1") # build API routes
flask.run(host="0.0.0.0", port=5000) # start the web server
```

---
layout: two-cols-header
---

## Specific

No dedicated language, no configuration file : __100% python__,  Full programatic (you can change _any_ value by a function with return a value)

```python
"pages" : Int(require=True, default=0),
"date" : Datetime(require=True, default=lambda o: return datetime.now() )
```
::left::

* `Selections` (= views)
  * filtering, partial views, sorting
* `Actions` for more complex modifications than CRUD
* _migration_ tools
* _init tool_ (backo_init)

::right::

* __rights__ 
  * on every fields (read / modify) 
  * on every collection ( CRUD )
  * on every action ( execute) 
  * ...
* __calculated__ fields (like a formula in excel, but a python function) 
* __conditional__ fields (exists only if ... ) 
* __events__ on fields


---
---

## Database Handlers

  * Different types of databases (MongoDB, SQL, ...)
    * Filtering / sorting transformation into the DB language
  * adapt to existing database with `Transformer`
  * integration in an existing _SI_
    * mix different types of `DBHandler` per `Collection` with cross references
  * Structure coherence policies
    * keep database coherence
    * delete item, _external collections_
  



---
---

# Architecture


<v-switch>
<template #1>

## A single application

```mermaid
---
config:
  look: handDrawn
  theme: dark
---
flowchart LR
    subgraph application
        flask@{ shape: div-rect, label: "flask" }
        subgraph backo
            backoffice@{ shape: div-rect, label: "backoffice" }
            coll1[collection 1]
            coll2[collection 2]
            coll3[collection 3]
            DBHandler1[ DBHandler ]
            DBHandler2[ DBHandler ]
            DBHandler3[ DBHandler ]
        end
        DB1[(Database)]
    end
    client1[ client ] -. GET\nPOST\nPATCH\nDELETE .-> flask
    client2[ client ] -. GET\nPOST\nPATCH\nDELETE .-> flask
    flask <==> backoffice
    backoffice <==>|"get_by_id()\ncreate()\nselect()\nupdate()"| coll1
    backoffice <==> coll2
    backoffice <==> coll3
    coll1 <==>|"get()\ncreate()\nselect()\nsave()"| DBHandler1
    DBHandler1 <-->|"SELECT * FROM WHERE"| DB1
    coll2 <==> DBHandler2
    DBHandler2 <--> DB1
    coll3 <==> DBHandler3
    DBHandler3 <--> DB1
```
</template>
<template #2>

## Integration

```mermaid
---
config:
  look: handDrawn
  theme: dark
---
flowchart LR
    subgraph application
        flask@{ shape: div-rect, label: "flask" }
        subgraph backo
            backoffice@{ shape: div-rect, label: "backoffice" }
            coll1[collection 1]
            coll2[collection 2]
            coll3[collection 3]
            DBHandler1[ DBHandler ]
            DBHandler2[ DBHandler ]
            DBHandler3( DBRestFull )
        end
        DB1[(Database 1)]
    end
    client1[ client ] -. GET\nPOST\nPATCH\nDELETE .-> flask
    client2[ client ] -. GET\nPOST\nPATCH\nDELETE .-> flask
    flask <==> backoffice
    backoffice <==>|"get_by_id()\ncreate()\nselect()\nupdate()"| coll1
    backoffice <==> coll2
    backoffice <==> coll3
    coll1 <==>|"get()\ncreate()\nselect()\nsave()"| DBHandler1
    DBHandler1 <-->|"SELECT * FROM WHERE"| DB1
    coll2 <==> DBHandler2
    DBHandler2 <-->|"coll.find().sort()"| DB2[(Database 2)]
    coll3 <==> DBHandler3
    DBHandler3 <-..->|GET\nPOST\nPATCH\nDELETE| DB3[external API]

```
</template>

</v-switch>

---
layout: section
---

# How it works

---
---

## Main objects

<div class="h-full flex items-center justify-center">

```mermaid {scale: 0.5}
---
config:
  look: handDrawn
  theme: dark
---
classDiagram
    direction LR
    Backoffice "0" --> "1+" Collection
    Collection "1" -- "1" Item
    Collection "1" -- "1" DBConnector
    Collection "0" --> "0+" Selection
    Collection "0" --> "0+" Action
    class DBConnector{
        get_by_id()
        select()
        save()
        create()
    }
    class Item{
        +String/Int/Dict/List...
        create()
        delete()
        load()
        save()
    }
    class Collection{
        name
        Item
        DBConnector
        register_selection()
        register_action()
        select()
        select_one()
    }
    class Action{
        name
        +String/Int/Dict/List...
        go()
    }
    class Backoffice{
        name
        register_collection()
        build_route()
    }
    class Selection{
        name
        +fields
        +filter
    }
    class current_user{
        _id
        login
        ...
        has_role()
    }
```

</div>


---
layout: two-cols-header
zoom: 0.8
---

## some python

* _only_ business logic code
* DB consistency, model checking, rights, re-computation, events, ...  _in background_
* DB abstraction
  

::left::

```python
# Define the Item
books_item = Item(
    {
        "title": String(require=True, default="No title"),
        "pages": Int(),
        "borrow": Dict(
            {
                "user": Ref(
                    coll="users",
                    field="$.rent.books",
                ),
                "return_date": Datetime(),
                "date": Datetime(),
            },
        ),
    }
)
# define the DBHandler
connector = DBMongoConnector(
    connection_string="mongodb://...", collection="Books"
)
books = Collection("books", books_item, connector)
myapp = Backoffice("media_library") # my backo
myapp.register_collection(books)
```

::right::
* Creation & modify
```python
b = myapp.books # Get the books collection
martine = b.create({ "title", "Martine use docker" })
# martine._id -> "12345"
# martine.title -> "Martine use docker"
martine.pages = "35" # raise an error
martine.pages = 35
martine.save()
```
* Update a Ref
```python
u = myapp.users # Get the users collection
bert = b.select_one( SFilter( "$.surname", Operator.EQ, "Bertrand" ))
if bert:
    bert.rent.books # -> []
    martine.borrow.user = bert._id
    martine.borrow.date = datetime.now()
    martine.borrow.return_date = martine.borrow.date + timedelta(month=1)
    martine.save()
    bert.reload() # bert has changed in the DB
    bert.rent.books # -> [ "12345" ]
```
* and more !



---
layout: section
---

# Go deeper ?

<div class="grid grid-cols-2 gap-4">
<button @click="$nav.next" class="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
  Yes
</button>
<button @click="$nav.go($nav.total)" class="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
  No
</button>
</div>

---
layout: two-cols-header
---

## Backoffice and Collections
The main part

::left::


```python {all|2}
# set the flask application route
flask = Flask("my_media_library")

@flask.route("/login", methods=["POST"])
def log_in():
    """login and return a token"""
    token = jwt.encode(...)
    response = make_response(json.dumps({"login": "ok"}))
    response.set_cookie("jwt_token", token)
    return response


def check_user_token() -> None | Response:
    """Decode the jwt token and set current_user"""
    token = request.cookies.get("jwt_token")
    data = jwt.decode(token, "myappsecretkey")
    current_user.set(data["user"])
    return None

```


::right::

```python {all|9-15}
@flask.route("/logout")
@token_required
def logout():
    """clear the jwt in cookie"""
    response = make_response(json.dumps({"logout": True}))
    response.delete_cookie("jwt_token")
    return response

myapp = Backoffice("media_library")
myapp.register_collection(books)
myapp.register_collection(users)

myapp.build_routes(flask, "v1", check_user_token)

flask.run(host="0.0.0.0", port=5000)
```




---
layout: two-cols
---

## Item

Description of the object structure (fields) in a collection

::left::

  * type of the field (```Int```, ```Float```, ```String```, ```List```, ```Dict```, ```Tuple```, ... )
    * references (<kbd>Ref</kbd> et <kbd>RefsList</kbd>) to other collections
  * _constraints_ (require, ... )
  * _rights_ (```read``` and ```modify```)
  * conditional ( existence of this field according to another)
   * computed (the field is the result of a function on the Item ) 
  * _events_ callbacks
  * _transform_ function

::right::


::code-group

```python [main] {hide|all|1,22,26|1-20|3,11,14,15|5|12,17|21-24|all}
books_item = Item(
    {
        "title": String(require=True, default=""),
        "pages": Int(),
        "borrowed": Bool(set=set_borrowed),
        "borrow": Dict(
            {
                "user": Ref(
                    coll="users",
                    field="$.rent.books",
                    require=True, default="",
                    can_read=can_read_borrow_user,
                ),
                "return_date": Datetime(require=True),
                "date": Datetime(require=True),
            },
            can_modify=can_modify_borrow,
        ),
    }
)

connector = DBMongoConnector(
    connection_string="mongodb://...", collection="Books"
)

books = Collection("books", books_item, connector)
```

```python [set]
def set_borrowed(book: Item) -> bool:
    """compute if the book is currently borrowed

    :param book: the current book
    :type book: Item
    :return: borrowed or not
    :rtype: bool
    """
    if book.borrow is None:
        return False
    if book.borrow.return_date is None:
        return False
    if book.borrow.return_date > datetime.now():
        return True
    return False
```

```python [rights]
def can_modify_borrow(right_name: str, book: Item) -> bool:
    """Tel if current_user can modify 
       the borrow part of the book
    """
    if current_user.has_role(["ADMIN", "EMPLOYEE"]):
        return True
    return False
```

::


---
layout: two-cols-header
---



## Everything is _almost_ value or function

::left::

* set = func

_Must return a value of the same type of the object_

```python

def set_borrowed(book: Item) -> bool:
    """compute if the book is currently borrowed

    :param book: the current book
    :type book: Item
    :return: borrowed or not
    :rtype: bool
    """
    if book.borrow is None:
        return False
    if book.borrow.return_date is None:
        return False
    if book.borrow.return_date > datetime.now():
        return True
    return False

```

::right::

* can_read|can_modify = func|value

_Must return a bool ```bool```_

```python

def can_modify_borrow(right_name: str, book: Item) -> bool:
    """Tel if current_user can modify the borrow part of the book

    :param right_name: The name of the right (here ="modify")
    :type right_name: str
    :param book: The book
    :type book: Item
    :return: True if can modify
    :rtype: bool
    """
    if current_user.has_role(["ADMIN", "EMPLOYEE"]):
        return True

    if book.borrowed is False:
        return True

    return False

```



---
layout: two-cols
---


## References (1/3)

* link between objets (colletions)
* <span v-mark.circle.red=2>keep the database consistency</span>

<kbd>Ref</kbd> and <kbd>RefsList</kbd>

::left::

```mermaid
erDiagram
    direction LR
    classDef className fill:#f9f,stroke:#333,stroke-width:4px
    Users |o--o{ Addresses : live
    Users {
        String name
        String surname
        Bool male
    }
    Addresses {
        String name
        String address
    }
```

<div v-click>

```mermaid
erDiagram
    direction LR
    classDef className fill:#f9f,stroke:#333,stroke-width:4px
    Users |o--o{ Addresses : live
    Users {
        String name
        String surname
        Bool male
        Ref addr "link one-to-many to Addresses"
    }
    Addresses {
        String name
        String address
        Refs users "link many-to-one to Users"
    }
```

</div>

::right::


```python {hide|all|2,16|3-11,17-24|12,25|7-9,21-23|all}
my_backoffice.register_collection(
    "users",
    Item(
        {
            "name": String(),
            "surname": String(),
            "addr": Ref(
              coll="addrs", field="$.users", required=True
            ),
            "male": Bool(default=True),
        }),
    yml_users
)

my_backoffice.register_collection(
    "addrs",
    Item(
        {
            "name": String(),
            "address": String(),
            "users": RefsList(
                coll="users", field="$.addr"
            ),
        }),
    yml_addr,
    )
```



---
layout: two-cols-header
---

## References (2/3) - database consistency

::left::

<Transform :scale="0.9">

```python {2,7-9,16,20-22}
my_backoffice.register_collection(
    "users",
    Item(
        {
            "name": String(),
            "surname": String(),
            "addr": Ref(
              coll="addrs", field="$.users", required=True
            ),
            "male": Bool(default=True),
        }),
    yml_users
)
my_backoffice.register_collection(
    "addrs",
    Item(
        {
            "name": String(),
            "address": String(),
            "users": RefsList(
                coll="users", field="$.addr"
            ),
        }),
    yml_addr,
    )
```

</Transform>

::right::


<Transform :scale="0.9">

```python {hide|all}
# Create addr
moon = my_backoffice.addrs.create({"name": "moon", 
            "address": "far", "users": [] })
mars = my_backoffice.addrs.create({"name": "mars", 
            "address": "very far", "users": [] })
# Create users
neil = my_backoffice.users.create({"name": "amstrong", 
            "addr": moon._id})
matt = my_backoffice.users.create({"name": "damon", 
            "addr": mars._id})

moon.reload()
mars.reload()
len(moon.users) # -> 1
moon.delete()  # raise Error (not empty) !

# matt goes back to moon
matt.addr = moon._id
matt.save()

moon.reload()
mars.reload()

len(moon.users) # -> 2
len(mars.users) # -> 0

mars.delete()  # Ok (sorry Elon)

```

</Transform>


---
layout: two-cols-header
---

## References (3/3) - options

::left::

### Main

| Item A | Item B | description |
| -- | -- | -- |
| <kbd>Ref</kbd> | <kbd>Ref</kbd> | 0 or one to one |
| <kbd>Ref</kbd> | <kbd>RefsList</kbd> | 0 or one to many |
| <kbd>Ref(require=True)</kbd> | <kbd>RefsList</kbd> | One to many |
| <kbd>RefsList</kbd> | <kbd>RefsList</kbd> | Many to many |


::right::

<div v-click>


### RefsList

<Transform :scale="0.9">


* <kbd>ofs=</kbd> On Fill Strategy : fill the value ?
  * ```FillStrategy.FILL``` (by default) fill it
  * ```FillStrategy.NOT_FILL``` just keep ref

* <kbd>ods=</kbd> On Delete Strategy : what append when delete this item ?
  * ```DeleteStrategy.MUST_BE_EMPTY``` (by default) drop only if empty
  * ```DeleteStrategy.DELETE_REFERENCED_ITEMS``` drop all 
  * ```DeleteStrategy.UNLINK_REFERENCED_ITEMS``` references are lost


</Transform>

</div>


---
layout: section
---

# Habilitation
Role-Based Access Control


---
layout: two-cols-header
---

## current_user

::left::


* ```current_user``` Object provided by _backo_ :
  * contains datas about the currently connected user (```_id```, ```login```, ```roles``` )
  * methods :
    * ```has_role( role: str | list[str] )``` check the role in the list
    * ```set( data )``` set datas
  
  

```mermaid {scale: 0.6}
flowchart LR
    login[ /login ]
    route[At each route]
    setjwt[ set jwt ]
    decjwt[ decode jwt ]
    set[ current_user.set ]
    logout[ /logout ]
    dropjwt[drop jwt]

    login --> setjwt
    route --> decjwt
    decjwt --> set
    logout --> dropjwt

```

::right::

::code-group

```python [main]
@flask.route("/login", methods=["POST"])
def log_in():
    """check the login"""
    # Do the login or drop if wrong /login/password 
    login = request.json["login"]
    password = request.json["password"]

    # Set the token
    token = jwt.encode(
        {
            "exp": datetime.now(timezone.utc) 
                    + timedelta(hours=1),
            "user": {
                "_id": user._id.get_value(),
                "login": user.login.get_value(),
                "roles": user.roles.get_value(),
            },
        },
        "myappsecretkey", algorithm="HS256",
    )
    response = make_response(json.dumps({"login": "ok"}))
    response.set_cookie("jwt_token", token)
    return response

```


```python [check]
def check_user_token() -> None | Response:
    """
    Decode the jwt token and set current_user.
    """
    token = request.cookies.get("jwt_token")
    if not token:
        return jsonify({"message": "Token missing!"}), 401
    try:
        data = jwt.decode(
                 token, "myappsecretkey", 
                 algorithms=["HS256"]
               )
    except:  # pylint: disable=bare-except
        return jsonify({"message": "Token invalid!"}), 401
    current_user.set(data["user"])
    return None
```
```python [use]
def can_modify_borrow(right_name: str, book: Item) -> bool:
    """Tel if current_user can modify 
       the borrow part 
    """
    if current_user.has_role(["ADMIN", "EMPLOYEE"]):
        return True

    return False

```

::




---
---

## More options

* ```**kwargs```:
  * <kbd>constraint</kbd>= ```func``` -- a function to check if the value is admissible
  * <kbd>constraints</kbd>= ```[func]``` -- a list of function to check if the value is admissible
  * <kbd>default</kbd>= ```Any``` -- default value
  * <kbd>description</kbd>= ```str``` -- a description of this field (like a comment)
  * <span v-mark.red><kbd>exists</kbd>=</span> ```bool|func``` -- answer if this field exists or not
  * <kbd>in</kbd>= ```[Any]``` -- a list of available values
  * <kbd>require</kbd>= ```bool``` -- if this field cannot be None
  * <kbd>set</kbd>= ```func``` -- a compute value
  * <kbd>transform</kbd>= ```func``` -- a function to modify the value BEFORE affectation
  * <kbd>on</kbd>= [ ( ```event_name``` ,```func``` ) ] -- Do the action on an event

---
layout: two-cols-header
---

## exists=
Ability to have conditional fields, depending on others.

::left::

```python {all|10-18|18|2-8}
# example
def check_if_female(value: Any, o: Item) -> bool:
    """
    return true if Female
    """
    if o.gender == "Male":
        return False
    return True

cat=Item({
    "name" : String(),
    "gender" : String( default = 'Male', 
                       in=[ 'Male', 'Female' ]),
    "female_infos" : Dict(
        {
        "number_of_litter" : Int(default=0, required=True)
        # ... some other attributes
    }, exists=check_if_female )
})

```

::right::


```python {hide|all}

cat.set({ "name" : "Felix", "gender" : "Male" }
cat.female_infos   # -> None
cat.female_infos.number_of_litter = 2 # -> Raise an Error

cat.gender = "Female"
cat.female_infos.number_of_litter = 2 # -> Ok
cat.female_infos # -> { "number_of_litter" : 2 }
```



---
layout: section
---

# Api routing



---
---

## Routes
Generated CRUD++ routes

<v-switch>
<template #1>


```python {all,13}
@flask.route("/logout")
@token_required
def logout():
    """clear the jwt in cookie"""
    response = make_response(json.dumps({"logout": True}))
    response.delete_cookie("jwt_token")
    return response

myapp = Backoffice("media_library")
myapp.register_collection(books)
myapp.register_collection(users)

myapp.build_routes(flask, "", check_user_token)

flask.run(host="0.0.0.0", port=5000)
```

</template>
<template #2>


| Method | Route | Description |
| -- | -- | -- |
| <kbd>GET</kbd> | \<my-app-name\>/\<collection name\>/\<_id\> | get an object by _id |
| <kbd>GET</kbd> | \<my-app-name\>/\<collection name\>?\<query_string\> | select objects |
| <kbd>POST</kbd> | \<my-app-name\>/\<collection name\>?\<query_string\> | select objects |
| <kbd>POST</kbd> | \<my-app-name\>/\<collection name\> | create a new object |
| <kbd>PUT</kbd> | \<my-app-name\>/\<collection name\>/\<_id\> | modify an object |
| <kbd>PATCH</kbd> | \<my-app-name\>/\<collection name\>/\<_id\> | modify an object |
| <kbd>DELETE</kbd> | \<my-app-name\>/\<collection name\>/\<_id\> | delete an object |
| <kbd>POST</kbd> | \<my-app-name\>/\<collection name\>/_check | check a possible value |

</template>
<template #3>

Get a user
```bash
curl -X GET 'http://localhost/myApp/users/123'
```

Select all users whose name includes 'do' and present the result list with 10 items per page.
```bash
curl -X GET 'http://localhost/myApp/users/?name.$re=do&_page=10'  
```
Create a new user
```bash
curl -X POST 'http://localhost/myApp/users/' -d '{"name":"John","surname":"Rambo"}'
```
Modify a user
```bash
curl -X PUT 'http://localhost/myApp/users/1234' -d '{"name":"Johnny"}'
```
Patch a user ( see [rfc6902](https://datatracker.ietf.org/doc/html/rfc6902) )
```bash
curl -X PATCH  'http://localhost/myApp/users/1234' -d '{"op": "replace", "path" : "$.name", "value": "Gilda"}'
```

</template>
<template #4>

Check a value

```bash
curl -X POST 'http://localhost/myApp/users/_check' -d \
  '{ "item" : { "name" : "John", "surname" : 32 }, "path" : "$.surname" }'
# will check surname an return a response.data like 
{
    'error' : "$.surname: Must be a string"
}
```

```bash
curl -X POST 'http://localhost/myApp/users/_check' -d \
 '{ "item" : { "surname" : "Johnny" }, "path" : "$.surname" }' 
# will check surname an return a response.data like 
{
    'error' : null
}
```

</template>
</v-switch>


---
zoom: 0.7
---

## Filtering
Get a list of objects matching the query string.


<v-switch>
<template #1>

The query string can be with this format

| key | value | description |
| - | - | - |
| \<field\> | \<value\> | matches items where `<field>` equals `<value>` |
| \<field\>.\<operator\> | \<value\> | matches items where `<field>` satisfies `<operator>` with `<value>` |
| \<field\>.\<subfield\> | \<value\> | Matches items where `<field>` is a nested dictionary containing `<subfield>` equal to `<value>` |
| \<field\>.\<subfield\>.\<operator\> | \<value\> | Matches items where `<field>` is a nested dictionary containing `<subfield>` satisfies `<operator>` with `<value>` |


* Example
```bash
curl -X GET 'http://localhost/myApp/users/?name.$re=do&$age.$gt=18'  
```

</template>
<template #2>

| key | value | default | description |
| - | - | - | - |
| <kbd>_page</kbd> | int | - | sets the desired number of items per page in paginated data presentation |
| <kbd>_skip</kbd> | int | - | skips the n-first items of the result list in paginated data presentation. |
| <kbd>_total</kbd> | 1 | - | Want the total of available items |


The request returns a HTTP status `200` with that JSON object:

```python
{
    "result": # list of dict containing objects matched
    "_skip": # the _skip given in the request
    "_page": # the _page given in the request
}
```
if <kbd>_total</kbd> is set, <kbd>_page</kbd> and <kbd>_skip</kbd> are ignored and the result is the total of Item matchinf the filter.

```python
 '{ "total" : 666 }'
```



</template>
<template #3>
Operators

| operator | syntax | example | description |
| - | - | - | - |
| $and | ( "$and", [ condition, condition ] ) | ( "\$and", [ ( "\$gt", 1 ), ( "\$lt" : 2 )]) | Do an *and* on conditions |
| $or | ( "$or", [ condition, condition ] ) |  ( "\$or", [ ( "\$gt", 10 ), ( "$eq" : 0 )]) | Do an *or* on conditions |
| $eq | ( "$eq", value ) |  ( "\$eq", "toto" ) | Equality |
| $ne | ( "$ne", value ) |  ( "\$ne", "toto" ) | Not equal |
| $lt | ( "$lt", value ) |  ( "\$lt", 1 ) | Less than |
| $lte | ( "$lte", value ) |  ( "\$lte", 1 ) | Less than or equal |
| $gt | ( "$gt", value ) |  ( "\$gt", 1 ) | Greater than |
| $gte | ( "$gte", value ) |  ( "\$gte", 1 ) | Greater than or equal |
| $not | ( "$not", condition ) |  ( "\$not", ... ) | Not |
| $reg | ( "$reg", regexp ) |  ( "\$reg", r'Jo' ) | A regular expression; match only on strings (match "start with Jo" in this example.) |
| $contains | ( "$contains", condition ) |  ( "\$contains", ( "$reg", r'^Jo' ) ) | a list contains one or more elements matching the condition |

</template>


</v-switch>

---
layout: two-cols-header
zoom: 0.9
---

## Path

::left::


Utilisé pour les selecteurs [rfc9535](https://datatracker.ietf.org/doc/rfc9535/)

```python
from stricto import Int, List, String, Dict, Error

a = Dict(
    {
        "a": Int(default=1),
        "b": Dict({
            "l" : List( Dict({
                "i" : String()
            }) )
        }),
        "c": Tuple( (Int(), String()) )
    }
)
a.set({ "a" : 12, 
        "b" : { 
          "l" : [ 
            { "i" : "fir" }, 
            { "i" : "sec"}
          ]}, 
        "c" : ( 22, "h") 
      })
```

::right::


| Caracter | Definition |
| -- | -- |
| <kbd>$</kbd> | racine de l objet |
| <kbd>*</kbd> | all |
| <kbd>:</kbd> | slice |

```python

a.select('$.a') # 12

# To make the difference :

a.select('$.f.d') # None
a.f.d # -> raise an error

a.select("$.b.l[0].i") # "fir"
a.select("$.*.l.i") # ["fir", "sec"]
a.select("$.*.l[0:2].i") # ["fir", "sec"]

# multi_select
a.multi_select( [ "$.a", "$.c" ] ) # [ 12 , ( 22, "h") ]
```
---
zoom: 0.7
---

## Examples


```python
user = Item(
    {
        "name"    : String()
        "surname" : String()
        "incomes" : Dict({
                "salary" : Int(),
                "royalties" : Int(),
                
        }),
    }
)

user.set( { "name" : "John", "surname" : "Doe", "incomes" : { "salary" : 50000 }})
user.save()

```

<div v-click>

* Match with equality 
```python
from backo import SFilter, Operator

f = SFilter( "$.surname", Operator.EQ, "Doe" )
f.check( user ) # -> True
user.match( { "surname" : "Doe" } ) -> return True
# equivalent
curl -X GET 'http://localhost/myApp/users/?name=Doe'
curl -X GET 'http://localhost/myApp/users/_selections/_all?name=Doe'  
curl -X POST 'http://localhost/myApp/users/_selections/_all -d {"name": "Doe"}'  
```

</div>

<div v-click>

* Match with $or
```python
f = SFilter( None, Operator.OR [ SFilter( "$.surname", Operator.EQ, "Doe" ) , SFilter ( "$.incomes.salary", Operator.GT, 20000) ] )
f.check( user ) # -> True
# Equivalent
curl -X POST 'http://localhost/myApp/users/_selections/_all -d { "$or" : [ ( "$.surname", "Doe" ), ( "$.incomes.salary" : ( "$gt", 60000 ) ) ] }'  
```

</div>



---
layout: section
---

# Additional Stuffs
Selections and Actions


---
zoom: 0.8
---

## Selections (aka vues) 1/2

Do some _filtered tables_. <kbd>selection</kbd> = `array of path` + `a filter` + `a sort`

* <kbd>can_read</kbd> who can execute the selection ?

```python
# list of borrowed books
borrowed_book_select = Selection( [ "$.title", "$.borrow.user.login" ], 
    filter=SFilter( '$.borrowed', Operator.EQ, True ), # or filter=function()
    sort=[ "-$.borrow.date", "$.title" ] 
    )
books.register_selection("borrowed_books", borrowed_book_select)
```

| Method | Route | Description |
| -- | -- | -- |
| <kbd>GET</kbd> | \<my-app-name\>/\<collection name\>/_selections/\<selection_name\> | do the selection  |
| <kbd>GET</kbd> | \<my-app-name\>/\<collection name\>/_selections/\<selection_name\>_total | get the total  |
| <kbd>POST</kbd> | \<my-app-name\>/\<collection name\>/_selections/\<selection_name\> | do the selection with complex filter  |
| <kbd>POST</kbd> | \<my-app-name\>/\<collection name\>/_selections/\<selection_name\>_total | get the total for selection with complex filter  |



---
zoom: 0.8
---

## Selections (aka vues) 2/2

Do some _filtered tables_. <kbd>selection</kbd> = `array of path` + `a filter` + `a sort`

* the related *api route*


```bash
curl -X GET 'http://localhost/media_library/books/_selections/borrowed_books?_skip=10&_page=10' 
  '{"result": [
     ["666", "Parler couramment lorem ipsum", "Wallrich"], 
     ["1213", "Martine chez Epstein", "L..g"]
    ],
    "_skip": 10, "_page": 10}'
# Total
curl -X GET 'http://localhost/media_library/books/_selections/borrowed_books?_total=1'
'{ "total" : 12 }'
curl -X GET 'http://localhost/media_library/books/_selections/borrowed_books_total'
'{ "total" : 12 }'
```

with filter on the Selection

```bash
# All borrowed books with title containing "lorem"
curl -X GET 'http://localhost/media_library/books/_selections/borrowed_books?title.$reg=lorem'
  '{"result": [
     ["666", "Parler couramment lorem ipsum", "Wallrich"], 
    ],
    "_skip": 0, "_page": 0}'
# Total
curl -X GET 'http://localhost/media_library/books/_selections/borrowed_books?title.$reg=lorem&_total=1'
'{ "total" : 1 }'
```


---
---

## Actions (1/2)
More than just CRUD on an Item

<kbd>Action</kbd> = `Callable` + `parameters` + `rights` + `Item`

::code-group

```python [main] {all|10-16,18|11|13-14|12,1-6}
def borrow(action: Action, book: Item) -> None:
    """borrow the book"""
    book.borrow.user = action.user_id
    book.borrow.date = datetime.now().replace(microsecond=0)
    book.borrow.return_date = action.return_date
    book.save()

#
# Definition of the action
borrow_action = Action(
    {"user_id": String(require=True), "return_date": Datetime(require=True)},
    borrow,
    can_execute=can_borrow,
    exists=borrow_able,
)

# Add the action to the book collection
books.register_action("borrow", borrow_action)
```

```python [rights]
def can_borrow(right_name: str, book: Item) -> bool:
    if current_user.has_role("EMPLOYEE"):
        return True
    return False


def borrow_able(right_name: str, book: Item) -> bool:
    return not book.borrowed
```


---
---

## Actions (2/2)

### Rights
  * <kbd>exists</kbd> This actions means something ?
  * <kbd>can_execute</kbd> Does ```current_user``` can execute it ?



### Call

```bash
curl -X POST 'http://localhost/media_library/books/_actions/borrow/666'  -d \
  '{ "user_id" : "1234" "return_date" : "2026-03-17T17:17:33.671533" }'
```

| Method | Route | Description |
| -- | -- | -- |
| <kbd>POST</kbd> | \<my-app-name\>/\<collection name\>/_actions/\<action_name\>/\<_id\> | call action  |




---
layout: two-cols-header
---

## Events

::left::

Some `events` on Items or any field. 


| function | event before | event after |
| - | - | - |
| .load() |  | `loaded` |
| .save() |`before_save` | `saved` |
| .delete() | `before_delete` |  |
| .create() | None |` created` |
| | None | `changed` |


::right::

::code-group


```python [rip]
def rip( event_name, root, me, **kwargs ):
    """
    event_name = "before_delete"
    root = cat Item
    me = cat Item too (in this case)
    """
    # digg...

cat = Item( {
        'name' : String()
        'birth' : Datetime()
    },
    on=[ ( "before_delete", rip ) ]
)
```

```python [sex]

def notify_RH( event_name, root, me , **kwargs):
    print(f"{root.name} has changed from {me._old_value} to {me}")
    # Do a lot of administratif stuff

user=Item({
    "name" : String(),
    "sexe" : String( 
              require=True, 
              in=["MAN", "WOMAN", "OTHER" ],
              on=[("change", notify_sexe_modification)] 
            ),
})

```

```python [any]
def random( event_name, root, me ):
    me.set(random.randint(1, 6))

dices=Dict({
    "name" : String(),
    "dice1" : Int( default=1, on=[('roll' , random)] ),
    "dice2" : Int( default=1, on=[ ('roll' , random)] ),
})

dices.set({ "name" : "las vegas" })
# Later
dices.trigg('roll')
dices.dice1 # -> A number 1-6
dices.dice2 # -> A number 1-6
```

::




---
layout: section
---

# Connection to databases

Database handlers


---
layout: two-cols-header
---

## DBConnector (1/3)

::left::

### Related to a collection, *CRUD* Items

```python
from backo import DBMongoConnector, DBYmlConnector

# yaml collection
users_connector = DBYmlConnector(path="/tmp")
users_connector.yml_users.generate_id = \
      lambda o: f"User_{o.name}_{o.surname}"

# mongo collection
books_connector = DBMongoConnector(
    connection_string= \
      "mongodb://localhost:27017/media_library", 
    collection="Books"
)

```

* rights
  * read-only
  * read-write
* **Ref and RefsList over collections**

::right::

### Connecting rest of the world
<v-switch>
<template #1>

* Available connectors
    <Transform :scale="0.7">

    | DBConnector | description |
    | :-- | -- |
    | DBMongoConnector | Connect to a Mongo |
    | DBYmlConnector | Connect to a Yml file |
    | DBSqlite3Connector | Connect to a Sqlite2 DB |
    | DBYmlDirConnector | Connect to a list of Yml file |
    | DBRestApiConnector | Connect to another Restfull API |
    </Transform>


* <span v-mark.red=2>The way to manage integration</span>
* You can write your own
</template>

<template #2>

A <kbd>DBConnector</kbd> must implement thoses methods :

<Transform :scale="0.7">

| Method | description |
| -- | -- |
| <kbd>create()</kbd> | Create an object and get back its ```_id```  |
| <kbd>drop()</kbd> | drop the entire collection |
| <kbd>get_by_id()</kbd> | read by ```_id``` |
| <kbd>delete_by_id()</kbd> | delete by ```_id```  |
| <kbd>save()</kbd> | save an existing object |
| <kbd>select()</kbd> | select objects |
| <kbd>generate_id()</kbd> | compute an uniq ```_id```  |
| <kbd>check_structure()</kbd> | check or modify the structure according to the model  |

</Transform>

</template>
</v-switch>



---
layout: two-cols-header
zoom: 0.7
---

## DBConnector (2/3)

### select and filtering

::left::

```mermaid
sequenceDiagram
    Flask->>Backo: select -> query(...)
    Backo->>DBConnector: query -> SFilter(...)
    DBConnector-->>DBConnector: Transform SFilter -> DBFilter
    DBConnector->>DB: DBfilter
    DB->>DBConnector: [ dict ]
    DBConnector-->>Backo: SResponse( [ dict ] ... )
    Backo->>Backo: post Filtering
    Backo->>Flask: [ Item ] ...
```

::right::

* Transform SFilter into DBFilter
* Apply <kbd>Transformer(s)</kbd>
* Return a `SResponse` :
  * `sorted` is the sort done by the DB ?
    * _outside_ the scope of the DB (following a `Ref`)
  * `more_than_filter` is the filter totaly apply ?
    * Filter not understandable by the DBConnector (Yml file, ...)
    * Some filter operators not implemented in the DBConnector (list operators like `CONTAINS`, `SIZE` ... )
    * _outside_ the scope of the DB (following a `Ref`)
  
```python
# $.borrow.user is a Ref to the collection users
mySQLConnector.select(SFilter( None, Operator.AND, 
[ SFilter( "$.borrow.user.surname", Operator.EQ, "Bertrand", 
  SFilter( "$.title", Operator.REG, r"Martine.*" ) 
]))

```
Will return a `more_than_filter = True` and only an extraction from the DB with selection on `$.title`. backo will do the post filtering for the `$.borrow.user.surname`



---
layout: two-cols-header
zoom: 0.7
---

## DBConnector (3/3)

### pragma, structure and Transformers

::left::

#### DB structure alteration

<div v-click>

in some DB (relational), The DB structure must match the _backo model_.

```python
from backo.db import DBSqlite3Connector

mySQLConnector = DBSqlite3Connector( 'my_db_file.db', "books" )
# The backo model is given to the DBConnector when you define
# The DB connector in the collection
# Check the structure
is_ok, table_alteration_message = mySQLConnector.check_structure()
if is_ok is False:
    print('Hey, you must alter table(s) by doing something like :'
    print(table_alteration_message)

# Or apply automatically alterations (dangerous)
mySQLConnector.check_structure(True)

```
</div>

::right::

#### Transformers

<div v-click>

Transformers a used to :
* adapt an existing `DBConnector` to an existind DB.
  * Remove / rename fields
* transform *types* depending on the DB (ex : the storage of datetime differs)

```python
from backo.db import RenameTransformer, IgnoreTransformer
from backo.db import DBSqlite3Connector

mySQLConnector = DBSqlite3Connector( 'my_db_file.db', "books" )
# Store backo $.extend.summary into the DB "resume" field.
mySQLConnector.register_transformer(RenameTransformer(["extend", "summary"], ["resume"]))
# ignore simply "isbn_13" from the DB 
mySQLConnector.register_transformer(IgnoreTransformer(["isbn_13"]))

```

and all select and sort will be transformed :

```python
mySQLConnector.select(SFilter( "$.extend.summary", Operator.REG, r"Martine.*" ))

```
will be transformed in something like 

`SELECT * FROM books WHERE resume GLOB Martine.*`

</div>

---
layout: section
---

# Meta datas
*_id*, *metadatahandlers* and *structure*


---
layout: two-cols-header
zoom: 0.9
---

## _id & metadata

::left::

### _id

Mandatory field add to each Item of a collection

```python
# adding _id to the model
self.add_to_model("_id", String(can_modify=False))
```

::right::

### _meta

<kbd>meta_data_handler</kbd>= ```<GenericMetaDataHandler>```

by default ```StandardMetaDataHandler```

```python
o.add_to_model(
    "_meta",
    Dict(
        {
            "ctime": Datetime(description="Creation time"),
            "mtime": Datetime(description="Last modification time"),
            "created_by": Dict(
                {"_id": String(), 
                 "login": String(default="ANONYMOUS")},
                 description="Created by",
            ),
            "modified_by": Dict(
                {"_id": String(), 
                 "login": String(default="ANONYMOUS")},
                 description="Modified by",
            ),
        },
        can_modify=False,
        description="Meta data information",
    ),
)
```


---
---

## meta routes (1/3)

The way to get informations of the application for the client

| Method | Route | Description |
| -- | -- | -- |
| <kbd>GET</kbd> | /\<my-app-name\>/_meta | static description of the structure |
| <kbd>POST</kbd> | /\<my-app-name\>/\<collection name\>/_meta | dynamic description of the object |

### Use case

1. Free the `front` from every "business code"
   1. No "business code" -> automatic creation of a lot of components.
   2. Behaviour adaptation of the `front` relating to ```current_user``` and the object (Item, Action, Selection...) and rights.



---
layout: two-cols-header
zoom: 0.7
---
## meta routes (2/3)

::left::

```python
def can_see_salary(right_name, o):
    if current_user.login == o.login:
        return True
    return False

my_backoffice.register_collection(
    "users",
    Item(
        {
            "login" : String(),
            "salary" : Int( 
                          default=0, 
                          can_read=can_see_salary, 
                          can_modify=False),
        }, yml_users))
```


::right::

```bash
# Logged as "Hector"
curl -X POST 'http://localhost/myApp/users/_meta' -d \
{ 'name' : "John" }
# Will return this structure.
# rights "read" and "modify" are set to false for the salary
{
    "name": "users",
    "item": {
              "types": [
                  "Item",
                  "Dict",
                  "GenericType"
              ],
      ...
      },
      "sub_scheme": {
        "name": {
              "types": [
                  "String",
                  "GenericType"
              ],
          ...
        },
        "salary": {
              "types": [
                  "Int",
                  "GenericType"
              ],
          ...
          "exists": true,
          "rights": {
            "read": false,
            "modify": false
          },
        }
      }
    }
}
```



---
layout: two-cols-header
---

## meta routes (3/3)

Generate [openapi](https://www.openapis.org/) documentation

Will return a full openapi json structure for tools like [swagger](https://swagger.io/).

::left::


<Transform :scale="0.8">

```bash {zoom: 0.7}
curl -X GET 'http://localhost/myApp/_openapi'
# Will return openapi json structure
{
    "openapi": "3.1.0",
    "info": {
        "title": "media_library",
        "description": "media_library backoffice powered by Backo"
    },
    "paths": {
        "/books": {
            "get": {
                "summary": "List books",
                ...
```
</Transform>

::right::


![](/images/documento.png)

powered by [documento](https://github.com/backo-stricto/documento)


---
layout: section
---

# Files
Handling files


---
zoom: 0.7
---
## Files objects (1/2)

Like other [stricto types](https://github.com/backo-stricto/stricto?tab=readme-ov-file#basic-types).


| object | Description |
| -- | -- |
| <kbd>File()</kbd> | Generic object to manage a file. You need to define a FileConnector to indicate the object File where to store the file |
| <kbd>BlobFile()</kbd> | File data is integrated literally into the datastructure, so there is no need for a FileConnector. Reserved for small files. |


::code-group

```python [BlobFile] {all|4}
an_author = Item({
    'name' : String( require=True ),
    'surname' : String(),
    'pict' : BlobFile( require=True , mime_types=[ 'image/jpeg', 'image/png' ])
    'books' : RefsList( coll='books', field="$.author" )
})
```

```python [File] {all|4,5|3}
a_book = Item({
    'title' : String( require=True ),
    'thumbnail' : BlobFile( require=True , set=lambda o: o.cover.content.resize((300,300),Image.ANTIALIAS ),
    'cover' : File( require=True , mime_types=[ 'image/jpeg', 'image/png' ], 
                work=FileSystemConnector( path="/path/to/store/the/file" ) )
    'author' : RefsList( coll='authors', field="$.books" )
})
```
::

Extra specific parameters :

<Transform :scale="0.9">


| Option | Default | Description |
| - | - | - |
| ```mime_types=[ str ]``` | None | The list of allowed content types |
| ```max_size=8192``` | None | The maximum size of the file |
| ```work_connector=FileConnector``` | None | File working copy connector (main file location) |
| ```storage_connector=FileConnector``` | None | Second fileConnector used to store the file permanently after processing. If unset, file unique location is *work_connector* |

</Transform>

---
zoom: 0.7
---
## Files objects (2/2)

routes are both _embedded_ and _multipart_.

1. With files embedded in JSON in string format (for text files) or with base64 encoded (for other).
    
    ```bash
        # creating an author with a pict
        curl -X POST 'http://localhost/myApp/authors/' -d '{"surname":"John","name":"Rambo", "pict" : "base64:Sm9obiBwaWN0"}'
    ```
   
2. With a multipart route
    
    Each file is a part of the HTML multipart message. The JSON structure must be encoded in a ```_json``` multipart part.
   
    ```bash
        # creating an author with a pict
        curl -X POST -F _json='{"surname":"John","name":"Rambo"}' -F pict=@rambo.png http://localhost/myApp/authors/

        # Modifying the author picture
        curl -X PUT -F pict=@rambo1.png http://localhost/myApp/authors/id_of_rambo

        # Modifying the author picture and name
        curl -X PUT  -F _json='{ "name":"Rimbaud" }' -F pict=@rimbaud.png http://localhost/myApp/authors/id_of_rambo

    ```


* link to the file are GET \<my-app-name\>/\<collection name\>/\<_id\>/\<path\>

    ```bash
        # Link to the file
        curl -X GET http://localhost/myApp/authors/id_of_rambo/pict
    ```


---
layout: section
---

# Migration
Evolution of the DB


---
layout: two-cols-header
zoom: 0.8
---
## Evolution of the datastructure
Changing the model with datas already saved.

::left::


### Identify errors

Check where datas mismatch the model. 

Raise an error at first _id error


```python {hide|all|3}
book_item = Item({
    ...
    "note" : Float( require=True )
    ...
})
```

```python {hide|all}
# check a specific _id
report = myapp.migrate("books", _id="_id1")
# or check a list of _id
report = myapp.migrate("books", _ids=["_id1", "_id2"])
# or check all ids
report = myapp.migrate("books")
```


::right::

### Test and do Migration
<kbd>strategy=</kbd>```MigrationStrategy.DRY_RUN``` | ```MigrationStrategy.EXECUTE``` | ```MigrationStrategy.FORCE```

<div v-click>

```python
def update_with_note(o: dict) -> dict:
    """
    this the function for doing operation on objects before setting them into the Item
    """
    if "note" not in o:
        o["note"] = 10.0
    return o

# Check if OK (dry_run is True by default)
report = mybackoffice.migrate("books", update_with_note, _id="_id")
# do it for real
report = mybackoffice.migrate("books", update_with_note, _id="_id", dry_run=False)
```

</div>

---
layout: section
---

# Internal
Some internes stuffs


---
zoom: 1
---

## Transactions & rollback
* Non atomic writes
  * `Ref` and `RefsList`
  * events that can involve additional writes
* Transaction functions and rollback in case of any error
  * each api route endpoint is a transaction
  * local to a server (no clustering actually)
<v-switch>
<template #1>

## views
* The way to get sub-object of a `Item`. 
  * _examples_ :
    * It is not usefull to save computated fields (with `set=`)
    * You may want some fields to not been sent to the client

</template>
</v-switch> 

---
layout: two-cols-header
zoom: 0.7
---
# Quickstart

::left::

1. Installation 
   ```bash
   pip install backo # backo[mongo] for optional packages like mongo.
   ```
2. Initialisation (if you want)
```
   Backo>
────────────────────────────────────────
Welcome to backo  
First you must chose a name for your application.
Lets go.
────────────────────────────────────────
? Name of the application  : nationality
────────────────────────────────────────
Now you can create some "collections".
(A collection is like a sql table)
It is better to have at least one collection :).
────────────────────────────────────────
? Do you want to add a new collection in the collections list (Y/n)
...
```

3. `backoffice.py` (by hand)
   ```python
   from flask import Flask
   from collections_set import countries, people
   from backo import Backoffice, current_user, log_system

   log_system.add_handler(log_system.set_streamhandler())

   # set the flask application route
   flask = Flask("nationality")
   
   myapp = Backoffice("nationality")
   myapp.register_collection(countries)
   myapp.register_collection(people)
   myapp.add_routes(flask, "")
   
   if __name__ == "__main__":
       flask.run(host="0.0.0.0", port=5000)
   ```
::right::

4. Create _Items_ et _Collections_
   1. `Item`
   2. `Dbconnector`
5. Add some `Selection`
6. Add some `Action`
7. Add _authentication_ and _Rights_


---
layout: two-cols-header
---
# Work In Progress
Always some features in progress

::left::

## Improving

### DBConnectors

* projections & sorting improvment
* optimistic locking
* SQL databases (postgresSQL, Cassandra, influxDB)
* named selection (for complex DB filters )

### FileConnector

* different storage for files (S3, mongoDB...)

### Documentation

* Never enought doc

::right::

## Other features

* openLDAP DBConnector
  

### External modules
* Authentication
* Notification
* ...

### The front

F.R.O.N.T.O






---
layout: section
---

# Learn More


## Code

[backo](https://github.com/backo-stricto/backo)

## Documentation

[backo](https://backo.readthedocs.io/)
## Examples

[examples](https://github.com/backo-stricto/backo/tree/main/examples)

<footer>

<div class="grid grid-cols-4 gap-4" style="filter:invert(30%) saturate(1000%)">
  <div >
    <img  src="/images/backo.svg" />
  </div>
  <div>
  </div>
  <div>
  </div>
</div>

</footer>
