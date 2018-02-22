module.exports = {
    'Interactive Iframe' : function (browser) {
      browser
      .url('https://www-preprod.stuff.co.nz/life-style/well-good/inspire-me/90103955/how-four-kiwis-changed-their-diets-to-save-their-lives')
      .waitForElementVisible('body', 1000)
      .assert.containsText('.sics-component__headline__title', 'How four Kiwis changed their diets to save their lives')
      .end();
    }
  };