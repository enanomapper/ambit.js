# ambit.js
JavaScript library for interaction with AMBIT instances.

## Example use

### Step 1: include the libraries

    <script src="lib/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="lib/purl.js"></script>
    <script type="text/javascript" src="src/ambit.js"></script>
    <script type="text/javascript" src="src/Substance.js"></script>

### Step 2: define the server (JavaScript code)

    var searcher = new Ambit.Substance("https://apps.ideaconsult.net/enanomapper");

### Step 3: define a callback function (yes, we're making asynchronouos calls)

    var callback = function(success, status, response) {
      document.getElementById("json").innerHTML =
        "<pre>" + JSON.stringify(response, null, '  ') + "</pre>";
    };
    searcher.list(callback);

Of course, this part requires a properly set up HTML page with an element whose identifier is "json".

## Dependencies
The library depends jquery-1.9.1.min.js	and purl.js. It can be mashed up with d3.js which is also included in the lib/ folder.


## Inspiration
This library is based on the ideas from Ian Dunlop whom developed ops.js for Open PHACTS.
