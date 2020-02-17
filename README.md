# SINANTICA API

# Rutas

**[POST]** HOST:PORT/subirFoto

Este endpoint recibe la imagen a procesar. El servidor genera un hash de encriptación, encripta la fotografía y la almacena encriptada a la base de datos.
Recibe como entrada un JSON con la siguiente estructura:
```json
{"image": "STRING_BASE64"}
```
La respuesta es otro JSON con la siguiente estructura

```json
{
  "result": {},
  "metadata": {
    "id_foto": "ID_FOTO_EN_BASE_DE_DATOS",
    "foto_password": "HASH_DE_DESENCRIPTACION"
  }
}
```

**[GET]** HOST:PORT/obtenerFoto
Este endpoint recibe la id de la fotografía junto con el hash de encriptación. Para luego devolver la imagen representada por un string Base64
Parámetros de la solicitud HTTP:
- **foto_password:** Hash de encriptación de la fotografía
- **foto_id:** Id de la fotografía almacenada en la base de datos

# Almacenamiento de Hashes de encriptación e id's de fotografías
Es importante aclarar que los hashes de encriptación e id's de fotografías deben ser almacenados por la entidad que se conecte a esta API, esta api sólo almacena las fotografías encriptadas y si por algún motivo se pierde el hash de encriptación quedará inservible. Al igual para la id de la fotografía, la API no almacena ninguna relación de la ID de las fotografías guardadas con otros datos, como por ejemplo, id de usuarios. 
