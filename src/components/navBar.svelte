<script>
  let darkmode = false, toggleNav = false;
  const toggleDarkTheme = () => {
    darkmode = !darkmode;
    document.getElementById('html').className = darkmode ? "dark" : "";
  };
</script>

<nav
  class="w-full p-6
 flex items-center justify-between text-slate-700 dark:bg-slate-800 dark:text-white"
>
  <div class="flex items-center justify-between">
    <img src="/favicon.png" width="60px" alt="">
    <em class="font-bold text-indigo-600 dark:text-white">Sveltly-Fy</em>
  </div>
  <ul class="hidden md:flex items-center justify-center gap-8">
    <li>
      <a href="/#" class="font-bold">Product</a>
    </li>
    <li>
      <a href="/#" class="font-bold">Features</a>
    </li>
    <li>
      <a href="/#" class="font-bold">Pricing</a>
    </li>
    <li>
      <a href="/#" class="font-bold">Company</a>
    </li>
    <li>
      <a href="/#" class="font-bold">Blog</a>
    </li>
  </ul>
  <div class="hidden md:flex items-center justify-end">
    <button
      class="px-5 bg-blue-600 text-white rounded-md py-2 mr-4 border-0 font-bold"
      >Get Started</button
    >
    <button
      class="material-symbols-outlined border-0 cursor-pointer font-bold"
      on:click={toggleDarkTheme}
      >{darkmode ? "light_mode" : "dark_mode"}</button
    >
  </div>

  <div class="md:hidden">
    <button
      class="material-symbols-outlined cursor-pointer border-0 font-bold"
      on:click={() => (toggleNav = !toggleNav)}
      >{toggleNav ? "close" : "menu"}</button
    >
  </div>
</nav>
<style>
  a:hover {
    color: rgb(60, 60, 215);
  }
</style>
