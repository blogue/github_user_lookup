var GithubSearch = require('./../js/ghlookup.js').githubModule;


var displayUser = function(userData) {

  $('#user-output').html(
    "<img id='user-img' src='" + userData.avatar_url +"'><br><h3>" + userData.login + "</h3><br>" );

};

$(document).ready(function(){

  $('#user-search').submit(function(event){
    event.preventDefault();
    var userName = $('#name').val();
    var newGhSearch = new GithubSearch();

    newGhSearch.searchByUserName(userName, displayUser);
  });

});
