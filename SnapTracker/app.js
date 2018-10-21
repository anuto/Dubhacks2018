"use strict";
(function(){

  window.onload = function() {
    var search = instantsearch({
      appId: '96JAIT9AVT',
      apiKey: '407d8d1c10fc9e319846a7324f4aeddf',
      indexName: 'food',
      urlSync: true,
      searchParameters: {
        hitsPerPage: 10
      }
    });

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-input'
      })
    );

    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits',
        templates: {
          item: document.getElementById('hit-template').innerHTML,
          empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
        }
      })
    );

    search.start();
  }
})();
