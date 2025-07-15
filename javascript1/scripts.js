function temperature()
{
     //To convert celsius to farenheit
    //(CEL * 9/5) + 32
    /**
   * Indicate your element type will be HTMLInputElement
   * @type HTMLInputElement
   */
    
    var c = document.getElementById("celsuis").value;
   
    var f = (c * 9/5) + 32
    
    document.getElementById("fahrenheit").value = f
}