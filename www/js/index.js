
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        window.plugins.sim.getSimInfo(successCallback, errorCallback);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement   = document.getElementById(id);
        var listeningElement= parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();




function successCallback(result) {
  console.log(result);
 
 /*document.getElementById("cardKey1").innerHTML = JSON.stringify(result.simSerialNumber);
   document.getElementById("cardKey2").innerHTML = JSON.stringify(result.carrierName);
   document.getElementById("cardKey3").innerHTML = JSON.stringify(result.countryCode);
   document.getElementById("cardKey4").innerHTML = JSON.stringify(result.mcc);
   document.getElementById("cardKey5").innerHTML = JSON.stringify(result.mnc);
   document.getElementById("cardKey6").innerHTML = JSON.stringify(result.networkType);
   document.getElementById("cardKey7").innerHTML = JSON.stringify(result.phoneType);
   document.getElementById("cardKey8").innerHTML = JSON.stringify(result.simState); */

      var carrierName = JSON.stringify(result.carrierName);
      var carrierName = carrierName.replace(/\s+/g, '');
      var carrierName = eval(carrierName);
     // alert(carrierName);
     
      var countryCode = JSON.stringify(result.countryCode);
      var countryCode = eval(countryCode);

      var mcc = JSON.stringify(result.mcc);
      var mcc = eval(mcc);

      var mnc = JSON.stringify(result.mnc);
      var mnc = eval(mnc);

      var networkType = JSON.stringify(result.networkType);
      var networkType = eval(networkType);

      var phoneType = JSON.stringify(result.phoneType);
      var phoneType = eval(phoneType);

      var simState = JSON.stringify(result.simState);
      var simState = eval(simState);
      
     
      document.getElementById("cardKey1").innerHTML = eval(JSON.stringify(result.simSerialNumber));
      document.getElementById("cardKey2").innerHTML = carrierName+countryCode+mcc+mnc+phoneType+simState;  
      
}


function errorCallback(error) {
  console.log(error);
}

// Android only: check permission
function hasReadPermission() {
  window.plugins.sim.hasReadPermission(successCallback, requestReadPermission);
}

// Android only: request permission
function requestReadPermission() {
  window.plugins.sim.requestReadPermission(successCallback, errorCallback);
}


 function printscreen(){

  navigator.screenshot.save(function(error,res){
    if(error){
       console.error(error);
    }else{
       console.log('ok',res.Pictures/Screenshots/printscreen.png); 
    }
 },'png',50,'printscreen');
}




















