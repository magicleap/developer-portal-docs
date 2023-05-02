const EAP_DOMAIN = '*';

// Checks if the page being loaded is NOT in an iframe
// If not an iframe (AKA window.self === window.top) then force a redirect to
// the parent website
const isDirectDocsNavigation = window.self === window.top;
// console.log(window.self);
// console.log(window.top);
if (isDirectDocsNavigation === true && window.location.hostname === "developer.magicleap.cloud") {
  const query = `?docPath=${encodeURIComponent(window.location.pathname)}`;
  const redirection = `${window.location.origin}${query}`;

  console.debug(`Redirect to ${redirection}`);
  window.location.replace(redirection);
}

let titleCheck = setInterval(function () {
  const title = document.querySelector('title');
  if (title) {
    clearInterval(titleCheck);
    new MutationObserver(function (mutations) {
      mutations.forEach(function () {
        if (window.parent !== window) {
          window.parent.postMessage(
            {
              type: 'titlechange',
              title: document.title,
            },
            EAP_DOMAIN
          );
          console.debug('titlechange', document.title);
        }
      });
    }).observe(title, {
      childList: true,
    });
  }
}, 100);

const pushState = history.pushState;
history.pushState = function () {
  pushState.apply(this, arguments);
  window.dispatchEvent(new Event('urlchange'));
};
const replaceState = history.replaceState;
history.replaceState = function () {
  replaceState.apply(this, arguments);
  window.dispatchEvent(new Event('urlchange'));
};
window.addEventListener('popstate', function () {
  window.dispatchEvent(new Event('urlchange'));
});
window.addEventListener('urlchange', function () {
  if (window.parent !== window) {
    window.parent.postMessage(
      {
        type: 'urlchange',
        location: document.location.pathname,
        hash: document.location.hash,
      },
      EAP_DOMAIN
    );
  }
  console.debug(
    'urlchange',
    document.location.pathname,
    document.location.hash
  );
});

// on initial load, docusaurus does not move the window to the anchor
// so this is a workaround by resetting the window location hash
window.addEventListener("load", () => {
  const anchor = window.location.hash;

  window.location.hash = "#";
  window.location.hash = anchor;
});
