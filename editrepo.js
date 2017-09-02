var request = require('request');

var token = "token " + ""; //Enter your token here.
var owner = "srivassumit"; //Enter your username here.
var reponame = "se_hw1_sample"; //Enter your reponame here
var urlroot = "https://api.github.com";

editRepo(owner, reponame);

function editRepo(owner, repo) {
    var options = {
        url: urlroot + '/repos/'+owner+'/'+repo,
		method: 'PATCH',
		headers: {
			"User-Agent": "ListBranches",
			"content-type": "application/json",
			"Authorization": token
        },
        json: {
            "name": repo,
            "has_wiki": true
        }
    };

    request(options, function(error, response, body) {
        if (body) {
            console.log(body);
        }
    });
}