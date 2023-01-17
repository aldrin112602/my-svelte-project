<script lang="ts">
  import Router from "svelte-spa-router";
  import Home from "./routes/Home.svelte";
  import PageNotFound from "./routes/PageNotFound.svelte";
  import SignIn from "./routes/SignIn.svelte";
  import SignUp from "./routes/SignUp.svelte";
  let routes = {
    "/": Home,
    "/signin": SignIn,
    "/signup": SignUp,

    "*": PageNotFound,
  }
</script>

<main>
  <Router {routes}/>
</main>