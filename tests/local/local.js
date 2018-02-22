module.exports = {
    'BrowserStack Local Testing' : function (browser) {
      browser
        .url('http://localhost:8080/life-style/well-good/inspire-me/90103955/how-four-kiwis-changed-their-diets-to-save-their-lives')
        .waitForElementVisible('body', 1000)
        .assert.containsText('body', 'Up and running')
        .end();
    }
  };