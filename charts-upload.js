var azure = require('azure-storage');
var Promise = require('promise');
var uuid = require('node-uuid');

var blobSvc = azure.createBlobService();

module.exports = {
  upload: function(data) {
    return new Promise(function(fulfil, reject) {
          var filename = uuid.v4() + '.png';
          var stream = blobSvc.createWriteStreamToBlockBlob('regardcharts', filename, {
            contentType: 'image/png'
          });

          stream.on('error', reject);
          stream.on('close', function() {
	    fulfil('https://regardproduction.blob.core.windows.net/regardcharts/' + filename);
	  });

          stream.end(new Buffer(data));
    });
  }
}
