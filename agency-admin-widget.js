(function(){
  // Wait for DOM ready
  function onReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(fn, 1);
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  onReady(function() {
    function tryInject() {
      var sidebar = document.querySelector('.sidebar, .Sidebar, nav[role="navigation"]');
      if (!sidebar) {
        setTimeout(tryInject, 500);
        return;
      }
      if (sidebar.querySelector('.agency-admin-link')) return;
      var link = document.createElement('a');
      link.href = '/agency-admin';
      link.textContent = 'Agency Admin Dashboard';
      link.className = 'agency-admin-link';
      link.style.display = 'block';
      link.style.padding = '12px 16px';
      link.style.color = '#fff';
      link.style.background = '#1a202c';
      link.style.fontWeight = 'bold';
      link.style.borderRadius = '4px';
      link.style.margin = '8px 0';
      link.style.textDecoration = 'none';
      link.onmouseover = function() { link.style.background = '#2d3748'; };
      link.onmouseout = function() { link.style.background = '#1a202c'; };
      sidebar.appendChild(link);
    }
    tryInject();
  });
})();
