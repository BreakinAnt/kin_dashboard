<template>
  <nav id="sidebar" class="sidebar js-sidebar">
    <div class="sidebar-content js-simplebar">
      <a class="sidebar-brand" href="index.html">
        <span class="align-middle">AdminKit</span>
      </a>

      <ul class="sidebar-nav">
        <li class="sidebar-header">Pages</li>

        <li class="sidebar-item active">
          <a class="sidebar-link" href="index.html">
            <i class="align-middle" data-feather="sliders"></i>
            <span class="align-middle">Dashboard</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="pages-profile.html">
            <i class="align-middle" data-feather="user"></i>
            <span class="align-middle">Profile</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="pages-sign-in.html">
            <i class="align-middle" data-feather="log-in"></i>
            <span class="align-middle">Sign In</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="pages-sign-up.html">
            <i class="align-middle" data-feather="user-plus"></i>
            <span class="align-middle">Sign Up</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="pages-blank.html">
            <i class="align-middle" data-feather="book"></i>
            <span class="align-middle">Blank</span>
          </a>
        </li>

        <li class="sidebar-header">Tools & Components</li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="ui-buttons.html">
            <i class="align-middle" data-feather="square"></i>
            <span class="align-middle">Buttons</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="ui-forms.html">
            <i class="align-middle" data-feather="check-square"></i>
            <span class="align-middle">Forms</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="ui-cards.html">
            <i class="align-middle" data-feather="grid"></i>
            <span class="align-middle">Cards</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="ui-typography.html">
            <i class="align-middle" data-feather="align-left"></i>
            <span class="align-middle">Typography</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="icons-feather.html">
            <i class="align-middle" data-feather="coffee"></i>
            <span class="align-middle">Icons</span>
          </a>
        </li>

        <li class="sidebar-header">Plugins & Addons</li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="charts-chartjs.html">
            <i class="align-middle" data-feather="bar-chart-2"></i>
            <span class="align-middle">Charts</span>
          </a>
        </li>

        <li class="sidebar-item">
          <a class="sidebar-link" href="maps-google.html">
            <i class="align-middle" data-feather="map"></i>
            <span class="align-middle">Maps</span>
          </a>
        </li>
      </ul>

      <div class="sidebar-cta">
        <div class="sidebar-cta-content">
          <strong class="d-inline-block mb-2">Upgrade to Pro</strong>
          <div class="mb-3 text-sm">
            Are you looking for more components? Check out our premium version.
          </div>
          <div class="d-grid">
            <a href="upgrade-to-pro.html" class="btn btn-primary"
              >Upgrade to Pro</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { Icon } from '@iconify/vue';
  import { onMounted, ref } from 'vue';
  import SimpleBar from 'simplebar';

  // Usage: https://github.com/Grsmto/simplebar
  const initialize = () => {
    initializeSimplebar();
    initializeSidebarCollapse();
  };

  const initializeSimplebar = () => {
    const simplebarElement = document.getElementsByClassName('js-simplebar')[0];

    if (simplebarElement) {
      const simplebarInstance = new SimpleBar(
        document.getElementsByClassName('js-simplebar')[0]
      );

      /* Recalculate simplebar on sidebar dropdown toggle */
      const sidebarDropdowns = document.querySelectorAll(
        '.js-sidebar [data-bs-parent]'
      );

      sidebarDropdowns.forEach(link => {
        link.addEventListener('shown.bs.collapse', () => {
          simplebarInstance.recalculate();
        });
        link.addEventListener('hidden.bs.collapse', () => {
          simplebarInstance.recalculate();
        });
      });
    }
  };

  const initializeSidebarCollapse = () => {
    const sidebarElement = document.getElementsByClassName('js-sidebar')[0];
    const sidebarToggleElement =
      document.getElementsByClassName('js-sidebar-toggle')[0];

    if (sidebarElement && sidebarToggleElement) {
      sidebarToggleElement.addEventListener('click', () => {
        sidebarElement.classList.toggle('collapsed');

        sidebarElement.addEventListener('transitionend', () => {
          window.dispatchEvent(new Event('resize'));
        });
      });
    }
  };

  onMounted(() => {
    // Wait until page is loaded
    initialize();
  });
</script>
