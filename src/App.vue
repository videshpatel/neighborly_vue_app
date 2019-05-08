<template>
  <div id="app">
    <div id="nav">
      <header>
        <!-- Navbar -->
        <nav class="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
          <div class="container">
            <!-- Brand -->
            <a class="navbar-brand waves-effect" href="/">
              <h4>
                <b><strong class="blue-text">Neighborly</strong></b>
              </h4>
            </a>

            <!-- Collapse -->
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <!-- Left -->
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link waves-effect" href="/discussions">
                    Discussions
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Discussion Channel
                  </a>
                  <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="/discussions">All</a>
                    <a class="dropdown-item" href="/channels/13">General</a>
                    <a class="dropdown-item" href="/channels/14">For Sale</a>
                    <a class="dropdown-item" href="/channels/15">Wanted</a>
                    <a class="dropdown-item" href="/channels/16">Crime & Safety</a>
                    <a class="dropdown-item" href="/channels/17">Lost & Found</a>
                    <a class="dropdown-item" href="/channels/18">Events</a>
                    <a class="dropdown-item" href="/channels/19">Alerts!</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link waves-effect" href="/events">
                    Events
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link waves-effect" href="https://mdbootstrap.com/education/bootstrap/" target="_blank">
                    Free tutorials
                  </a>
                </li>
              </ul>

              <!-- Right -->
              <ul class="navbar-nav nav-flex-icons">
                <li class="nav-item">
                  <a href="/login" class="nav-link waves-effect">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/logout" class="nav-link waves-effect">
                    Logout
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/Signup" class="nav-link waves-effect">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!-- Navbar -->
      </header>
      <h1>.</h1>
    </div>
    <router-view />
    <footer class="page-footer text-center font-small mdb-color darken-2 mt-4 wow fadeIn">
      <hr class="my-4" />

      <!-- Social icons -->
      <div class="pb-4">
        <a href="https://www.facebook.com/" target="_blank">
          <i class="fab fa-facebook-f mr-3"></i>
        </a>

        <a href="https://twitter.com/" target="_blank">
          <i class="fab fa-twitter mr-3"></i>
        </a>

        <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="_blank">
          <i class="fab fa-youtube mr-3"></i>
        </a>

        <a href="https://dribbble.com/" target="_blank">
          <i class="fab fa-dribbble mr-3"></i>
        </a>

        <a href="https://pinterest.com/" target="_blank">
          <i class="fab fa-pinterest mr-3"></i>
        </a>

        <a href="https://github.com//videshpatel" target="_blank">
          <i class="fab fa-github mr-3"></i>
        </a>

        <a href="http://codepen.io//" target="_blank">
          <i class="fab fa-codepen mr-3"></i>
        </a>
      </div>
      <!-- Social icons -->

      <!--Copyright-->
      <div class="footer-copyright py-3">
        © 2019 Copyright:
        <a>Neighborly.com</a>
      </div>
      <!--/.Copyright-->
    </footer>
  </div>
</template>

<style></style>
