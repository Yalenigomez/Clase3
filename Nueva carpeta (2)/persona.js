
//  INTERFAZ PERSONAS 

var objPersonas=[];
var tmpIndex=0;
//var objPersona={Id,Nombre,Apellidos,Edad}; 

//funcion que recibe como parametros todo los campos que se indican en el formulario html 
function AddPersona(tmpId,tmpNombre,tmpApellidos,tmpTelefono,tmpEdad){
    let tmpLength= objPersonas.length;

    tmpIndex =tmpIndex+1;
    //tmpIndex++;
   let objPersona ={
        Id:tmpIndex,
        Nombre:tmpNombre,
        Apellidos:tmpApellidos,
        Telefono:tmpTelefono,
        Edad:tmpEdad
   }
  /*
   if(tmpLength==0){
    objPersonas[0]=objPersona;  // se setea la información del 1er objeto
   }
   else{
    objPersonas[tmpLength]=objPersona;
   }
 */
   objPersonas[tmpLength]=objPersona;
}

//Función que nos permite editar las personas, el parametro  tmpId permite buscar por el ID 
function EditarPersona(tmpId,tmpNombre,tmpApellidos,tmpTelefono,tmpEdad){
    let tmpLength= objPersonas.length;
    let objPersona;
    for(let i=0;i<tmpLength;i++){
        objPersona=objPersonas[i];
        if(objPersona.Id==tmpId){
            objPersona.Nombre=tmpNombre;
            objPersona.Apellidos=tmpApellidos;
            objPersona.Telefono=tmpTelefono;
            objPersona.Edad=tmpEdad;
            objPersonas[i]=objPersona;
            return;
        }
    }
}

//Función que nos permite borar datos, el parametro  tmpId podemos buscar por el ID y así borrar la informacòn seleccionada
function DeletePersona(tmpId){
    let tmpLength= objPersonas.length;
    let objPersona;
    let objNewPersonas=[];
    let x=0;
    for(let i=0;i<tmpLength;i++){
        objPersona=objPersonas[i];
        if(objPersona.Id!=tmpId){
            objNewPersonas[x]=objPersona;
            x++;
        }
    }

    objPersonas=objNewPersonas;
}