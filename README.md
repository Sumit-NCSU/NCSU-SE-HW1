# HW1
CSC510 Software Engineering HW1

* Steps to Run:
  * Clone the repository: `git clone https://github.ncsu.edu/ssrivas8/HW1`
  * Cd to HW1 directory: `cd HW1`
  * Do `npm install` inside the HW1 folder to install all the dependencies specified in the package.json.
  * To run the scripts type: `node <scriptname>.js` , where `scriptname` is the name of the script to be run.

**Note: For the scripts, you need to enter your github token, your github username (from public GitHub) and your reponame in the `token`, `owner` and `reponame` variables inside all the scripts. For my testing, I have used the following repo on my public GitHub: [se_hw1_sample](https://github.com/srivassumit/se_hw1_sample)

* Code:
  * [List Branches](listbranches.js)
  * [Create a new Repo](createrepo.js)
  * [Create an Issue](createissue.js)
  * [Editing a Repo](editrepo.js)
  * [Listing Reactions](listreactions.js)

* Concepts:
1. Additional concerns related to REST APIs:
   * Ambiguous usage and different interpretations of the Response Codes. For example, on succesfully creating a record, some APIs might retusn Code `200 OK` while others might return Code `201 Created`.
   * They are difficult to debug: There are a number of things that could go wrong for example - the end point, the route mapping, the request mapping, etc.
   * Difficult to maintain: It is difficult to maintain a large codebase for a REST API as it would involve a lot of refactoring moreover, it could be tricky to remove old endpoints as some users might still be using it.
   * They are closely coupled with HTTP (usually)

2. Benefits and disadvantages of using a RESTful architecture vs. a graph query language:
  
* Benefits
  * REST has hypermedia controls, GraphQL does not.
  * REST provides easy chaching unlike GraphQL
  
* Disadvantages
  * GraphQL puts client performance first
  * It is lightweight
  * It reduces network overhead as it doesn't require multiple calls to fetch the data.

 * Link to GitHub Pages webpage: [About Me](https://pages.github.ncsu.edu/ssrivas8/HW1/)
