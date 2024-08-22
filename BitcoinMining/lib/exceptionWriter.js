var fs = require('fs');
var cluster = require('cluster');

//var dateFormat = require('dateformat');


module.exports = function(logSystem){
    (async () => {
        const { default: dateFormat } = await import('dateformat');
      
    
    process.on('uncaughtException', function(err) {
        console.console.log('\n' + err.stack + '\n');
        var time = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
        fs.appendFile(config.logging.files.directory + '/' + logSystem + '_crash.log', time + '\n' + err.stack + '\n\n', function(err){
            if (cluster.isWorker)
                process.exit();
        });
    });
        // Use dateFormat here
})();
};

