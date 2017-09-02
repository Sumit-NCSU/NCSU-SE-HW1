var request = require('request');

var token = "token " + ""; //Enter your token here.
var owner = "srivassumit"; //Enter your username here.
var reponame = "se_hw1_sample"; //Enter your reponame here
var urlroot = "https://api.github.com";

listReactions(owner, reponame, 1);

function listReactions(owner, repo, number) {
    var options = {
        url: urlroot + '/repos/'+owner+'/'+repo+'/issues/'+number+'/reactions',
		method: 'GET',
		headers: {
			"User-Agent": "ListBranches",
			"content-type": "application/json",
            "Authorization": token,
            "Accept": "application/vnd.github.squirrel-girl-preview"
        }       
    };
   
    request(options, function(error, response, body) {
        var obj = JSON.parse(body);
        console.log('List of Reactions: ');
        if (obj.length>0) {
            for(var i=0; i<obj.length; i++) {
                console.log('\t'+obj[i].content);
            }
        } else {
            console.log("\tNo reactions found");
        }
    });
}