//var encrypted = CryptoJS.AES.encrypt();

function Main() {
    var encrypted = CryptoJS.AES.decrypt("U2FsdGVkX18z+MqmrzMIbIXppYg2K97iu+YJgi51GvPR14KT3FakkA7jUvBq5SyrvtkyaiFLn+sKYym/QN3VTpEAAF8Q4IlGvWWOh0TiNrY=", document.getElementById("passwd").value);
    document.getElementById("res").innerHTML = encrypted.toString(CryptoJS.enc.Utf8); 
    document.getElementById("res").href = encrypted.toString(CryptoJS.enc.Utf8); 
};

