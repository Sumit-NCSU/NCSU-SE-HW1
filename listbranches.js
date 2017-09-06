var request = require('request');

var token = "token " + "<<Enter your Token Code here>>"; //Enter your token here.
var owner = "srivassumit";  //Enter your username here.
var reponame = "se_hw1_sample";  //Enter your reponame here.
var urlroot = "https://api.github.com";

listBranches(owner, reponame);

function listBranches(owner, repo) {
	var options = {
        url: urlroot + '/repos/'+owner+'/'+repo+'/branches',
        method: 'GET',
        headers: {
            "User-Agent": "ListBranches",
            "content-type": "application/json",
            "Authorization": token
        }
    };

    request(options, function(error, response, body) {
        var obj = JSON.parse(body);
        console.log('List of Branches: ');
        if (obj.length>0) {
            for(var i=0; i<obj.length; i++) {
                console.log('\t'+obj[i].name);
            }
        } else {
            console.log("\tNo branches found");
        }
    });
}
