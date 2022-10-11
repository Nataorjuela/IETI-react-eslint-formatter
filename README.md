
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

![image](https://github.com/Nataorjuela/IETI-react-eslint-formatter/blob/master/Imagenes/part1.png)


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

![image](https://github.com/Nataorjuela/IETI-react-eslint-formatter/blob/master/Imagenes/part2.png)

Ir a **archivo/preferencias/configuraciones** otra alternativa es presionar en Windows **ctrl** + ,
En la Configuración de usuario, abra Editor de texto /Formateo
Haga clic en **Format On Save**.

![image](https://github.com/Nataorjuela/IETI-react-eslint-formatter/blob/master/Imagenes/part3.png)

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

![image](https://github.com/Nataorjuela/IETI-react-eslint-formatter/blob/master/Imagenes/part4.png)
