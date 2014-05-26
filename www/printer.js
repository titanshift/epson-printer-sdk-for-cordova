var printer = {
    echo: function(title, successCallback, errorCallback) {

    	cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'Printer', // mapped to our native Java class called "Calendar"
            'echo', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "title": title,
                "startTimeMillis": startDate.getTime(),
                "endTimeMillis": endDate.getTime()
            }]
        ); 
 
    }
}

module.exports = printer;