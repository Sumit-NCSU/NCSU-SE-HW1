var request = require('request');

var token = "token " + "<Enter your Token Code here>"; //Enter your token here.
var owner = "srivassumit"; //Enter your username here.
var reponame = "se_hw1_sample"; //Enter your reponame here
var urlroot = "https://api.github.com";

createRepo(reponame);

function createRepo(repo) {
    var options = {
        url: urlroot + '/user/repos',
		method: 'POST',
		headers: {
			"User-Agent": "ListBranches",
			"content-type": "application/json",
			"Authorization": token
		},
        json: {
			"name": repo,
			"description": "This repository is created for SE HW1, using the Git API",
  			"homepage": "https://github.com",
  			"private": false,
  			"has_issues": true,
  			"has_projects": true,
  			"has_wiki": true
		}
    };

    request(options, function(error, response, body) {
        if (body) {
            console.log(response);
        }
    });
}
