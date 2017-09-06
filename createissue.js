var request = require('request');

var token = "token " + "<Enter your Token Code here>"; //Enter your token here.
var owner = "srivassumit"; //Enter your username here.
var reponame = "se_hw1_sample"; //Enter your reponame here
var urlroot = "https://api.github.com";

createIssue(owner, reponame);

function createIssue(owner, repo) {
    var options = {
		url: urlroot + '/repos/'+owner+'/'+repo+'/issues',
		method: 'POST',
		headers: {
			"User-Agent": "ListBranches",
			"content-type": "application/json",
			"Authorization": token
        },
        json: {
            "title": "Sample Issue 22",
            "body": "Sample Issue 1 created using the GIT API",
              "assignee": "srivassumit",
              "labels": [
                "bug"
              ]
        }   
    };

    request(options, function(error, response, body) {
        if (body) {
            console.log(body);
        }
    });
}
