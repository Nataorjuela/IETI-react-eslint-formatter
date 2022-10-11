
## Estudiante: Natalia Orjuela

## Laboratorio de código

**Parte 1: Código VSC**

Instalar el complemento Prettier
Instalar el complemento Eslint


**Parte 2: Eslint**

Abra su paquete.json, baje allí en eslintConfig y déjelo como sigue:

~~~
"eslintConfig": {
	"extends": [
		"eslint:recommended",
		"react-app",
		"react-app/jest",
		"prettier"
	]
},
~~~

![image](https://github.com/Nataorjuela/IEI-react-eslint-formatter/blob/master/Imagenes/part1.png)


ejecutar npm i -D eslint

agregue estos 2 nuevos scripts al paquete.json

~~~
"lint": "eslint --ext .js,.jsx .",
"lint:fix": "npm run lint -- --fix"
Si instaló el complemento eslint , los errores de eslint aparecerán cuando pase el mouse sobre los mensajes de advertencia en su código, por ejemplo:
~~~

**Parte 3: Prettier**

ve a tu paquete.json
agregue una nueva clave debajo de eslintConfig , así:
~~~
"prettier": {}
~~~

![image](https://github.com/Nataorjuela/IEI-react-eslint-formatter/blob/master/Imagenes/part2.png)

Ir a **archivo/preferencias/configuraciones** otra alternativa es presionar en Windows **ctrl** + ,
En la Configuración de usuario, abra Editor de texto /Formateo
Haga clic en **Format On Save**.

![image](https://github.com/Nataorjuela/IEI-react-eslint-formatter/blob/master/Imagenes/part3.png)

**Parte 4: Husky**
~~~
ejecutar npm i -D husky
~~~
~~~
ejecutar npm set-script preparar "husky install"
~~~
~~~
ejecutar npm run prepare
~~~
~~~
ejecutar npm i -D prettier
~~~
~~~
ejecute npm set-script format "prettier --write".
~~~
~~~
ejecute npx husky add .husky/pre-commit "npm run lint:fix && npm format"
~~~

Ahora, cada vez que intente ejecutar un compromiso, validará que no haya errores de eslint (no advertencias), y luego formateará cada archivo en su proyecto usando nuestra configuración más bonita.
_______
 
## BACK

Correr el back colocando la variable de entorno 
MONGODB_URI=mongodb+srv://natalia:natalia123@cluster0.v4yk0md.mongodb.net/laboratorio3?retryWrites=true&w=majority

Luego de ello se corre de forma local el back como se muestra a continuación 
 
![image](https://github.com/Nataorjuela/IEI-react-hooks-router-task-planner/blob/master/Imagenes/Imagen1.png)
Para validar que funcione se prueba en postman la lista de usuarios registrados
 ![image](https://github.com/Nataorjuela/IEI-react-hooks-router-task-planner/blob/master/Imagenes/Imagen2.png)
Si se desea se pueden registrar mas usuarios para probar que funcione de forma correcta el login en el front

_______

## FRONT

Instalar todos los paquetes colocando npm install en consola
Luego colocar npm start y se nos debe abrir la pagina de login como se muestra a continuación:
 ![image](https://github.com/Nataorjuela/IEI-react-hooks-router-task-planner/blob/master/Imagenes/Imagen3.png)
Para ingresar se debe colocar el nombre y apellido, por ahora se puede ingresar con los siguientes usuarios:
•	Username: natalia
•	Apellido: orjuela
•	Username: andres
•	Apellido: Sandoval

Al momento de colocar las credenciales correctas se nos abrirá la pagina de tareas
![image](https://github.com/Nataorjuela/IEI-react-hooks-router-task-planner/blob/master/Imagenes/Imagen4.png)
 
Se puede evidencias que hay dos tareas agregadas para poder agregar o consultar una tarea se debe dar clic en el botón SELECT TASK como se muestra a continuación
 ![image](https://github.com/Nataorjuela/IEI-react-hooks-router-task-planner/blob/master/Imagenes/Imagen5.png)

Si se selecciona una tarea en la tabla inferior se verá su información 
![image](https://github.com/Nataorjuela/IEI-react-hooks-router-task-planner/blob/master/Imagenes/Imagen6.png)
Si se selecciona Add task nos enviará a la pagina de agregar tareas

![image](https://github.com/Nataorjuela/IEI-react-hooks-router-task-planner/blob/master/Imagenes/Imagen7.png)
 
Si llenamos los datos y añadimos la tarea nos enviará a la pagina principal y podremos verla y seleccionarla
 
![image](https://github.com/Nataorjuela/IEI-react-hooks-router-task-planner/blob/master/Imagenes/Imagen8.png)

