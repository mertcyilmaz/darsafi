<template>
  <header>
    <nav class="flex justify-center gap-xs mt-lg">
      <router-link to="/" class="nav-btn" aria-label="Home">
        <span class="tooltip">Home</span>
        <img src="@/assets/images/home.png" alt="Home icon" width="24" height="24" style="display:block;" />
      </router-link>
      <router-link to="/work" class="nav-btn" aria-label="Work Package">
        <span class="tooltip">Work Packages</span>
        <img src="@/assets/images/work.png" alt="Work Package icon" width="24" height="24" style="display:block;" />
      </router-link>
      <router-link to="/news" class="nav-btn" aria-label="News">
        <span class="tooltip">News</span>
        <img src="@/assets/images/news.png" alt="News icon" width="24" height="24" style="display:block;" />
      </router-link>
      <router-link to="/repository" class="nav-btn" aria-label="Repository">
        <span class="tooltip">Repository</span>
        <img src="@/assets/images/repository.png" alt="Repository icon" width="24" height="24" style="display:block;" />
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
