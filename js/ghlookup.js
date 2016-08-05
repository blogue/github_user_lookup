var apiKey = require('./../.env').apiKey;

function GithubSearch() {
}

GithubSearch.prototype.searchByUserName = function(userName, displayUser) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayUser(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

GithubSearch.prototype.getRepos = function(userName, displayRepos) {
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    displayRepos(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};


exports.githubModule = GithubSearch;
