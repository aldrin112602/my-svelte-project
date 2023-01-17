<script>
  export let toggleDarkTheme, darkmode
</script>

<div class="side-bar w-full p-5 md:hidden shadow-lg">
  <ul class="pl-6 leading-10">
    <li class="flex items-center justify-between">
      <a href="/" class="font-bold">Home</a>
      <button
        class="material-symbols-outlined border-0 cursor-pointer font-bold"
        on:click={toggleDarkTheme}>
        {darkmode ? 'light_mode' : 'dark_mode'}
      </button>
    </li>
    <li>
      <a href="/#" class="font-bold">Features</a>
    </li>
    <li>
      <a href="/#" class="font-bold">About</a>
    </li>
    <li>
      <a href="/#" class="font-bold">Company</a>
    </li>
    <li>
      <a href="/#" class="font-bold">Contact Developer</a>
    </li>
  </ul>
  <div class="mt-7 flex items-center justify-end px-5">
    <a href="/#/signin" class="mr-4 font-bold">Sign In</a>
    <a href="/#/signup" class="text-center px-5 w-1/3 bg-blue-600 text-white rounded-md py-2 border-0
        font-bold">   
        Sign Up
    </a>

  </div>
</div>
