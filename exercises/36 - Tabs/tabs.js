const tabs = document.querySelector('.tabs');
const tabBtns = tabs.querySelectorAll('[role="tab"]');
// const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
// METHOD #2 - FIND METHOD
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
  console.log(e.currentTarget);
  // HIDE OTHER TAB PANELS
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // MARK ALL TABS AS UNSELECTED
  tabBtns.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  // MARK CURRENT TAB AS SELECTED
  e.currentTarget.setAttribute('aria-selected', true);
  // FIND THE ASSOCIATED TAB PANEL AND SHOW IT
  const { id } = e.currentTarget;

  /* METHOD #1
const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
   tabPanel.hidden = false;
*/

  // METHOD #2
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabBtns.forEach(button => button.addEventListener('click', handleTabClick));
