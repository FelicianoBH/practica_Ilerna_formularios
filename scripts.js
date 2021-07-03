
	var correcto=[];
	correcto['nombre']=true;
	correcto['apellido']=true;
	correcto['edad']=true;
	correcto['nif']=true;
	correcto['email']=true;
	var numerico;
	var listado=[];
	contador=0;

	function pasaMayuscula (id) {
	
			var valor=document.getElementById(id).value;
	
			document.getElementById(id).value=valor.toUpperCase(); 
			 
		}

	function validaNumerico(id) {

	var numero=document.getElementById(id).value;

	if (isNaN(numero)) {

			correcto['edad']=false;
			document.getElementById("l_edad").style.display="block";
			document.getElementById("edad").style.borderColor='red';		
		} 

	 if (numero<0||numero > 105) {

			correcto['edad']=false;
			document.getElementById("l_edad").style.display="block";
			document.getElementById("edad").style.borderColor='red';
		}
	} 

	
	function enviarDatos(){

		
		numerico=false;
		verNumer("nombre");
		if (numerico) {
			correcto['nombre']=false;
			document.getElementById("l_nombre").style.display="block";
			document.getElementById("nombre").style.borderColor='red';
		}
		numerico=false;
		verNumer("apellido");
		if (numerico) {
			correcto['apellido']=false;
			document.getElementById("l_apellido").style.display="block";
			document.getElementById("apellido").style.borderColor='red';
		}
		correcto['nif']=true;

		validarNif();

		validarEmail();

		if(correcto['nombre']&&correcto['apellido']&&correcto['edad']&&correcto['nif']&&correcto['email']) {

			guardaDatos();
			resetFormulario();
		}
		
	}
	
	function inicializoCampo(id) {
		
		var lid = "l_"+id;
		document.getElementById(lid).style.display="none";
		document.getElementById(id).style.borderColor='#2A2AFF';
		correcto[id]=true;
	}

	function resetFormulario() {

		const sublinea = document.querySelectorAll('.sublinea');
		sublinea.forEach(elemento =>{
			elemento.style.display='none';
		});
		const sublinea_dos = document.querySelectorAll('.campo_in');
		sublinea_dos.forEach(elemento_dos =>{
			elemento_dos.style.borderColor='#2A2AFF';
		});
		
		document.getElementById("formulario").reset();
		setTimeout(function() { document.getElementById("nombre").focus(); }, 40);
	}

	function verNumer(elemento) {

		var valor=document.getElementById(elemento).value;
		var rango=/-[0-9]|[0-9]/;
		if (valor.match(rango)) {
			numerico=true;
		}
	}
	function validarNif() {

		var valor=document.getElementById("nif").value;

		const regExp= new RegExp( /[0-9]{8}-[A-Z]/ ) 

		correcto['nif']=regExp.test(valor);

		if (!correcto['nif']) {
			document.getElementById("l_nif").style.display="block";
			document.getElementById("nif").style.borderColor='red';
		}
	}

function validarEmail() {

		var valor=document.getElementById("email").value;

		const regExp= new RegExp( /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ );

		
		correcto['email']=regExp.test(valor);

		if (!correcto['email']) {
			document.getElementById("l_email").style.display="block";
			document.getElementById("email").style.borderColor='red';
		}
	}

function guardaDatos() {

	listado[contador]= "registro número "+(contador+1)
				+" "+document.getElementById("nombre").value
				+" "+document.getElementById("apellido").value
				+" "+document.getElementById("edad").value
				+" "+document.getElementById("nif").value
				+" "+document.getElementById("email").value
				+" "+document.getElementById("seleccion").value;
	contador++;
}

function mostrarLista() {

	var linea_registro = new Array(listado.length);
	var contenido=[];
	var atributo;
	var atributo_anterior="aqui";

		for (i=0;i<linea_registro.length;i++) {
				linea_registro[i]=document.createElement("li");
				contenido[i]=document.createTextNode(listado[i]);
				atributo=atributo_anterior+i;
				linea_registro[i].setAttribute("id", atributo);
				linea_registro[i].appendChild(contenido[i]);
				document.getElementById(atributo_anterior).appendChild(linea_registro[i]);
				atributo_anterior=atributo;
			}
	}



