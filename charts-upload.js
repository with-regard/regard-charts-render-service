var azure = require('azure-storage');
var Promise = require('promise');
var uuid = require('node-uuid');

var blobSvc = azure.createBlobService();

module.exports = {
  upload: function(data) {
    return new Promise(function(fulfil, reject) {
          var stream = blobSvc.createWriteStreamToBlockBlob('regardcharts', uuid.v4() + '.png');

          stream.on('error', reject);
          stream.on('close', function() {
	    fulfil('some url');
	  });

          stream.end(data);
    });
  }
}
