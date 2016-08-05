var GithubSearch = require('./../js/ghlookup.js').githubModule;


var displayUser = function(userData) {

  $('#user-output').html(
    "<a href='" + userData.html_url + "'><img id='user-img' src='" + userData.avatar_url +"'></a><br><h3>" + userData.login + "</h3><br><h4>" + userData.name + "</h4>" );
};

var displayRepos = function(userRepos) {
  
  $("#user-repos").empty();
  if(userRepos.length === 0) {
    $('#repos').prepend("This user has no repositories.");
  } else {
    // $('#repos').prepend("<h2>Repositories: </h2>");
    for (i = 0; i < userRepos.length; i++) {
      var creationDate = moment(userRepos[i].created_at).format("LLLL");
      $('#user-repos').prepend("<li><a href='" + userRepos[i].html_url + "'>" + userRepos[i].name + "</a> | Created on: " + creationDate + "</li>");
    }
  }
};

$(document).ready(function(){

  $('#user-search').submit(function(event){
    event.preventDefault();
    var userName = $('#name').val();
    var newGhSearch = new GithubSearch();

    newGhSearch.searchByUserName(userName, displayUser);
    newGhSearch.getRepos(userName, displayRepos);

  });

});
