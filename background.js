chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: () => {
        chrome.tabs.create({url: 'https://fuzzy-one.github.io/bnr-converter/'});
      }
    });
  });
  