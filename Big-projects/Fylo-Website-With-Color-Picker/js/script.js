const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // Show Light Icon
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

// Listen For Toggle Button Click
themeToggleBtn.addEventListener('click', toggleMode)

function toggleMode() {
    // Toggle Icon
    themeToggleDarkIcon.classList.toggle('hidden')
    themeToggleLightIcon.classList.toggle('hidden');

    // If is Set in local storage
    if(localStorage.getItem('color-theme')) {
        // if light, make dvark and save in local storage
        if (localStorage.getItem('color-theme') == 'light' ) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        }
    } else {
        // if not in local storage
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')

        }
    }
}

