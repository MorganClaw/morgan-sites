// 3Way Group — Shared Auth
// Include in every sub-page. Redirects to portal if not authenticated.
(function () {
  var token = localStorage.getItem('3way_session');
  if (token !== 'granted') {
    var dest = encodeURIComponent(window.location.pathname + window.location.search);
    window.location.replace('/?r=' + dest);
  }
})();
